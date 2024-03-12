'use client';
import React, {useEffect, useState} from 'react';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { app } from '../../../config/firebase';
import { Image } from "@nextui-org/react";
import type { Metadata } from 'next'


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

const BlogPost = () => {
    const [blogId, setBlogId] = useState<string | null>(null);
    const [postDetails, setCareerDetails] = useState<PostDetails | null>(null);


    useEffect(() => {
        // Extract blogId from the query parameters
        const blogId = window.location.pathname.split('/').pop() || '';
        setBlogId(blogId);
        const fetchPostDetail = async () => {
            if (blogId) {
              const db = getFirestore(app);
              const postDocRef = doc(db, 'posts', blogId as string);
      
              try {
                const postDocSnapshot = await getDoc(postDocRef);
      
                if (postDocSnapshot.exists()) {
                  const postData = postDocSnapshot.data() as PostDetails;
                  setCareerDetails(postData);
                } else {
                  console.error('Post not found with ID:', blogId);
                }
              } catch (error) {
                console.error('Error fetching post details:', error);
              }
            }
          };
          fetchPostDetail();
    },  [blogId]);

    if (!blogId) {
        return <p>Loading...</p>;
    }

    const metadata: Metadata = {
      title: postDetails?.title,
      keywords: postDetails?.keywords,
      description: postDetails?.description,
      robots: 'index, follow',
    }
    return (
        <div className="p-4">
            {postDetails && (
                <>
                    <h1 className="text-2xl font-bold mb-4">{postDetails.title}</h1>
                    <p dangerouslySetInnerHTML={{ __html: postDetails.content }}></p>
                    <a href={`${blogId}`}>
                    <Image src={postDetails.contentImage} alt={postDetails.title} />
                    </a>
                </>
            )}


             

        </div>
    );
    
}

export default BlogPost;