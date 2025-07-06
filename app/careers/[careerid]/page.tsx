import React from 'react';
import CareerDetailPage from '../../../components/careerPage';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { app } from '../../../config/firebase';
import { Metadata } from 'next';

interface CareerDetailProps {
  params: {
    careerid: string;
  };
}

interface CareerDetail {
  jobTitle: string;
  description: string;
  country: string;
  city?: string;
  salaryMin?: number;
  salaryMax?: number;
  currency?: string;
  employmentType?: 'FULL_TIME' | 'PART_TIME' | 'CONTRACT' | 'TEMPORARY' | 'INTERN' | 'VOLUNTEER';
  department?: string;
  company?: string;
  requirements?: string;
  benefits?: string;
  datePosted?: string;
  validThrough?: string;
  remote?: boolean;
  experienceLevel?: 'ENTRY_LEVEL' | 'ASSOCIATE' | 'MID_LEVEL' | 'SENIOR_LEVEL' | 'DIRECTOR' | 'EXECUTIVE';
}

// Utility to strip HTML tags and decode HTML entities
function stripHtmlTags(html: string): string {
  return html
    .replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .trim();
}

// Create SEO-optimized description
function formatDescription(description: string, country: string, city?: string): string {
  const MAX_WORDS = 35;
  const cleanDescription = stripHtmlTags(description);
  const words = cleanDescription.split(' ');
  const truncatedDescription =
    words.length > MAX_WORDS ? words.slice(0, MAX_WORDS).join(' ') + '...' : cleanDescription;
  
  const location = city ? `${city}, ${country}` : country;
  return `${truncatedDescription} ${location ? `Job vacancy in ${location}.` : ''} Apply now for this exciting career opportunity.`;
}

// Generate Google Jobs structured data
function generateStructuredData(jobDetails: CareerDetail, careerid: string) {
  const baseUrl = 'https://www.sofuf.com';
  const currentDate = new Date().toISOString();
  
  return {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: jobDetails.jobTitle,
    description: stripHtmlTags(jobDetails.description),
    identifier: {
      '@type': 'PropertyValue',
      name: 'Job ID',
      value: careerid,
    },
    datePosted: jobDetails.datePosted || currentDate,
    validThrough: jobDetails.validThrough || new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(), // 30 days from now
    employmentType: jobDetails.employmentType || 'FULL_TIME',
    hiringOrganization: {
      '@type': 'Organization',
      name: jobDetails.company || 'Sofuf',
      sameAs: baseUrl,
      logo: `${baseUrl}/logo.png`, // Make sure to add your company logo
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressCountry: jobDetails.country,
        addressLocality: jobDetails.city || jobDetails.country,
      },
    },
    ...(jobDetails.salaryMin && jobDetails.salaryMax && {
      baseSalary: {
        '@type': 'MonetaryAmount',
        currency: jobDetails.currency || 'USD',
        value: {
          '@type': 'QuantitativeValue',
          minValue: jobDetails.salaryMin,
          maxValue: jobDetails.salaryMax,
          unitText: 'YEAR',
        },
      },
    }),
    ...(jobDetails.remote && {
      jobLocationType: 'TELECOMMUTE',
    }),
    ...(jobDetails.experienceLevel && {
      experienceRequirements: jobDetails.experienceLevel,
    }),
    ...(jobDetails.requirements && {
      qualifications: stripHtmlTags(jobDetails.requirements),
    }),
    ...(jobDetails.benefits && {
      jobBenefits: stripHtmlTags(jobDetails.benefits),
    }),
    url: `${baseUrl}/careers/${careerid}`,
    applicationContact: {
      '@type': 'ContactPoint',
      url: `${baseUrl}/careers/${careerid}`,
    },
  };
}

// Fetch job details from Firestore with enhanced error handling
async function getJobDetails(careerid: string): Promise<CareerDetail | null> {
  try {
    const db = getFirestore(app);
    const careerDocRef = doc(db, 'careers', careerid);
    const careerDocSnapshot = await getDoc(careerDocRef);

    if (careerDocSnapshot.exists()) {
      const careerData = careerDocSnapshot.data() as CareerDetail;
      
      // Validate required fields
      if (!careerData.jobTitle || !careerData.description) {
        console.error('Job missing required fields:', careerid);
        return null;
      }

      return {
        jobTitle: careerData.jobTitle,
        description: careerData.description,
        country: careerData.country || 'Remote',
        city: careerData.city,
        salaryMin: careerData.salaryMin,
        salaryMax: careerData.salaryMax,
        currency: careerData.currency,
        employmentType: careerData.employmentType,
        department: careerData.department,
        company: careerData.company,
        requirements: careerData.requirements,
        benefits: careerData.benefits,
        datePosted: careerData.datePosted,
        validThrough: careerData.validThrough,
        remote: careerData.remote,
        experienceLevel: careerData.experienceLevel,
      };
    } else {
      console.error('Career not found with ID:', careerid);
      return null;
    }
  } catch (error) {
    console.error('Error fetching career details:', error);
    return null;
  }
}

