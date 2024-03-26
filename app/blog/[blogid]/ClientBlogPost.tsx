'use client';

import { useState, useEffect  } from 'react';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { app } from '../../../config/firebase';
import { Image, Spinner } from "@nextui-org/react";
import React from 'react';

interface PostDetails {
  title: string;
  description: string;
  content: string;
  author: string;
  datePosted: string;
  image: string;
  contentImage: string;
  keywords: string;
}

const ClientBlogPost = ({ params }: { params: { blogid: string } }) => {
  const [postDetails, setPostDetails] = useState<PostDetails | null>(null);

  useEffect(() => {
    const fetchPostDetail = async () => {
      const { blogid } = params;
      const db = getFirestore(app);
      const postDocRef = doc(db, 'posts', blogid);

      try {
        const postDocSnapshot = await getDoc(postDocRef);
        if (postDocSnapshot.exists()) {
          setPostDetails(postDocSnapshot.data() as PostDetails);
        } else {
          console.error('Post not found with ID:', blogid);
        }
      } catch (error) {
        console.error('Error fetching post details:', error);
      }
    };

    fetchPostDetail();
  }, [params]);

  if (!postDetails) {
    return     <Spinner label="Loading..." color="primary" />;

  }

  return (

    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{postDetails.title}</h1>
      <p dangerouslySetInnerHTML={{ __html: postDetails.content }}></p>
      <a href={`${params.blogid}`}>
        <Image src={postDetails.contentImage} alt={postDetails.title} />
      </a>
    </div>
  );
};

export default ClientBlogPost;