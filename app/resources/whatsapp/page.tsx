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
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">WhatsApp Group Links</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link href="/resources/whatsapp/english-whatsapp-group" className="block hover:opacity-90 transition-opacity"> 
          <Card className="h-full">
            <CardHeader className="pb-0 pt-4 px-6">
              <div className="space-y-2">
                <h4 className="text-xl font-bold">English WhatsApp Group</h4>
                <small className="text-default-500 block">2024-2025</small>
                <p className="text-sm">Practice and learn English on WhatsApp.</p>
              </div>
            </CardHeader>
            <CardBody className="pt-4 px-6 pb-6">
              <div className="aspect-video w-full">
                <Image
                  alt="English WhatsApp Group Blog Post"
                  className="object-cover rounded-lg w-full h-full"
                  src="/whatsappgroups.png"
                />
              </div>
            </CardBody>
          </Card>
        </Link>

        <Link href="/resources/whatsapp/arapca-whatsapp-grubu" className="block hover:opacity-90 transition-opacity">
          <Card className="h-full">
            <CardHeader className="pb-0 pt-4 px-6">
              <div className="space-y-2">
                <h4 className="text-xl font-bold">Arapça WhatsApp Grubu</h4>
                <small className="text-default-500 block">2024-2025</small>
                <p className="text-sm">Practice and learn Arabic on WhatsApp.</p>
              </div>
            </CardHeader>
            <CardBody className="pt-4 px-6 pb-6">
              <div className="aspect-video w-full">
                <Image
                  alt="Arabic WhatsApp Group Blog Post"
                  className="object-cover rounded-lg w-full h-full"
                  src="https://external-preview.redd.it/RqmBj2CfpZUCyg_SqB_ivZRpWwi1-s9bFvdab0Cu5aA.jpg?auto=webp&s=245b9c36dc8410a715c4dfd4d255da5a9935a7b3"
                />
              </div>
            </CardBody>
          </Card>
        </Link>

        <Link href="/resources/whatsapp/voice-chat-whatsapp-group" className="block hover:opacity-90 transition-opacity">
          <Card className="h-full">
            <CardHeader className="pb-0 pt-4 px-6">
              <div className="space-y-2">
                <h4 className="text-xl font-bold">Voice Chat WhatsApp Group</h4>
                <small className="text-default-500 block">2024-2025</small>
                <p className="text-sm">Practice spoken English on WhatsApp.</p>
              </div>
            </CardHeader>
            <CardBody className="pt-4 px-6 pb-6">
              <div className="aspect-video w-full">
                <Image
                  alt="English WhatsApp Group Blog Post"
                  className="object-cover rounded-lg w-full h-full"
                  src="/voice-notes.jpg"
                />
              </div>
            </CardBody>
          </Card>
        </Link>

        <Link href="/resources/whatsapp/ingilizce-whatsapp-grubu" className="block hover:opacity-90 transition-opacity">
          <Card className="h-full">
            <CardHeader className="pb-0 pt-4 px-6">
              <div className="space-y-2">
                <h4 className="text-xl font-bold">Ingilizce WhatsApp Grubu</h4>
                <small className="text-default-500 block">2024-2025</small>
                <p className="text-sm">Practice and learn Turkish on WhatsApp.</p>
              </div>
            </CardHeader>
            <CardBody className="pt-4 px-6 pb-6">
              <div className="aspect-video w-full">
                <Image
                  alt="Turkish WhatsApp Group Blog Post"
                  className="object-cover rounded-lg w-full h-full"
                  src="/whatsappgroups.png"
                />
              </div>
            </CardBody>
          </Card>
        </Link>

        <Link href="/resources/whatsapp/whatsapp-gruppa-dlya-praktiki-arabskogo-yazyka" className="block hover:opacity-90 transition-opacity">
          <Card className="h-full">
            <CardHeader className="pb-0 pt-4 px-6">
              <div className="space-y-2">
                <h4 className="text-xl font-bold">Группа WhatsApp для практики арабского языка</h4>
                <small className="text-default-500 block">2024-2025</small>
                <p className="text-sm">Изучайте и практикуйте арабский язык в WhatsApp-группах и Telegram.</p>
              </div>
            </CardHeader>
            <CardBody className="pt-4 px-6 pb-6">
              <div className="aspect-video w-full">
                <Image
                  alt="Группа WhatsApp для практики арабского языка"
                  className="object-cover rounded-lg w-full h-full"
                  src="https://external-preview.redd.it/RqmBj2CfpZUCyg_SqB_ivZRpWwi1-s9bFvdab0Cu5aA.jpg?auto=webp&s=245b9c36dc8410a715c4dfd4d255da5a9935a7b3"
                />
              </div>
            </CardBody>
          </Card>
        </Link>
      </div>
    </div>
  );
}