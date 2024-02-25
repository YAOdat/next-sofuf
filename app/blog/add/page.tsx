'use client';
import React, { useState, FormEvent, Suspense } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { app } from '../../../config/firebase';

const Editor = dynamic(() => import('react-quill').then((module) => module.default), { ssr: false });
      

const AddBlogPost = () => {
  const [title, setTitle] = useState('');
  const [blogData, setBlogData] = useState({
    author: '',
    datePosted: '',
    description: '',
    title: '',
    image: '',
    contentImage: '',
    content: '',
    category: '',
  });

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    const db = getFirestore(app);
    const postCollection = collection(db, 'posts'); console.log('Title:', title);
    setTitle('');

    try {
      await addDoc(postCollection, blogData);
      console.log('Blog submitted successfully!');
      setBlogData({ author: '', image: '', title: '', datePosted: '', description: '', content: '', contentImage: '', category: '' });

    } catch (error) {
      console.error('Error submitting post:', error);
    }
  };

  const styles = {
    form: 'max-w-lg mx-auto mt-8 p-4 rounded-md shadow-md',
    input: 'w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-cyan-300 my-2',
    label: 'block text-sm font-medium text-gray-400',
    button: 'w-full bg-cyan-500 text-white py-2 rounded-md',
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label className={`${styles.label}`}>
        Title:
        <input type="text"
          id="blog-title"
          className={`${styles.input}`}
          value={blogData.title}
          onChange={(e) => setBlogData({ ...blogData, title: e.target.value })}
          required />
      </label>
      <input type="text" id='author' value={"Odat"} onChange={(e) => setBlogData({ ...blogData, author: e.target.value })} required hidden />
      <br />
      <input className={`${styles.input}`}
        placeholder='Write a short description, used as meta' type="text" id='description' value={blogData.description} onChange={(e) => setBlogData({ ...blogData, description: e.target.value })} required />
      <label className={`${styles.label}`}>
        Content:
      </label>

      <Editor value={blogData.content}
        onChange={(value) => setBlogData({ ...blogData, content: value })} />

      <input className={`${styles.input}`} type="text" id='image' value={blogData.image} onChange={(e) => setBlogData({ ...blogData, image: e.target.value })} placeholder='Insert image URL' />
      <input className={`${styles.input}`} type="text" id='contentImage' value={blogData.contentImage} onChange={(e) => setBlogData({ ...blogData, contentImage: e.target.value })} placeholder='Insert Content image URL' />
      <input className={`${styles.input}`} type="text" id='category' value={blogData.category} onChange={(e) => setBlogData({ ...blogData, category: e.target.value })} placeholder='Category' />

      <label htmlFor="datePosted" className={`${styles.label}`}>
        Date Posted:
      </label>
      <input
        type="date"
        id="datePosted"
        value={blogData.datePosted}
        onChange={(e) => setBlogData({ ...blogData, datePosted: e.target.value })}
        className={`${styles.input} focus:border-blue-300`}

      />
      <button type="submit" className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold my-4 py-2 px-4 rounded">
        Add Post
      </button>
    </form>
  );
};

export default AddBlogPost;