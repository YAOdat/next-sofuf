'use client';
import React, { useState, useEffect, Fragment } from 'react';
import { getFirestore, collection, doc, getDoc, getDocs, deleteDoc } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from '@/config/firebase';
import { title } from "@/components/primitives";
import SubNav from "@/components/subNavBar";
import { Menu, Transition } from '@headlessui/react';
import { FiMapPin, FiDollarSign, FiCalendar, FiHexagon, FiExternalLink, FiTrash2, FiEdit } from "react-icons/fi";
import { Link, Card, Button } from "@nextui-org/react";
import { useTheme } from "next-themes";

interface Career {
  id: string;
  jobTitle: string;
  companyName: string;
  city: string;
  country: string;
  datePosted: string;
  description: string;
  industry: string;
  workLoc: string;
  salary: string;
  applicationLink: string;
}

export default function CareersPage() {
  const [careersData, setCareersData] = useState<Career[]>([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth(app);
  const db = getFirestore(app);
  const { theme } = useTheme();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userDoc = doc(db, 'users', user.uid);
        const userSnapshot = await getDoc(userDoc);
        if (userSnapshot.exists()) {
          const userData = userSnapshot.data();
          setIsAdmin(userData.role === 'admin');
        }
      }
    });

    return () => unsubscribe();
  }, [auth, db]);

  useEffect(() => {
    const fetchCareers = async () => {
      try {
        const careersCollection = collection(db, 'careers');
        const snapshot = await getDocs(careersCollection);
        const careersData: Career[] = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id
        })) as Career[];
        setCareersData(careersData);
      } catch (error) {
        console.error('Error fetching careers:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCareers();
  }, []);

  const handleDeleteJob = async (jobId: string) => {
    if (window.confirm('Are you sure you want to delete this job posting?')) {
      try {
        const jobRef = doc(db, 'careers', jobId);
        await deleteDoc(jobRef);
        setCareersData(prev => prev.filter(career => career.id !== jobId));
      } catch (error) {
        console.error('Error deleting job:', error);
      }
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-pulse text-gray-500">Loading careers...</div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className={`${title()} mb-8 text-center w-full`}>Careers</h1>
      <SubNav />

      <div className="mt-8 space-y-6">
        {careersData.length > 0 ? (
          careersData
            .sort((a, b) => new Date(b.datePosted).getTime() - new Date(a.datePosted).getTime())
            .map((career) => (
              <Card
                key={career.id}
                className={`p-6 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-lg transition-all hover:shadow-xl`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <Link
                      href={`careers/${career.id}`}
                      className={`text-2xl font-bold ${theme === 'dark' ? 'text-white hover:text-gray-300' : 'text-gray-900 hover:text-gray-700'} transition-colors`}
                    >
                      {career.jobTitle}
                    </Link>
                    <p className="mt-1 text-lg font-medium text-gray-500">{career.companyName}</p>

                    <div className="mt-4 flex flex-wrap gap-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <FiHexagon className="mr-1.5 h-5 w-5 text-gray-400" />
                        {career.industry}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <FiMapPin className="mr-1.5 h-5 w-5 text-gray-400" />
                        {career.city}, {career.country}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <FiDollarSign className="mr-1.5 h-5 w-5 text-gray-400" />
                        {career.salary}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <FiCalendar className="mr-1.5 h-5 w-5 text-gray-400" />
                        {career.datePosted}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 mt-4 lg:mt-0">
                    <Button
                      as={Link}
                      href={`careers/${career.id}`}
                      className="bg-primary text-white"
                    >
                      View Details
                    </Button>

                    <Button
                      as={Link}
                      href={career.applicationLink}
                      className="bg-success text-white"
                      target="_blank"
                      rel="noopener noreferrer"
                      startContent={<FiExternalLink />}
                    >
                      Apply Now
                    </Button>

                    {isAdmin && (
                      <div className="flex gap-2">
                        <Button
                          className="bg-warning text-white"
                          startContent={<FiEdit />}
                          as={Link}
                          href={`careers/edit/${career.id}`}
                        >
                          Edit
                        </Button>
                        <Button
                          className="bg-danger text-white"
                          startContent={<FiTrash2 />}
                          onClick={() => handleDeleteJob(career.id)}
                        >
                          Delete
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            ))
        ) : (
          <Card className="p-8 text-center">
            <p className="text-gray-500 text-lg">No career opportunities available at the moment.</p>
          </Card>
        )}
      </div>
    </div>
  );
}