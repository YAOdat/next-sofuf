'use client';
import React, { useState, FormEvent } from 'react';
import { Textarea } from '@nextui-org/react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { app } from '../../../config/firebase';

const JobSubmissionForm = () => {
  const [jobData, setJobData] = useState({
    jobTitle: '',
    companyName: '',
    city: '',
    country: '',
    datePosted: '',
    description: '',
    industry: '',
    workLoc: '',
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

    const ref = await addDoc(jobsCollection, jobData);
    const id = ref.id; // Retrieve the auto-generated ID

    console.log(`Job submitted successfully with ID: ${id}`);


    try {
      await addDoc(jobsCollection, jobData);
      console.log('Job submitted successfully!');
      setJobData({ jobTitle: '', companyName: '', city: '', country: '', datePosted: '', description: '', industry: '', workLoc: '' });
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
        <input
          type="text"
          id="country"
          value={jobData.country}
          onChange={(e) => setJobData({ ...jobData, country: e.target.value })}
          className={`${styles.input} focus:border-blue-300`}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="datePosted" className={`${styles.label}`}>
          Date Posted:
        </label>
        <input
          type="text"
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
        <Textarea
          value={jobData.description}
          onChange={(e) => setJobData({ ...jobData, description: e.target.value })}
          className={`${styles.input} focus:border-blue-300`}
        />
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
        <label htmlFor="workLoc" className={`${styles.label}`}>
          Work Location:
        </label>
        <input
          type="text"
          id="workLoc"
          value={jobData.workLoc}
          onChange={(e) => setJobData({ ...jobData, workLoc: e.target.value })}
          className={`${styles.input} focus:border-blue-300`}
        />
      </div>
      <button type="submit" className={styles.button}>
        Submit Career
      </button>
    </form>
  );
};

export default JobSubmissionForm;
