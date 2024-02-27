'use client';

import React from "react";
import { Card, CardBody, CardHeader, Image, Link } from "@nextui-org/react";


export default function ELIS120() {
  return (
    <Link href="/resources/kau/english/elis120/vocabs"> 
    <Card className="py-4 max-w-10">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large">Mid Exam Vocabs</h4>
        <small className="text-default-500">2023-2024</small>
        <p dir='rtl' className="text-tiny font-bold whitespace-pre-line">الكلمات المطلوب حفظها بالاختبار النصفي</p>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="انجليزي جامعة الملك عبد العزيز"
          className="object-cover rounded-xl"
          src="/vocabs.jpg"
          width={270}
          height={200}
        />
      </CardBody>
    </Card>
    </Link>
  );
}

