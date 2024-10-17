import React from 'react';
import { Card, CardBody, CardHeader, Image, Link, Button } from "@nextui-org/react";
import type { Metadata } from 'next'
import { FaBook, FaLanguage } from "react-icons/fa";

export const metadata: Metadata = {
  title: 'اللغة الإنجليزية - جامعة الملك عبد العزيز',
  description: 'استكشف شروحات، ملخصات، وتسريبات لمنهاج اللغة الإنجليزية بجميع مستوياته. لمنهاج اللغة الإنجليزية  في جامعة الملك عبد العزيز',
  keywords: 'اللغة الإنجليزية، جامعة الملك عبد العزيز، اللغة الإنجليزية في جامعة الملك عبد العزيز، انقلش جامعة الملك عبد العزيز، انجليزي جامعة الملك عبدالعزيز، شرح انقلش جامعة',
}

const courses = [
  {
    code: "ELIS 110",
    title: "إنجليزي علمي 1",
    description: "مصادر تعليمية لمنهاج اللغة الإنجليزية المستوى الأول علمي",
    link: "/resources/kau/english/elis110"
  },
  {
    code: "ELIS 120",
    title: "إنجليزي علمي 2",
    description: "مصادر تعليمية لمنهاج اللغة الإنجليزية المستوى الثاني علمي",
    link: "/resources/kau/english/elis120"
  }
];

const EnglishResources = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">اللغة الإنجليزية</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          مصادر تعليمية لمنهاج اللغة الإنجليزية في جامعة الملك عبد العزيز
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {courses.map((course) => (
          <Link key={course.code} href={course.link}>
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="flex gap-3">
                <FaLanguage className="text-4xl text-primary" />
                <div className="flex flex-col">
                  <p className="text-md font-bold">{course.code}</p>
                  <p className="text-small text-default-500">{course.title}</p>
                </div>
              </CardHeader>
              <CardBody>
                <p dir="rtl" className="text-sm mb-4">{course.description}</p>
                <Image
                  alt={`${course.code} Course Image`}
                  className="object-cover rounded-xl mb-4"
                  src="/elis.png"
                  width={270}
                  height={200}
                />
                <Button 
                  color="primary" 
                  endContent={<FaBook />}
                  className="w-full"
                >
                  استكشف المصادر
                </Button>
              </CardBody>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EnglishResources;