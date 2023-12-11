'use client';
import { title } from "./primitives";
import React, { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { app } from '../config/firebase';

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
    <div>
        
      <h1 className={title()}>{careerDetail.jobTitle}</h1>
      <p>Company: {careerDetail.companyName}</p>
      <p>Location: {careerDetail.city}, {careerDetail.country}</p>
      <p>Date Posted: {careerDetail.datePosted}</p>
      <p>Description: {careerDetail.description}</p>
      <p>Industry: {careerDetail.industry}</p>
      <p>Work Location: {careerDetail.workLoc}</p>
      <p>Salary: {careerDetail.salary}</p>
      {/* Add additional details as needed */}
    </div>
  );
};

export default CareerDetailPage;

