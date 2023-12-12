'use client';
import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, setDoc, collection } from 'firebase/firestore';
import { app } from '../../config/firebase';

const RegisterForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [website, setWebsite] = useState('');

    const handleRegister = async (e: { preventDefault: () => void; }) => {
      e.preventDefault(); 
          const auth = getAuth();
    const db = getFirestore(app);

    try {
      // Step 1: Register user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const userCollection = collection(db, 'users');

      // Step 2: Store additional user details in Firestore 'users' collection
      const userDocRef = doc(userCollection, user.uid);
      await setDoc(userDocRef, {
        email,
        username,
        website,
        role: 'regular', 
      });

      console.log('User registered successfully:', user);
    } catch (error: any) {
      console.error('Error registering user:', error.message);
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <label >Email:</label>
      <input type="email" className='my-2' value={email} onChange={(e) => setEmail(e.target.value)} />

      <label >Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

      <label>Username:</label>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />

      <label>Website:</label>
      <input type="text" value={website} onChange={(e) => setWebsite(e.target.value)} />

      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
