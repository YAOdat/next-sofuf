'use client';
import React, {useEffect, useState} from 'react';
import CareerDetailPage from '../../../components/careerPage';


const CareerDetail = () => {
    const [careerId, setCareerId] = useState<string | null>(null);
  
    useEffect(() => {
      // Extract careerId from the query parameters
    const careerId = window.location.pathname.split('/').pop() || '';
      setCareerId(careerId);
    }, []);
  
    if (!careerId) {
      return <p>Loading...</p>;
    }
  
    return <CareerDetailPage careerId={careerId} />;
  };
  
  export default CareerDetail;
