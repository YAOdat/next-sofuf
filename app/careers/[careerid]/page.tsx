import React from 'react';
import CareerDetailPage from '../../../components/careerPage';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { app } from '../../../config/firebase';

interface CareerDetailProps {
  params: {
    careerid: string;
  };
}

interface CareerDetail {
  jobTitle: string;
  description: string;
  country: string;
}

// Utility to strip HTML tags
function stripHtmlTags(html: string): string {
  return html.replace(/<[^>]*>/g, '').trim();
}

// Limit description length and add country-specific vacancy text
function formatDescription(description: string, country: string): string {
  const MAX_WORDS = 30;
  const cleanDescription = stripHtmlTags(description);
  const words = cleanDescription.split(' ');
  const truncatedDescription =
    words.length > MAX_WORDS ? words.slice(0, MAX_WORDS).join(' ') + '...' : cleanDescription;
  return `${truncatedDescription} Vacancy in ${country}.`;
}

// Fetch job details from Firestore
async function getJobDetails(careerid: string): Promise<CareerDetail | null> {
  try {
    const db = getFirestore(app);
    const careerDocRef = doc(db, 'careers', careerid);
    const careerDocSnapshot = await getDoc(careerDocRef);

    if (careerDocSnapshot.exists()) {
      const careerData = careerDocSnapshot.data() as CareerDetail;
      return {
        jobTitle: careerData.jobTitle || 'Career Details',
        description: formatDescription(
          careerData.description || 'Explore career opportunities here.',
          careerData.country || 'Unknown'
        ),
        country: careerData.country || 'Unknown',
      };
    } else {
      console.error('Career not found with ID:', careerid);
    }
  } catch (error) {
    console.error('Error fetching career details:', error);
  }

  return null;
}

// Generate Metadata Dynamically
export async function generateMetadata({ params }: CareerDetailProps) {
  const { careerid } = params;

  const jobDetails = await getJobDetails(careerid);

  return {
    title: jobDetails?.jobTitle || 'Career Details',
    description: jobDetails?.description || 'Explore career opportunities here.',
    openGraph: {
      title: jobDetails?.jobTitle || 'Career Details',
      description: jobDetails?.description || 'Explore career opportunities here.',
      url: `www.sofuf.com/careers/${careerid}`,
      type: 'website',
    },
  };
}

// Main Component
const CareerDetail = ({ params }: CareerDetailProps) => {
  const { careerid } = params;

  if (!careerid) {
    return <p>Loading...</p>;
  }

  return <CareerDetailPage careerId={careerid} />;
};

export default CareerDetail;