// Generate comprehensive metadata for SEO
export async function generateMetadata({ params }: CareerDetailProps): Promise<Metadata> {
  const { careerid } = params;

  try {
    const jobDetails = await getJobDetails(careerid);

    if (!jobDetails) {
      return {
        title: 'Job Not Found | Sofuf Careers',
        description: 'The requested job position could not be found. Explore other career opportunities at Sofuf.',
        robots: 'noindex, nofollow',
      };
    }

    const title = `${jobDetails.jobTitle} - ${jobDetails.company || 'Sofuf'}`;
    const description = formatDescription(
      jobDetails.description,
      jobDetails.country,
      jobDetails.city
    );

    const location = jobDetails.city ? `${jobDetails.city}, ${jobDetails.country}` : jobDetails.country;
    const keywords = [
      jobDetails.jobTitle,
      jobDetails.company || 'Sofuf',
      location,
      jobDetails.department,
      'job',
      'career',
      'employment',
      'vacancy',
      jobDetails.remote ? 'remote work' : 'office job',
    ].filter(Boolean).join(', ');

    return {
      title,
      description,
      keywords,
      authors: [{ name: jobDetails.company || 'Sofuf' }],
      category: 'Jobs',
      openGraph: {
        title,
        description,
        url: `https://www.sofuf.com/careers/${careerid}`,
        type: 'website',
        siteName: 'Sofuf Careers',
        locale: 'en_US',
        images: [
          {
            url: 'https://www.sofuf.com/og-career-image.jpg', // Add a career-specific OG image
            width: 1200,
            height: 630,
            alt: `${jobDetails.jobTitle} position at ${jobDetails.company || 'Sofuf'}`,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: ['https://www.sofuf.com/og-career-image.jpg'],
        creator: '@sofuf', // Replace with your Twitter handle
      },
      alternates: {
        canonical: `https://www.sofuf.com/careers/${careerid}`,
      },
      other: {
        'job-posting-id': careerid,
        'job-location': location,
        'job-type': jobDetails.employmentType || 'FULL_TIME',
        'company-name': jobDetails.company || 'Sofuf',
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Career Opportunity | Sofuf',
      description: 'Explore exciting career opportunities at Sofuf.',
    };
  }
}

// Enhanced loading component
const LoadingFallback = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-black dark:to-black flex items-center justify-center">
    <div className="text-center">
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-indigo-600 dark:border-white mx-auto mb-4"></div>
      <p className="text-gray-600 dark:text-white font-medium">Loading career details...</p>
    </div>
  </div>
);

// Main Component with enhanced styling
const CareerDetail = async ({ params }: CareerDetailProps) => {
  const { careerid } = params;

  if (!careerid) {
    return <LoadingFallback />;
  }

  try {
    const jobDetails = await getJobDetails(careerid);

    if (!jobDetails) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-100 dark:from-black dark:to-black flex items-center justify-center px-4">
          <div className="text-center max-w-md">
            <div className="mb-6">
              <svg className="w-24 h-24 mx-auto text-red-400 dark:text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Job Not Found</h1>
            <p className="text-gray-600 dark:text-gray-300 mb-6">The career opportunity you're looking for could not be found.</p>
            <a 
              href="/careers" 
              className="inline-flex items-center px-6 py-3 bg-indigo-600 dark:bg-white text-white dark:text-black font-medium rounded-lg hover:bg-indigo-700 dark:hover:bg-gray-200 transition-colors duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Browse All Jobs
            </a>
          </div>
        </div>
      );
    }

    return (
      <>
        {/* Google Jobs Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateStructuredData(jobDetails, careerid)),
          }}
        />
        
        {/* Modern wrapper with gradient background */}
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-black dark:to-black">
          <div className="container mx-auto px-4 py-8">
            <CareerDetailPage careerId={careerid} />
          </div>
        </div>
      </>
    );
  } catch (error) {
    console.error('Error rendering career detail:', error);
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 dark:from-black dark:to-black flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="mb-6">
            <svg className="w-24 h-24 mx-auto text-amber-500 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.864-.833-2.634 0L3.178 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Something went wrong</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">We encountered an error while loading this job posting.</p>
          <button 
            onClick={() => window.location.reload()} 
            className="inline-flex items-center px-6 py-3 bg-amber-600 dark:bg-white text-white dark:text-black font-medium rounded-lg hover:bg-amber-700 dark:hover:bg-gray-200 transition-colors duration-200"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Try Again
          </button>
        </div>
      </div>
    );
  }
};

export default CareerDetail;