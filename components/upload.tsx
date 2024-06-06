// Upload.tsx

import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

// Import your existing Firebase configuration
import { firebaseConfig } from '../config/firebase'; // Replace with the path to your config file

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

const Upload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState('');
  const [downloadURL, setDownloadURL] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setMessage('');
      setDownloadURL(null);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage('Please select a file to upload.');
      return;
    }

    try {
      const storageRef = ref(storage, `uploads/${file.name}`);
      const uploadTask = await uploadBytes(storageRef, file);
      const downloadUrl = await getDownloadURL(uploadTask.ref);
      setMessage('File uploaded successfully!');
      setDownloadURL(downloadUrl);
    } catch (error) {
      console.error(error);
      setMessage('Error uploading file.');
    }
  };

  return (
    <div>
      <h1>File Upload and Download</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload File</button>
      <br />
      {downloadURL && <a href={downloadURL}>Download File</a>}
      <p>{message}</p>
    </div>
  );
};

export default Upload;
