'use client';
import React, { useState, useEffect, Fragment } from 'react';
import { getFirestore, collection, doc, getDoc, getDocs, deleteDoc } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { app } from '@/config/firebase';
import { title } from "@/components/primitives";
import SubNav from "@/components/subNavBar";
import { Menu, Transition } from '@headlessui/react'
import { FiMapPin, FiDollarSign, FiCalendar, FiHexagon } from "react-icons/fi";

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
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function CareersPage() {
  const [careersData, setCareersData] = useState<Career[]>([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const auth = getAuth();
  const db = getFirestore();

  onAuthStateChanged(auth, async (user) => {
    if (user) {
      // User is signed in
      const userDoc = doc(db, 'users', user.uid);
      const userSnapshot = await getDoc(userDoc);

      if (userSnapshot.exists()) {
        const userData = userSnapshot.data();
        const email = userData.email;
        const role = userData.role;
        setIsAdmin(role === 'admin');
      } else {
        console.error('User document not found:', user.uid);
      }
    } else {
      // User is not signed in
      alert('User is not signed in');
    }
  });

  useEffect(() => {
    const db = getFirestore(app);
    const careersCollection = collection(db, 'careers');

    getDocs(careersCollection)
      .then((snapshot) => {
        const careersData: Career[] = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as Career[];
        setCareersData(careersData);
      })
      .catch((error) => {
        console.error('Error fetching careers:', error);
      });
  }, []);


  const handleDeleteJob = (jobId: string) => {
    const db = getFirestore(app);
    const jobRef = doc(db, 'careers', jobId);

    deleteDoc(jobRef)
      .then(() => {
        const updatedCareersData = careersData.filter((career) => career.id !== jobId);
        setCareersData(updatedCareersData);
      })
      .catch((error) => {
        console.error('Error deleting job:', error);
      });
  };
  return (
    <div className="flex flex-col justify-center">
      <h1 className={` ${title()}`}>Careers</h1>
      <SubNav />
      {careersData.length > 0 ? (
        <div>
          {careersData.map((career) => (
            <div className="lg:flex lg:items-center lg:justify-between" key={career.id}>

              <div className="min-w-0 flex-1">
                <h2 className="text-2xl font-bold leading-7 sm:truncate sm:text-3xl sm:tracking-tight">
                  {career.jobTitle}
                </h2>
                <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
                  <div className="mt-2 flex items-center text-sm text-gray-500">
                    <FiHexagon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                    {career.industry}
                  </div>
                  <div className="mt-2 flex items-center text-sm text-gray-500">
                    <FiMapPin className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                    {career.city}, {career.country}
                  </div>
                  <div className="mt-2 flex items-center text-sm text-gray-500">
                    <FiDollarSign className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                    {career.salary} (Estimated)
                  </div>
                  <div className="mt-2 flex items-center text-sm text-gray-500">
                    <FiCalendar className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                    {career.datePosted}
                  </div>
                </div>
              </div>

              <div className="mt-5 flex lg:ml-4 lg:mt-0">
                <span className="hidden sm:block">
                  <button
                    type="button"
                    className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  >
                    {/* <PencilIcon className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" /> */}
                    Edit
                  </button>
                </span>
                <span className="ml-3 hidden sm:block">
                  <button
                    type="button"
                    className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  >
                    {/* <LinkIcon className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" /> */}
                    View
                  </button>
                </span>

                <span className="sm:ml-3">
                  <button
                    type="button"
                    className="inline-flex items-center rounded-md bg-gray-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                  >
                    {/* <CheckIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" /> */}
                    Apply
                  </button>
                </span>

                {/* Dropdown */}
                <Menu as="div" className="relative ml-3 sm:hidden">
                  <Menu.Button className="inline-flex items-center rounded-md bg-gray-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                  >
                    More
                    {/* <ChevronDownIcon className="-mr-1 ml-1.5 h-5 w-5 text-gray-400" aria-hidden="true" /> */}
                  </Menu.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 -mr-1 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }: { active: boolean }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Edit
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }: { active: boolean }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            View
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
              <div className="mt-5 flex lg:ml-4 lg:mt-0">
                {isAdmin && ( // Display delete button only for admin users
                  <button
                    type="button"
                    className="inline-flex items-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                    onClick={() => handleDeleteJob(career.id)}
                  >
                    Delete
                  </button>
                )}
              </div>
            </div>
          ))}

        </div>
      ) : (
        <p>No careers found.</p>
      )}
    </div>

  );

}

