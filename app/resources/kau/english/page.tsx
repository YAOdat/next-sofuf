import React from 'react';
import { Card, CardBody, CardHeader, Image, Link } from "@nextui-org/react";

const EnglishResources = () => {
  return (
    <div>
      <h1>English Resources</h1>
      <p>This is the English resources page for KAU.</p>
      <Link href="/resources/kau/english/elis101"> 
      <Card className="py-4 max-w-10">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large">ELIS 101 انجليزي علمي 1</h4>
        <small className="text-default-500">2023-2024</small>
        <p dir='rtl' className="text-tiny font-bold whitespace-pre-line">الكلمات المطلوب حفظها بالاختبار النهائي</p>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="English WhatsApp Group Blog Post"
          className="object-cover rounded-xl"
          src="/vocabs.jpg"
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