'use client';
import React, { useState, useEffect } from 'react';
import { Chip, Spacer, Spinner } from "@nextui-org/react";
import dynamic from 'next/dynamic';

// Dynamically import the Editor component with SSR disabled
const DynamicEditor = dynamic(
    () => import('@/components/editor'), // Adjust the path as needed
    {
        ssr: false,
        loading: () => <Spinner label="Loading editor..." color="primary" />

    }
);

const SentenceCounter: React.FC = () => {
    const [sentence, setSentence] = useState('');
    const [count, setCount] = useState(0);
    const [wordCount, setWordCount] = useState(0);

    useEffect(() => {
            const sentences = sentence.split(/\.\s+|\.$/);
            setCount(sentences.filter(Boolean).length);

        const words = sentence.split(' ').filter(Boolean);
        setWordCount(words.length);

        const wordFrequency = words.reduce((acc, word) => {
            acc[word] = (acc[word] || 0) + 1;
            return acc;
        }, {} as Record<string, number>);


    }, [sentence]);


    return (
        <div className="lg:w-[35rem] w-full">


            <h1 className="font-bold text-3xl">Text Analyzer</h1>
            <Spacer y={2} />
            <DynamicEditor value={sentence} onChange={setSentence} />
            <Spacer y={2} />
            <Chip size='md' variant="flat">Number of sentences: {count}</Chip>
            <Spacer y={1} />
            <Chip variant="flat">Number of words: {wordCount}</Chip>
        </div>
    );
};

export default SentenceCounter;