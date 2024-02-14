'use client';

import { title } from "@/components/primitives";
import {useState, useEffect} from 'react';
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";
import { getFirestore, collection, doc, getDoc, getDocs, deleteDoc } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { app, firestore } from '@/config/firebase';

  
// Placeholder data
const blogPosts = [
  { id: 1, title: 'Blog Post 1', content: 'This is the first blog post.' , imageUrl: 'https://via.placeholder.com/150'},
  { id: 2, title: 'Blog Post 2', content: 'This is the second blog post.' },
  { id: 3, title: 'Blog Post 3', content: 'This is the second blog post.' },
  { id: 4, title: 'Blog Post 3', content: 'This is the second blog post.' },
];

interface Post {
	id: string;
	postTitle: string;
	datePosted: string;
	description: string;
	content: string;
	mainImage: string;
	author: string;
	category: string;
	keywords: string[];

  }


export default function BlogPage() {

	const [isAdmin, setIsAdmin] = useState(false);
	const [postData, setPostData] = useState<Post[]>([]);
	const auth = getAuth();
	const db = getFirestore();
  
	onAuthStateChanged(auth, async (user) => {
		if (user) {
		  // User is signed in
		  const userDoc = doc(db, 'users', user.uid);
		  const userSnapshot = await getDoc(userDoc);
	
		  if (userSnapshot.exists()) {
			const userData = userSnapshot.data();
			const email = userData.email;
			const role = userData.role;
			setIsAdmin(role === 'admin');
		  } else {
			console.error('User document not found:', user.uid);
		  }
		} 
	  });

	  useEffect(() => {
		const db = getFirestore(app);
		const postCollection = collection(db, 'posts');
	
		getDocs(postCollection)
		  .then((snapshot) => {
			const postData: Post[] = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as Post[];
			setPostData(postData);
		  })
		  .catch((error) => {
			console.error('Error fetching careers:', error);
		  });
	  }, []);

	  const handleAddPost = () => {
		// Navigate to the Add Post page
		window.location.href = '/blog/add';
	  };
	  
	  const handleDeletePost = async (postId: string) => {

		// Delete the post from Firestore
		const postRef = doc(firestore, 'posts', postId);
		await deleteDoc(postRef);
	  
		// Remove the post from the postData array
		const newPostData = postData.filter(post => post.id !== postId);
		setPostData(newPostData);
	  };


	  return (
		<div>
		  <h1 className={title()}>Blog</h1>
		  <div className="grid grid-cols-12 gap-4 mt-4">
			{postData.length > 0 ? (
			  postData.map((post) => (
				<div key={post.id}>
				  <Card className="col-span-12 sm:col-span-4 h-[300px] relative">
					<a href={`blog/${post.id}`}>
					  <CardHeader className="absolute z-10 top-1 flex-col !items-start">
						<p className="text-tiny text-white/60 uppercase font-bold">{post.postTitle}</p>
						<h4 className="text-white font-medium text-large">{post.content}</h4>
					  </CardHeader>
					  {post.mainImage && (
						<Image
						  removeWrapper
						  alt={post.postTitle}
						  className="z-0 w-full h-full object-cover"
						  src={post.mainImage}
						/>
					  )}
					</a>
				
				  </Card>
				  {isAdmin && (
					  <div className="flex justify-end">
						<button onClick={() => handleDeletePost(post.id)} className="bg-red-500 text-white px-4 py-2 rounded">
						  Delete Post
						</button>
					  </div>
					)}
				</div>
			  ))
			) : (
			  <p>No blog posts found.</p>
			)}
		  </div>
		</div>
	  );
	  
			}