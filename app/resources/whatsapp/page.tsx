'use client';

import React from "react";
import { Card, CardBody, CardHeader, Image, Link } from "@nextui-org/react";

export default function WhatsApp() {
  return (
    <Link href="/resources/whatsapp/english-whatsapp-group"> 
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large">English WhatsApp Group</h4>
        <small className="text-default-500">2023-2024</small>
        <p className="text-tiny font-bold">Practice and learn English on WhatsApp.</p>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="/whatsappgroups.png"
          width={270}
          height={200}
        />
      </CardBody>
    </Card>
    </Link>
  );
}

