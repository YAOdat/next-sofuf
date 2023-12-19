'use client';
import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, setDoc, collection } from 'firebase/firestore';
import { app } from '../../config/firebase';
import {Input, Button} from "@nextui-org/react";
import {EyeFilledIcon} from "@/public/EyeFilledIcon";
import {EyeSlashFilledIcon} from "@/public/EyeSlashFilledIcon";

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
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <form onSubmit={handleRegister} className='flex flex-col justify-center"'>
      <Input type="email" label="Email" value={email} onChange={(e) => setEmail(e.target.value)}  className="w-full sm:w-72 md:w-96 lg:w-1/2 xl:w-1/3 mx-auto"/>
      <Input
      
      label="Password"
      variant="bordered"
      placeholder="Enter your password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      endContent={
        <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
          {isVisible ? (
            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          ) : (
            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          )}
        </button>
      }
      type={isVisible ? "text" : "password"}
      className="w-full sm:w-72 md:w-96 lg:w-1/2 xl:w-1/3 mx-auto my-2"    />
      <Input label='Username' type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full sm:w-72 md:w-96 lg:w-1/2 xl:w-1/3 mx-auto my-2"  />
      <Input label='Website' type="text" value={website} onChange={(e) => setWebsite(e.target.value)} className="w-full sm:w-72 md:w-96 lg:w-1/2 xl:w-1/3 mx-auto my-2"  />
      <Button type="submit" color="primary" variant="ghost" className="w-full sm:w-72 md:w-96 lg:w-1/2 xl:w-1/3 mx-auto my-2"  >
      Register
      </Button> 
    </form>
  );
};

export default RegisterForm;
