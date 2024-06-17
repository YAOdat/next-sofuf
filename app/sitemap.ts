import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { app } from '../config/firebase';
import { MetadataRoute } from 'next';

interface PostDetails {
  id: string;
  title: string;
  description: string;
  content: string;
  author: string;
  datePosted: string; 
  image: string;
  contentImage: string;
  keywords: string;
}

interface CareerDetails {
    id: string;
    title: string;
    description: string;
    requirements: string;
    datePosted: string;
  }

const fetchAllPosts = async (): Promise<PostDetails[]> => {
  const db = getFirestore(app);
  const postsCollection = collection(db, 'posts');

  try {
    const postsSnapshot = await getDocs(postsCollection);
    const posts = postsSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as PostDetails[];
    return posts;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
};

const isValidDate = (date: string) => {
    const parsedDate = new Date(date);
    return !isNaN(parsedDate.getTime());
  };

const fetchAllCareers = async (): Promise<CareerDetails[]> => {
    const db = getFirestore(app);
    const careersCollection = collection(db, 'careers');
  
    try {
      const careersSnapshot = await getDocs(careersCollection);
      const careers = careersSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as CareerDetails[];
      return careers;
    } catch (error) {
      console.error('Error fetching careers:', error);
      return [];
    }
  };

  export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const posts = await fetchAllPosts();
    const careers = await fetchAllCareers();
  
    const postEntries = posts.map(post => {
        const datePosted = isValidDate(post.datePosted) ? new Date(post.datePosted) : new Date();
        return {
            url: `https://sofuf.com/blog/${post.id}`,
            lastModified: datePosted.toISOString(), // Convert date to ISO string format
            changeFrequency: 'weekly' as 'weekly',
            priority: 0.9,
        };
        }
    );

    const careerEntries = careers.map(career => {
      const datePosted = isValidDate(career.datePosted) ? new Date(career.datePosted) : new Date();
      return {
        url: `https://sofuf.com/careers/${career.id}`,
        lastModified: datePosted.toISOString(), // Convert date to ISO string format
        changeFrequency: 'monthly' as 'monthly',
        priority: 0.7,
      };
    });

    const staticEntries = [
        {
          url: 'https://sofuf.com/resources/whatsapp',
          lastModified: new Date().toISOString(),
          changeFrequency: 'monthly' as 'monthly',
          priority: 0.7,
        },
        {
            url: 'https://sofuf.com/resources/kau',
            lastModified: new Date().toISOString(),
            changeFrequency: 'monthly' as 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://sofuf.com/resources/ese',
            lastModified: new Date().toISOString(),
            changeFrequency: 'monthly' as 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://sofuf.com/resources/kau',
            lastModified: new Date().toISOString(),
            changeFrequency: 'monthly' as 'monthly',
            priority: 0.8,
        },
        {
          url: 'https://sofuf.com/resources/whatsapp/english-whatsapp-group',
          lastModified: new Date().toISOString(),
          changeFrequency: 'monthly' as 'monthly',
          priority: 1,
        },
        {
          url: 'https://sofuf.com/resources/whatsapp/arapca-whatsapp-grubu',
          lastModified: new Date().toISOString(),
          changeFrequency: 'monthly' as 'monthly',
          priority: 1,
        },
        {
            url: 'https://sofuf.com/resources/kau/english',
            lastModified: new Date().toISOString(),
            changeFrequency: 'monthly' as 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://sofuf.com/resources/kau/english/elis101',
            lastModified: new Date().toISOString(),
            changeFrequency: 'yearly' as 'yearly',
            priority: 0.8,
        },
        {
            url: 'https://sofuf.com/resources/kau/english/elis120',
            lastModified: new Date().toISOString(),
            changeFrequency: 'yearly' as 'yearly',
            priority: 0.8,
        },
        {
            url: 'https://sofuf.com/resources/kau/english/elis101/vocabs',
            lastModified: new Date().toISOString(),
            changeFrequency: 'yearly' as 'yearly',
            priority: 0.8,
        },
        {
            url: 'https://sofuf.com/resources/kau/english/elis120/vocabs',
            lastModified: new Date().toISOString(),
            changeFrequency: 'yearly' as 'yearly',
            priority: 0.8,
        },
        {
            url: 'https://sofuf.com/resources/kau/english/elis120/practice',
            lastModified: new Date().toISOString(),
            changeFrequency: 'yearly' as 'yearly',
            priority: 0.8,
        },
        {
            url: 'https://sofuf.com/resources/kau/english/elis120/progress-quiz',
            lastModified: new Date().toISOString(),
            changeFrequency: 'yearly' as 'yearly',
            priority: 0.8,
        },
        {
            url: 'https://sofuf.com/resources/sentence-counter',
            lastModified: new Date().toISOString(),
            changeFrequency: 'yearly' as 'yearly',
            priority: 0.8,
        },
      ];

  return [
    {
      url: 'https://sofuf.com',
      lastModified: new Date(),
      changeFrequency: 'yearly' as 'yearly',
      priority: 1,
    },
    {
      url: 'https://sofuf.com/resources',
      lastModified: new Date(),
      changeFrequency: 'monthly' as 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://sofuf.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly' as 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://sofuf.com/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly' as 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://sofuf.com/careers',
      lastModified: new Date(),
      changeFrequency: 'monthly' as 'monthly',
      priority: 0.7,
    },
    ...staticEntries,
    ...postEntries,
    ...careerEntries

  ];
}
