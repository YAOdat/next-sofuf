import React from 'react';
import { Card, CardBody, CardHeader, Image, Link } from "@nextui-org/react";

const EnglishResources = () => {
  return (
    <div>
        <head>
        <title>اللغة الإنجليزية - جامعة الملك عبد العزيز</title>
        <meta name="description" content="استكشف شروحات، ملخصات، وتسريبات لمنهاج اللغة الإنجليزية بجميع مستوياته. لمنهاج اللغة الإنجليزية  في جامعة الملك عبد العزيز" />
        <meta name="keywords" content="اللغة الإنجليزية، جامعة الملك عبد العزيز، اللغة الإنجليزية في جامعة الملك عبد العزيز، انقلش جامعة الملك عبد العزيز، انجليزي جامعة الملك عبدالعزيز، شرح انقلش جامعة" />
        </head>
      <h1 className="text-2xl font-bold text-center my-4">اللغة الإنجليزية</h1>
      <p>مصادر تعليمية لمنهاج اللغة الإنجليزية في جامعة الملك عبد العزيز</p>
      <br></br>
      <Link href="/resources/kau/english/elis101"> 
      <Card className="py-4 max-w-10">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large">ELIS 101 انجليزي علمي 1</h4>
        <small className="text-default-500">2023-2024</small>
        <p dir='rtl' className="text-tiny font-bold whitespace-pre-line">مصادر تعليمية لمنهاج اللغة الإنجليزية المستوى الأول علمي</p>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="English WhatsApp Group Blog Post"
          className="object-cover rounded-xl"
          src="/elis.png"
          width={270}
          height={200}
        />
      </CardBody>
    </Card>
    </Link>
    </div>
  );
};

export default EnglishResources;