'use client';

import React from "react";
import { Card, CardBody, CardHeader, Image, Link, Tabs, Tab, Badge } from "@nextui-org/react";
import AdComponent from "../../../../../components/AdComponent";

interface ResourceCard {
  title: string;
  description: string;
  imageSrc: string;
  link: string;
}

const resourceCards: Record<string, ResourceCard[]> = {
  midTerm: [
    {
      title: "Mid Exam Vocabs",
      description: "الكلمات المطلوب حفظها بالاختبار النصفي",
      imageSrc: "/vocabs.jpg",
      link: "/resources/kau/english/elis120/vocabs"
    },
    {
      title: "Mid Practice Test",
      description: "اختبار تجريبي يحاكي الاختبار الفعلي النصفي",
      imageSrc: "/practice-test.jpg",
      link: "/resources/kau/english/elis120/practice"
    },
    {
      title: "Progress Quizzes",
      description: "حلول اختبارات التقدم في المستوى",
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcoAWPxvTx-M6z5MhO57TCb99S8UUB498DH2nXEWoVUQwrrnTA",
      link: "/resources/kau/english/elis120/progress-quiz"
    }
  ],
  final: [
    {
      title: "Final Grammar Revision",
      description: "مراجعة شاملة لقواعد اللغة الإنجليزية للاختبار النهائي",
      imageSrc: "https://goodly.co.in/wp-content/uploads/2023/10/youtube-logo-png-46016.png",
      link: "/resources/kau/english/elis120/final-grammar"
    }
  ]
};

const ResourceCard: React.FC<ResourceCard> = ({ title, description, imageSrc, link }) => (
  <Link href={link} className="my-2">
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large">{title}</h4>
        <small className="text-default-500">2023-2024</small>
        <p className="text-tiny font-bold whitespace-pre-line" dir="rtl">{description}.</p>      </CardHeader>
      <CardBody className="overflow-hidden py-2">
        <div className="h-[200px] w-[270px]">
          <Image
            alt="انجليزي جامعة الملك عبد العزيز"
            className="object-cover h-full w-full rounded-xl"
            src={imageSrc}
          />
        </div>
      </CardBody>
    </Card>
  </Link>
);

export default function ELIS120() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">ELIS120 Resources</h2>
      <Tabs aria-label="ELIS120 Resources">
        <Tab key="all" title="All">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...resourceCards.midTerm, ...resourceCards.final].map((card, index) => (
              <ResourceCard key={index} {...card} />
            ))}
          </div>
        </Tab>
        <Tab key="midTerm" title="Mid Term">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {resourceCards.midTerm.map((card, index) => (
              <ResourceCard key={index} {...card} />
            ))}
          </div>
        </Tab>
        <Tab key="final" title="Final">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {resourceCards.final.map((card, index) => (
              <ResourceCard key={index} {...card} />
            ))}
          </div>
        </Tab>
      </Tabs>
      <div className="mt-8 relative">
        <div className="absolute top-0 left-0 bg-yellow-400 text-black text-xs px-2 py-1 rounded-tl">
          Advertisement
        </div>
        <AdComponent />
      </div>
    </div>
  );
}
