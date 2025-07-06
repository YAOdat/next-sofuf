'use client';
import React, { useState, useEffect } from 'react';
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  getDocs,
  deleteDoc,
} from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from '@/config/firebase';
import { title } from "@/components/primitives";
import SubNav from "@/components/subNavBar";
import { FiMapPin, FiDollarSign, FiCalendar, FiHexagon, FiExternalLink, FiTrash2, FiEdit, FiUsers, FiBriefcase } from "react-icons/fi";
import { Link, Card, Button, Pagination, Chip, Skeleton } from "@nextui-org/react";
import { useTheme } from "next-themes";
import CareersSearchComponent from '../../components/CareerSearchComponent';

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
  const [filteredCareers, setFilteredCareers] = useState<Career[]>([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const ITEMS_PER_PAGE = 8; // Reduced for better UX
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
        
        // Sort by date posted (newest first)
        const sortedCareers = careersData.sort((a, b) => 
          new Date(b.datePosted).getTime() - new Date(a.datePosted).getTime()
        );
        
        setCareersData(sortedCareers);
        setFilteredCareers(sortedCareers);
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
        const updatedCareers = careersData.filter(career => career.id !== jobId);
        setCareersData(updatedCareers);
        setFilteredCareers(updatedCareers);
      } catch (error) {
        console.error('Error deleting job:', error);
      }
    }
  };

  // Store filters in state
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [industryFilter, setIndustryFilter] = useState("");

  // Update filteredCareers when filters or careersData change
  useEffect(() => {
    let filtered = careersData;
    if (searchTerm) {
      filtered = filtered.filter(career =>
        career.jobTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        career.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        career.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (locationFilter) {
      const city = locationFilter.toLowerCase();
      filtered = filtered.filter(career =>
        (career.city && career.city.toLowerCase().includes(city)) ||
        (career.country && career.country.toLowerCase().includes(city))
      );
    }
    if (industryFilter) {
      filtered = filtered.filter(career =>
        career.industry.toLowerCase().includes(industryFilter.toLowerCase())
      );
    }
    setFilteredCareers(filtered);
    setCurrentPage(1); // Reset to first page after filtering
  }, [searchTerm, locationFilter, industryFilter, careersData]);

  // Only update currentPage on pagination
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Pass filter setters to search component
  const handleSearchFilter = (search: string, location: string, industry: string) => {
    setSearchTerm(search);
    setLocationFilter(location);
    setIndustryFilter(industry);
  };

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    } catch {
      return dateString;
    }
  };

  const getWorkLocationChip = (workLoc: string) => {
    const colorMap: { [key: string]: "default" | "primary" | "secondary" | "success" | "warning" | "danger" } = {
      'remote': 'success',
      'hybrid': 'warning',
      'onsite': 'primary',
      'on-site': 'primary'
    };
    
    return (
      <Chip
        size="sm"
        variant="flat"
        color={colorMap[workLoc.toLowerCase()] || 'default'}
        className="text-xs font-medium"
      >
        {workLoc}
      </Chip>
    );
  };

  const LoadingSkeleton = () => (
    <div className="space-y-6">
      {[...Array(4)].map((_, i) => (
        <Card key={i} className="p-6">
          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <div className="space-y-2 flex-1">
                <Skeleton className="h-6 w-3/4 rounded-lg" />
                <Skeleton className="h-4 w-1/2 rounded-lg" />
              </div>
              <div className="flex gap-2">
                <Skeleton className="h-10 w-24 rounded-lg" />
                <Skeleton className="h-10 w-24 rounded-lg" />
              </div>
            </div>
            <div className="flex gap-4">
              <Skeleton className="h-4 w-20 rounded-lg" />
              <Skeleton className="h-4 w-32 rounded-lg" />
              <Skeleton className="h-4 w-24 rounded-lg" />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-16">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Skeleton className="h-12 w-64 mx-auto mb-4 rounded-lg" />
              <Skeleton className="h-6 w-96 mx-auto rounded-lg" />
            </div>
            <SubNav />
            <div className="mt-12">
              <LoadingSkeleton />
            </div>
          </div>
        </div>
      </div>
    );
  }

  const paginatedCareers = filteredCareers.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const totalPages = Math.ceil(filteredCareers.length / ITEMS_PER_PAGE);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-16">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className={`text-4xl sm:text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent dark:from-blue-300 dark:via-purple-400 dark:to-pink-400`}>
              Career Opportunities
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Discover exciting career opportunities and take the next step in your professional journey
            </p>
            <div className="mt-6 flex justify-center items-center gap-8 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <FiBriefcase className="h-4 w-4" />
                <span>{filteredCareers.length} opportunities</span>
              </div>
              <div className="flex items-center gap-2">
                <FiUsers className="h-4 w-4" />
                <span>Multiple industries</span>
              </div>
            </div>
          </div>
          {/* Search tool only, no SubNavBar */}
          <div className="flex justify-end mt-4">
            <CareersSearchComponent
              onSearch={handleSearchFilter}
              industries={Array.from(new Set(careersData.map(career => career.industry)))}
            />
          </div>
        </div>
      </div>
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Results Summary */}
        <div className="mb-8">
          <p className="text-gray-600 dark:text-gray-400">
            Showing {paginatedCareers.length} of {filteredCareers.length} opportunities
          </p>
        </div>
        {/* Job Listings */}
        <div className="space-y-6">
          {paginatedCareers.length > 0 ? (
            paginatedCareers.map((career) => (
              <Card
                key={career.id}
                className={`p-6 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] border-0 ${
                  theme === 'dark' 
                    ? 'bg-gray-800/50 backdrop-blur-sm' 
                    : 'bg-white/80 backdrop-blur-sm shadow-sm'
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <Link
                          href={`careers/${career.id}`}
                          className={`text-xl font-bold transition-colors duration-200 ${
                            theme === 'dark' 
                              ? 'text-white hover:text-blue-400' 
                              : 'text-gray-900 hover:text-blue-600'
                          }`}
                        >
                          {career.jobTitle}
                        </Link>
                        <p className="mt-1 text-base font-medium text-gray-600 dark:text-gray-400">
                          {career.companyName}
                        </p>
                      </div>
                      {getWorkLocationChip(career.workLoc)}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-4">
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <FiHexagon className="mr-2 h-4 w-4 text-blue-500" />
                        {career.industry}
                      </div>
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <FiMapPin className="mr-2 h-4 w-4 text-green-500" />
                        {career.city}, {career.country}
                      </div>
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <FiDollarSign className="mr-2 h-4 w-4 text-yellow-500" />
                        {career.salary}
                      </div>
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <FiCalendar className="mr-2 h-4 w-4 text-purple-500" />
                        {formatDate(career.datePosted)}
                      </div>
                    </div>

                    {/* Job Description Preview */}
                    <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                      {career.description}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 lg:flex-col lg:min-w-[140px]">
                    <Button
                      as={Link}
                      href={`careers/${career.id}`}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-200"
                      size="sm"
                    >
                      View Details
                    </Button>

                    <Button
                      as={Link}
                      href={career.applicationLink}
                      className="bg-gradient-to-r from-green-600 to-blue-600 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                      startContent={<FiExternalLink className="h-4 w-4" />}
                      size="sm"
                    >
                      Apply Now
                    </Button>

                    {isAdmin && (
                      <div className="flex gap-2">
                        <Button
                          className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-medium"
                          startContent={<FiEdit className="h-4 w-4" />}
                          as={Link}
                          href={`careers/edit/${career.id}`}
                          size="sm"
                        >
                          Edit
                        </Button>
                        <Button
                          className="bg-gradient-to-r from-red-500 to-pink-500 text-white font-medium"
                          startContent={<FiTrash2 className="h-4 w-4" />}
                          onClick={() => handleDeleteJob(career.id)}
                          size="sm"
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
            <Card className="p-12 text-center bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-700">
              <div className="max-w-md mx-auto">
                <FiBriefcase className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  No opportunities found
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Try adjusting your search criteria or check back later for new opportunities.
                </p>
              </div>
            </Card>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex justify-center">
            <Pagination
              total={totalPages}
              page={currentPage}
              onChange={handlePageChange}
              showControls
              showShadow
              color="primary"
              size="lg"
            />
          </div>
        )}
      </div>
    </div>
  );
}