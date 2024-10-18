'use client';

import React from "react";
import { Card, CardBody, CardHeader, Image, Link, Tabs, Tab } from "@nextui-org/react";
import Head from 'next/head';

type ResourceItem = {
  title: string;
  year: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  link: string;
  isExternal?: boolean;
  type: 'midterm' | 'final' | 'all';
};

const resources: ResourceItem[] = [
  {
    title: "Final Exam Vocabs",
    year: "2023-2024",
    description: "الكلمات المطلوب حفظها بالاختبار النهائي",
    imageUrl: "/vocabs.jpg",
    imageAlt: "الكلمات المطلوب حفظها بالاختبار النهائي",
    link: "/resources/kau/english/elis110/vocabs",
    type: "final"
  },
  {
    title: "Final Grammar Revision",
    year: "2023-2024",
    description: "مراجعة قواعد الاختبار النهائي",
    imageUrl: "https://goodly.co.in/wp-content/uploads/2023/10/youtube-logo-png-46016.png",
    imageAlt: "مراجعة انقلش الاختبار النهائي",
    link: "https://www.youtube.com/watch?v=KZ2Jq2NHM_8&t",
    isExternal: true,
    type: "final"
  },
  {
    title: "Progress Quizzes",
    description: "حلول اختبارات التقدم في المستوى",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcoAWPxvTx-M6z5MhO57TCb99S8UUB498DH2nXEWoVUQwrrnTA",
    imageAlt: "حلول اختبارات التقدم في المستوى",
    link: "/resources/kau/english/elis110/progress-quiz",
    type: 'midterm',
    year:'2023-2024'
  },
  {
    title: "Mid Term Grammar Revision",
    description: "مراجعة قواعد الاختبار النصفي",
    imageUrl: "https://goodly.co.in/wp-content/uploads/2023/10/youtube-logo-png-46016.png",
    imageAlt: "مراجعة قواعد الاختبار النصفي",
    link: "https://www.youtube.com/watch?v=Y6PQ655-Gxk",
    isExternal: true,
    type: 'midterm',
    year:'OCT 2024'
  },
  {
    title: "Mid Exam Vocabs",
    description: "الكلمات المطلوب حفظها بالاختبار النصفي",
    imageUrl: "/mid-vocabs.jpg",
    imageAlt: "الكلمات المطلوب حفظها بالاختبار النصفي",
    link: "/resources/kau/english/elis110/mid-vocabs",
    type: "midterm",
    year: "OCT 2024",
  },
];

export default function ELIS110() {
  return (
    <>
      <Head>
        <title>KAU English Resources - ELIS110</title>
        <meta name="description" content="English language resources for KAU students, including vocabulary and grammar for ELIS110 course." />
        <meta name="keywords" content="KAU, English, ELIS110, vocabulary, grammar, final exam, midterm" />
      </Head>
      <div className="max-w-5xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">KAU English Resources - ELIS110</h1>
        <Tabs aria-label="Resource categories">
          <Tab key="all" title="All">
            <ResourceGrid resources={resources} />
          </Tab>
          <Tab key="midterm" title="Mid Term">
            <ResourceGrid resources={resources.filter(r => r.type === 'midterm' || r.type === 'all')} />
          </Tab>
          <Tab key="final" title="Final">
            <ResourceGrid resources={resources.filter(r => r.type === 'final' || r.type === 'all')} />
          </Tab>
        </Tabs>
      </div>
    </>
  );
}

function ResourceGrid({ resources }: { resources: ResourceItem[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
      {resources.map((resource, index) => (
        <Link key={index} href={resource.link} isExternal={resource.isExternal}>
          <Card className="h-full hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <h4 className="font-bold text-large">{resource.title}</h4>
              <small className="text-default-500">{resource.year}</small>
              <p dir='rtl' className="text-tiny font-bold">{resource.description}</p>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <Image
                alt={resource.imageAlt}
                className="object-cover rounded-xl w-full"
                src={resource.imageUrl}
              />
            </CardBody>
          </Card>
        </Link>
      ))}
    </div>
  );
}