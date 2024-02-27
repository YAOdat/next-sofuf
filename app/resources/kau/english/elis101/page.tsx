'use client';

import React from "react";
import { Card, CardBody, CardHeader, Image, Link } from "@nextui-org/react";


export default function WhatsApp() {
  return (
    <> 
    <Link href="/resources/kau/english/elis101/vocabs"> 
    <Card className="py-4 max-w-10 m-2">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large">Final Exam Vocabs</h4>
        <small className="text-default-500">2023-2024</small>
        <p dir='rtl' className="text-tiny font-bold whitespace-pre-line">الكلمات المطلوب حفظها بالاختبار النهائي</p>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="الكلمات المطلوب حفظها بالاختبار النهائي"
          className="object-cover rounded-xl"
          src="/vocabs.jpg"
          width={270}
          height={200}
        />
      </CardBody>
    </Card>
    </Link>  
    <Link href="https://www.youtube.com/watch?v=KZ2Jq2NHM_8&t" isExternal> 
    <Card className="py-4 max-w-10 m-2">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large">Grammar Revision</h4>
        <small className="text-default-500">2023-2024</small>
        <p dir='rtl' className="text-tiny font-bold whitespace-pre-line">مراجعة قواعد الاختبار النهائي</p>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="مراجعة انقلش الاختبار النهائي" 
          className="object-cover rounded-xl"
          src="https://i.ytimg.com/an_webp/KZ2Jq2NHM_8/mqdefault_6s.webp?du=3000&sqp=CJOK-a4G&rs=AOn4CLAkIIMkOuipuKfQUWzmscs4_Kla3A"
          width={270}
          height={200}
        />
      </CardBody>
    </Card>
    </Link>
    </>
  );
}

