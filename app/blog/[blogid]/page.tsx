'use client';
import React, {useEffect, useState} from 'react';

const BlogPost = () => {
    const [blogId, setBlogId] = useState<string | null>(null);

    useEffect(() => {
        // Extract blogId from the query parameters
        const blogId = window.location.pathname.split('/').pop() || '';
        setBlogId(blogId);
    }, []);

    if (!blogId) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>Blog Post {blogId}</h1>
            <p>This is the content of blog post {blogId}.</p>
        </div>
    );
    
}

export default BlogPost;