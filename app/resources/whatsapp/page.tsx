
import React from "react";
import { Card, CardBody, CardHeader, Image, Link } from "@nextui-org/react";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'WhatsApp Group Links',
  keywords: 'English WhatsApp groups, English WhatsApp group, learn English online, language exchange, English whatsapp group link, practice English on WhatsApp, Best English Language Exchange on WhatsApp, Chat in English on WhatsApp, Free English WhatsApp Group 2024, Arabic WhatsApp group, Turkish whatsapp group, french whatsapp group.',
  description: 'Find & join active WhatsApp groups for your interests! Free links to connect & chat with people who share your passions.',
  robots: 'index, follow',
}

export default function WhatsApp() {

  
  return (
    
  <>
<h1 className="text-2xl font-bold text-center my-2">WhatsApp Group Links</h1><Link href="/resources/whatsapp/english-whatsapp-group"> 
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
          src="https://external-preview.redd.it/RqmBj2CfpZUCyg_SqB_ivZRpWwi1-s9bFvdab0Cu5aA.jpg?auto=webp&s=245b9c36dc8410a715c4dfd4d255da5a9935a7b3"
          width={270}
          height={200}
        />
      </CardBody>
    </Card>
    </Link>
    <Link href="/resources/whatsapp/voice-chat-whatsapp-group">
    <Card className="py-4 m-2">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large">Voice Chat WhatsApp Group</h4>
        <small className="text-default-500">2024-2025</small>
        <p className="text-tiny font-bold">Practice spoken English on WhatsApp.</p>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="English WhatsApp Group Blog Post"
          className="object-cover rounded-xl"
          src="/voice-notes.jpg"
          width={270}
          height={200}
        />
      </CardBody>
    </Card>
    </Link>
    <Link href="/resources/whatsapp/ingilizce-whatsapp-grubu">
    <Card className="py-4 m-2">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large">Ingilizce WhatsApp Grubu</h4>
        <small className="text-default-500">2024-2025</small>
        <p className="text-tiny font-bold">Practice and learn Turkish on WhatsApp.</p>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Turkish WhatsApp Group Blog Post"
          className="object-cover rounded-xl"
          src="/whatsappgroups.png"
          width={270}
          height={200}
        />
      </CardBody>
    </Card>
    </Link>

    </>
  );
}

