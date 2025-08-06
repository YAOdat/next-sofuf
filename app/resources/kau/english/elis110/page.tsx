'use client'

import React from "react"
import { Card, CardBody, CardHeader, Image, Link, Tabs, Tab } from "@heroui/react"
import Head from 'next/head'
import { FaExternalLinkAlt } from "react-icons/fa";

type ResourceItem = {
  title: string
  year: string
  description: string
  imageUrl: string
  imageAlt: string
  link: string
  isExternal?: boolean
  type: 'midterm' | 'final' | 'all'
}

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
    year: '2023-2024'
  },
  {
    title: "Mid Term Grammar Revision",
    description: "مراجعة قواعد الاختبار النصفي",
    imageUrl: "https://goodly.co.in/wp-content/uploads/2023/10/youtube-logo-png-46016.png",
    imageAlt: "مراجعة قواعد الاختبار النصفي",
    link: "https://www.youtube.com/watch?v=Y6PQ655-Gxk",
    isExternal: true,
    type: 'midterm',
    year: 'OCT 2024'
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
]

export default function Component() {
  return (
    <div className="min-h-screen bg-background">
      <Head>
        <title>KAU English Resources - ELIS110</title>
        <meta name="description" content="English language resources for KAU students, including vocabulary and grammar for ELIS110 course." />
        <meta name="keywords" content="KAU, English, ELIS110, vocabulary, grammar, final exam, midterm" />
      </Head>
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-foreground">KAU English Resources - ELIS110</h1>
        <Tabs
          aria-label="Resource categories"
          color="primary"
          variant="underlined"
          classNames={{
            tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider",
            cursor: "w-full bg-primary",
            tab: "max-w-fit px-0 h-12",
            tabContent: "group-data-[selected=true]:text-primary"
          }}
        >
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
    </div>
  )
}

function ResourceGrid({ resources }: { resources: ResourceItem[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {resources.map((resource, index) => (
        <Link key={index} href={resource.link} isExternal={resource.isExternal}>
          <Card className="h-full hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="p-0 overflow-hidden h-48">
              <Image
                alt={resource.imageAlt}
                src={resource.imageUrl}
                className="w-full h-full object-cover"
              />
            </CardHeader>
            <CardBody className="p-4 flex flex-col justify-between h-[calc(100%-12rem)]">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-semibold text-foreground">{resource.title}</h4>
                  {resource.isExternal && (
                    <FaExternalLinkAlt className="w-4 h-4 text-primary" />
                  )}
                </div>
                <p className="text-sm text-default-500 mb-2">{resource.year}</p>
              </div>
              <p dir='rtl' className="text-sm text-foreground">{resource.description}</p>
            </CardBody>
          </Card>
        </Link>
      ))}
    </div>
  )
}