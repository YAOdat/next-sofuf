import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { app } from '../../../config/firebase';
import { notFound } from 'next/navigation';
import BlogPostClient from './BlogPostClient';

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

const fetchPostDetail = async (blogId: string): Promise<PostDetails | null> => {
  const db = getFirestore(app);
  const postDocRef = doc(db, 'posts', blogId);

  try {
    const postDocSnapshot = await getDoc(postDocRef);
    if (postDocSnapshot.exists()) {
      return postDocSnapshot.data() as PostDetails;
    } else {
      console.error('Post not found with ID:', blogId);
      return null;
    }
  } catch (error) {
    console.error('Error fetching post details:', error);
    return null;
  }
};

export const generateMetadata = async ({ params }: { params: { blogid: string } }) => {
  const { blogid } = params;
  const postDetails = await fetchPostDetail(blogid);

  return {
    title: postDetails?.title,
    description: postDetails?.description,
    keywords: postDetails?.keywords,
    robots: 'index, follow',
  };
}

const BlogPost = async ({ params }: { params: { blogid: string } }) => {
  const { blogid } = params;
  const postDetails = await fetchPostDetail(blogid);

  if (!postDetails) {
    notFound();
  }

  return (
    <div>
      {postDetails ? (
        <BlogPostClient params={params} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default BlogPost;