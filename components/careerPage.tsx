'use client';
import { title } from "./primitives";
import React, { useState, useEffect } from 'react';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { app } from '../config/firebase';
import { Link, Button } from "@nextui-org/react";

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
      if (careerId) {
        const db = getFirestore(app);
        const careerDocRef = doc(db, 'careers', careerId as string);

        try {
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
      }
    };

    fetchCareerDetail();
  }, [careerId]);

  if (!careerDetail) {
    return <p>Loading...</p>; // You might want to add a loading state while fetching data
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{careerDetail.jobTitle}</h1>
      {careerDetail.companyName && (
      <div className="flex items-center mb-4">
        <p className="mr-2">Company:</p>
        <p className="font-semibold">{careerDetail.companyName}</p>
      </div>
    )}

    {careerDetail.city && careerDetail.country && (
      <div className="flex items-center mb-4">
        <p className="mr-2">Location:</p>
        <p className="font-semibold">{careerDetail.city}, {careerDetail.country}</p>
      </div>
    )}

    {careerDetail.datePosted && (
      <div className="flex items-center mb-4">
        <p className=" mr-2">Date Posted:</p>
        <p className=" font-semibold">{careerDetail.datePosted}</p>
      </div>
    )}

{careerDetail.industry && (
      <div className="flex items-center mb-4">
        <p className="mr-2">Industry:</p>
        <p className="font-semibold">{careerDetail.industry}</p>
      </div>
)}

{careerDetail.workLoc && (
      <div className="flex items-center mb-4">
        <p className=" mr-2">Work Location:</p>
        <p className=" font-semibold">{careerDetail.workLoc}</p>
      </div>
)}
{careerDetail.salary && (

      <div className="flex items-center mb-4">
        <p className=" mr-2"> Estimated Salary:</p>
        <p className=" font-semibold">{careerDetail.salary}</p>
      </div>
 )}
      <div
        className="mb-4"
        dangerouslySetInnerHTML={{ __html: careerDetail.description }}
      ></div>

      <Button
        href={careerDetail.applicationLink}
        as={Link}
        color="primary"
        showAnchorIcon
        variant="solid"
        className="mt-4"
        target="_blank"
      >
        Apply
      </Button>
    </div>
  );
};

export default CareerDetailPage;

