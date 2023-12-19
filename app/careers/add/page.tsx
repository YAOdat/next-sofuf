'use client';
import React, { useState, FormEvent, Suspense } from 'react';
// import { Textarea } from '@nextui-org/react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { app } from '../../../config/firebase';
// import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // import the styles
import dynamic from 'next/dynamic';
import {Select, SelectItem, Avatar} from "@nextui-org/react";
import countries from '@/public/countries.json'

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
const JobSubmissionForm = () => {

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [jobData, setJobData] = useState({
    jobTitle: '',
    companyName: '',
    city: '',
    country: '',
    datePosted: '',
    description: '',
    industry: '',
    workLoc: '',
    salary: '',
    applicationLink: '',
  });

  const styles = {
    form: 'max-w-lg mx-auto mt-8 p-4 rounded-md shadow-md',
    input: 'w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-cyan-300',
    label: 'block text-sm font-medium text-gray-400',
    button: 'w-full bg-cyan-500 text-white py-2 rounded-md',
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const db = getFirestore(app);
    const jobsCollection = collection(db, 'careers');
    // const ref = await addDoc(jobsCollection, jobData);
    // const id = ref.id; // Retrieve the auto-generated ID
    // console.log(`Job submitted successfully with ID: ${id}`);
    if (isSubmitting) {
      alert('Error: Please wait before submitting again.');
      return;
    }

    setIsSubmitting(true);

    try {
      await addDoc(jobsCollection, jobData);
      console.log('Job submitted successfully!');
      setJobData({ applicationLink: '', salary: '', jobTitle: '', companyName: '', city: '', country: '', datePosted: '', description: '', industry: '', workLoc: '' });

      //prevent spam
      setTimeout(() => {
        setIsSubmitting(false);
      }, 60000); // 60000 milliseconds = 1 minute

    } catch (error) {
      console.error('Error submitting job:', error);
    }
  };


  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className="mb-4">
        <label htmlFor="jobTitle" className={`${styles.label}`}>
          Job Title:
        </label>
        <input
          type="text"
          id="jobTitle"
          value={jobData.jobTitle}
          onChange={(e) => setJobData({ ...jobData, jobTitle: e.target.value })}
          className={`${styles.input} `}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="companyName" className={`${styles.label}`}>
          Company Name:
        </label>
        <input
          type="text"
          id="companyName"
          value={jobData.companyName}
          onChange={(e) => setJobData({ ...jobData, companyName: e.target.value })}
          className={`${styles.input} focus:border-blue-300`}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="city" className={`${styles.label}`}>
          City:
        </label>
        <input
          type="text"
          id="city"
          value={jobData.city}
          onChange={(e) => setJobData({ ...jobData, city: e.target.value })}
          className={`${styles.input}`}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="country" className={`${styles.label}`}>
          Country:
        </label>
        <Select
  className="max-w-xs"
  label="Select country"
  value={jobData.country}
  onChange={(e) => setJobData({ ...jobData, country: e.target.value })}

>
{countries.sort((a, b) => a.country.localeCompare(b.country)).map((country) => (
    <SelectItem
      key={country.country || ''}
      startContent={<Avatar alt={country.country} className="w-6 h-6" src={country.flag} />}
    >
      {country.country}
    </SelectItem>
  ))}
</Select>

      </div>
      <div className="mb-4">
        <label htmlFor="datePosted" className={`${styles.label}`}>
          Date Posted:
        </label>
        <input
          type="date"
          id="datePosted"
          value={jobData.datePosted}
          onChange={(e) => setJobData({ ...jobData, datePosted: e.target.value })}
          className={`${styles.input} focus:border-blue-300`}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className={`${styles.label}`}>
          Description:
        </label>
        {/* <Textarea
          value={jobData.description}
          onChange={(e) => setJobData({ ...jobData, description: e.target.value })}
          className={`${styles.input} focus:border-blue-300`}
        /> */}
              <Suspense fallback={<div>Loading editor...</div>}>

  <ReactQuill 
    value={jobData.description} 
    onChange={(value) => setJobData({ ...jobData, description: value })} 
  />
        </Suspense>

      </div>
      <div className="mb-4">
        <label htmlFor="industry" className={`${styles.label}`}>
          Industry:
        </label>
        <input
          type="text"
          id="industry"
          value={jobData.industry}
          onChange={(e) => setJobData({ ...jobData, industry: e.target.value })}
          className={`${styles.input} focus:border-blue-300`}
        />
      </div>
      <div className="mb-4">
      <Select
      label="Work Location"
      selectionMode="multiple"
      id="workLoc"
      value={jobData.workLoc}
      className={`max-w-xs`}
      onChange={(e) => setJobData({ ...jobData, workLoc: e.target.value })}
    >
        <SelectItem key='Remote' value="Remote">
        Remote
        </SelectItem>
        <SelectItem key='Onsite' value="Onsite">
        Onsite
        </SelectItem>
        <SelectItem key='Hybrid' value="Hybrid">
        Hybrid
        </SelectItem>
    </Select>
 
      </div>
      <div className="mb-4">
        <label htmlFor="salary" className={`${styles.label}`}>
          Estimated Salary:
        </label>
        <input
          type="text"
          id="salary"
          value={jobData.salary}
          onChange={(e) => setJobData({ ...jobData, salary: e.target.value })}
          className={`${styles.input} focus:border-blue-300`}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="link" className={`${styles.label}`}>
          Application Link:</label>
        <input
          type="text"
          id="link"
          value={jobData.applicationLink}
          onChange={(e) => setJobData({ ...jobData, applicationLink: e.target.value })}
          className={`${styles.input} focus:border-blue-300`}
        />
      </div>
      <button type="submit" className={styles.button}>
        Submit Job
      </button>
    </form>
  );
};

export default JobSubmissionForm;
