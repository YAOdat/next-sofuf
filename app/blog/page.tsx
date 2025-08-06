'use client';

import { title } from "@/components/primitives";
import { useState, useEffect } from 'react';
import { Card, CardHeader, Link, Image, Spinner } from "@heroui/react";
import { getFirestore, collection, doc, getDoc, getDocs, deleteDoc } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { app, firestore } from '@/config/firebase';
import { AiOutlinePlusCircle } from 'react-icons/ai';



interface Post {
	id: string;
	title: string;
	datePosted: string;
	description: string;
	content: string;
	image: string;
	contentImage: string;
	author: string;
	category: string;
	keywords: string[];

}


export default function BlogPage() {

	const [isAdmin, setIsAdmin] = useState(false);
	const [postData, setPostData] = useState<Post[]>([]);
	const [isLoading, setIsLoading] = useState(false);

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
		setIsLoading(true);
		const db = getFirestore(app);
		const postCollection = collection(db, 'posts');

		getDocs(postCollection)
			.then((snapshot) => {
				const postData: Post[] = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as Post[];
				setPostData(postData);
				console.log('Posts:', postData);
				setIsLoading(false);
			})
			.catch((error) => {
				setIsLoading(false);
				console.error('Error fetching careers:', error);
			});
	}, []);

	const handleDeletePost = async (postId: string) => {

		// Delete the post from Firestore
		const postRef = doc(firestore, 'posts', postId);
		await deleteDoc(postRef);

		// Remove the post from the postData array
		const newPostData = postData.filter(post => post.id !== postId);
		setPostData(newPostData);
	};
	const truncate = (input: string, length: number) => input.length > length ? `${input.substring(0, length)}...` : input;


	return (
		<div>
			<h1 className={`${title()}`}>Blog</h1>



			{isAdmin && (
				<Link href={"/blog/add"} className="mx-5">
					<div className="bg-black dark:bg-[#373737] px-2 sm:px-3 py-1 rounded-md flex items-center gap-x-2 sm:gap-x-3">
						<AiOutlinePlusCircle className="text-white text-xs sm:text-3xl" />
						<span className="text-white font-semibold text-xs sm:text-base">Add Post</span>
					</div>
				</Link>
			)}

			{isLoading ? (
				<div className="flex justify-center items-center py-10">
					<Spinner />
				</div>
			) : (
				<div className="grid grid-cols-1 gap-4 mt-4">
					{postData.map((post) => (
						<div key={post.id} className="flex flex-col items-stretch">
							<Card className="col-span-12 sm:col-span-4 h-[10em] w-[20em] relative">
								<a href={`blog/${post.id}`}>
									<CardHeader className="absolute z-10 top-1 flex-col !items-start">
										<p className="text-tiny text-white/60 uppercase font-bold">{post.title}</p>
										<h4 className="text-white font-medium text-large">{truncate(post.description, 100)}</h4>
									</CardHeader>
									{post.image && (
										<div className="relative">
											<a href={`blog/${post.id}`}>
												<Image
													removeWrapper
													alt={post.title}
													className="z-0 w-full h-full object-cover"
													src={post.image}
												/>
											</a>
											<div className="absolute inset-0 bg-black opacity-50"></div>
										</div>
									)}
								</a>
							</Card>
							{isAdmin && (
								<div className="mt-auto">
									<button
										onClick={() => handleDeletePost(post.id)}
										className="bg-red-500 text-white px-4 my-2 rounded w-24 h-10 text-xs"
									>
										Delete Post
									</button>
								</div>
							)}
						</div>
					))}
				</div>
			)}
		</div>
	);
}