'use client';

import React, { useState, useEffect } from 'react';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { app } from '../config/firebase';
import { Link, Button, Card, CardBody, CardHeader, Divider } from "@heroui/react";
import Head from 'next/head';
import { FiShare2, FiMapPin, FiCalendar, FiBriefcase, FiHome, FiDollarSign } from 'react-icons/fi';


interface CareerDetail {
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

const CareerDetailPage: React.FC<{ careerId: string }> = ({ careerId }) => {
  const [careerDetail, setCareerDetail] = useState<CareerDetail | null>(null);

  useEffect(() => {
    const fetchCareerDetail = async () => {
      if (!careerId) return;

      try {
        const db = getFirestore(app);
        const careerDocRef = doc(db, 'careers', careerId);
        const careerDocSnapshot = await getDoc(careerDocRef);

        if (careerDocSnapshot.exists()) {
          const careerData = careerDocSnapshot.data() as CareerDetail;
          setCareerDetail(careerData);
        } else {
          console.error('Career not found with ID:', careerId);
        }
      } catch (error) {
        console.error('Error fetching career details:', error);
      }
    };

    fetchCareerDetail();
  }, [careerId]);

  if (!careerDetail) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  const shareCareer = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: careerDetail.jobTitle,
          text: 'Check out this job opportunity!',
          url: window.location.href,
        });
      } catch (error) {
        console.error('Error sharing the career:', error);
      }
    } else {
      console.log('Sharing not supported on this browser.');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Head>
        <title>{careerDetail.jobTitle}</title>
        <meta name="description" content={careerDetail.description} />
        <meta property="og:title" content={careerDetail.jobTitle} />
        <meta property="og:description" content={careerDetail.description} />
        <meta property="og:url" content={typeof window !== 'undefined' ? window.location.href : ''} />
        <meta property="og:type" content="website" />
      </Head>

      <Card className="w-full shadow-lg rounded-lg">
        <CardHeader className="flex flex-col items-start">
          <h1 className="text-3xl font-bold mb-2 text-gradient">{careerDetail.jobTitle}</h1>
          {careerDetail.companyName && (
            <p className="text-xl text-default-500 italic">{careerDetail.companyName}</p>
          )}
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {careerDetail.city && careerDetail.country && (
              <div className="flex items-center">
                <FiMapPin className="mr-2 text-primary" />
                <div>
                  <p className="font-semibold">Location</p>
                  <p>{careerDetail.city}, {careerDetail.country}</p>
                </div>
              </div>
            )}
            {careerDetail.datePosted && (
              <div className="flex items-center">
                <FiCalendar className="mr-2 text-primary" />
                <div>
                  <p className="font-semibold">Date Posted</p>
                  <p>{careerDetail.datePosted}</p>
                </div>
              </div>
            )}
            {careerDetail.industry && (
              <div className="flex items-center">
                <FiBriefcase className="mr-2 text-primary" />
                <div>
                  <p className="font-semibold">Industry</p>
                  <p>{careerDetail.industry}</p>
                </div>
              </div>
            )}
            {careerDetail.workLoc && (
              <div className="flex items-center">
                <FiHome className="mr-2 text-primary" />
                <div>
                  <p className="font-semibold">Work Location</p>
                  <p>{careerDetail.workLoc}</p>
                </div>
              </div>
            )}
            {careerDetail.salary && (
              <div className="flex items-center">
                <FiDollarSign className="mr-2 text-primary" />
                <div>
                  <p className="font-semibold">Estimated Salary</p>
                  <p>{careerDetail.salary}</p>
                </div>
              </div>
            )}
          </div>

          <Divider className="my-4" />

          <div className="mt-4">
            <h2 className="text-2xl font-bold mb-2">Job Description</h2>
            <div
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: careerDetail.description }}
            ></div>
          </div>

          <div className="mt-6 flex flex-wrap gap-4">
            <Button
              as={Link}
              href={careerDetail.applicationLink}
              color="primary"
              variant="solid"
              target="_blank"
              className="flex-grow md:flex-grow-0"
            >
              Apply Now
            </Button>
            <Button
              onClick={shareCareer}
              color="warning"
              variant="solid"
              className="flex-grow md:flex-grow-0"
            >
              <FiShare2 className="mr-2" />
              Share
            </Button>
          </div>
        </CardBody>
      </Card>

      <div className="mt-8">

      </div>
    </div>
  );
};

export default CareerDetailPage;
