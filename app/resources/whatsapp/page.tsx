'use client';

import React from "react";
import { Card, CardBody, CardHeader, Image, Link } from "@nextui-org/react";

export default function WhatsApp() {
  return (
    
  <>
    <Link href="/resources/whatsapp/english-whatsapp-group"> 
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large">English WhatsApp Group</h4>
        <small className="text-default-500">2024-2025</small>
        <p className="text-tiny font-bold">Practice and learn English on WhatsApp.</p>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="English WhatsApp Group Blog Post"
          className="object-cover rounded-xl"
          src="/whatsappgroups.png"
          width={270}
          height={200}
        />
      </CardBody>
    </Card>
    </Link>
    <Link href="/resources/whatsapp/arapca-whatsapp-grubu">
    <Card className="py-4 m-2">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large">Arapça WhatsApp Grubu</h4>
        <small className="text-default-500">2024-2025</small>
        <p className="text-tiny font-bold">Practice and learn Arabic on WhatsApp.</p>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Arabic WhatsApp Group Blog Post"
          className="object-cover rounded-xl"
          src="https://media-sin6-3.cdn.whatsapp.net/v/t61.24694-24/341101225_1109362833789229_8306012962624055979_n.jpg?ccb=11-4&oh=01_Q5AaIEY6Au8Sm8pycCAxSqNp6YmjcClZ-miOs_DU5EF1rkZq&oe=665B0528&_nc_sid=e6ed6c&_nc_cat=100"
          width={270}
          height={200}
        />
      </CardBody>
    </Card>
    </Link>
    </>
  );
}

