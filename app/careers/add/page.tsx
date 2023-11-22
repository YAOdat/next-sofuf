"use client"
import React, { useState, FormEvent  } from 'react';
import { Textarea } from '@nextui-org/react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const JobSubmissionForm = () => {
  const [jobData, setJobData] = useState({
    city: '',
    companyName: '',
    country: '',
    datePosted: '',
    description: '',
    industry: '',
    jobTitle: '',
    workLoc: '',
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const db = getFirestore();
    const jobsCollection = collection(db, 'careers');

    try {
      await addDoc(jobsCollection, jobData);
      console.log('Job submitted successfully!');
      // Optionally, you can reset the form after submission
      setJobData({
        city: '',
        companyName: '',
        country: '',
        datePosted: '',
        description: '',
        industry: '',
        jobTitle: '',
        workLoc: '',
      });
    } catch (error) {
      console.error('Error submitting job:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Job Title:
        <input
          type="text"
          value={jobData.jobTitle}
          onChange={(e) => setJobData({ ...jobData, jobTitle: e.target.value })}
        />
      </label>
      <label>
        Company Name:
        <input
          type="text"
          value={jobData.companyName}
          onChange={(e) => setJobData({ ...jobData, companyName: e.target.value })}
        />
      </label>
      <label>
        City:
        <input
          type="text"
          value={jobData.city}
          onChange={(e) => setJobData({ ...jobData, city: e.target.value })}
        />
      </label>
      <label>
        Country:
        <input
          type="text"
          value={jobData.country}
          onChange={(e) => setJobData({ ...jobData, country: e.target.value })}
        />
      </label>
      <label>
        Date Posted:
        <input
          type="text"
          value={jobData.datePosted}
          onChange={(e) => setJobData({ ...jobData, datePosted: e.target.value })}
        />
      </label>
      <label>
        Description:
        <Textarea
          value={jobData.description}
          onChange={(e) => setJobData({ ...jobData, description: e.target.value })}
        />
      </label>
      <label>
        Industry:
        <input
          type="text"
          value={jobData.industry}
          onChange={(e) => setJobData({ ...jobData, industry: e.target.value })}
        />
      </label>
      <label>
        Work Location:
        <input
          type="text"
          value={jobData.workLoc}
          onChange={(e) => setJobData({ ...jobData, workLoc: e.target.value })}
        />
      </label>
      <button type="submit">Submit Job</button>
    </form>
  );
};

export default JobSubmissionForm;
