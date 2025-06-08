import React from "react";
import { Card, CardBody, CardHeader, Image, Link } from "@nextui-org/react";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'WhatsApp Group Links',
  keywords: 'English WhatsApp groups, Russian WhatsApp group, Arabic WhatsApp group, Turkish whatsapp group, french whatsapp group, language exchange WhatsApp groups, practice languages on WhatsApp, Free WhatsApp Groups 2024, Japanese WhatsApp Group, Filipino WhatsApp Group',
  description: 'Find & join active WhatsApp groups for your interests! Free links to connect & chat with people who share your passions in multiple languages.',
  robots: 'index, follow',
}

const groupCards = [
  {
    href: "/resources/whatsapp/english-whatsapp-group",
    title: "English WhatsApp Group",
    date: "2024-2025",
    description: "Practice and learn English on WhatsApp.",
    imageUrl: "/whatsappgroups.png",
    imageAlt: "English WhatsApp Group Blog Post",
    flag: "🇬🇧"
  },
  {
    href: "/resources/whatsapp/gruppa-whatsapp-dlya-angliyskogo-yazyka",
    title: "Русская группа Ватсап",
    date: "2024-2025",
    description: "Практикуйте и изучайте английский язык в Ватсап.",
    imageUrl: "/whatsappgroups.png",
    imageAlt: "Русская группа Ватсап",
    flag: "🇷🇺"
  },
  {
    href: "/resources/whatsapp/arapca-whatsapp-grubu",
    title: "Arapça WhatsApp Grubu",
    date: "2024-2025",
    description: "Practice and learn Arabic on WhatsApp.",
    imageUrl: "/arabicgroup.jpg",
    imageAlt: "Arabic WhatsApp Group Blog Post",
    flag: "🇹🇷"
  },
  {
    href: "/resources/whatsapp/voice-chat-whatsapp-group",
    title: "Voice Chat WhatsApp Group",
    date: "2024-2025",
    description: "Practice spoken English on WhatsApp.",
    imageUrl: "/voice-notes.jpg",
    imageAlt: "Voice Chat WhatsApp Group Blog Post",
    flag: "🇬🇧"
  },
  {
    href: "/resources/whatsapp/ingilizce-whatsapp-grubu",
    title: "Ingilizce WhatsApp Grubu",
    date: "2024-2025",
    description: "Practice and learn Turkish on WhatsApp.",
    imageUrl: "/whatsappgroups.png",
    imageAlt: "Turkish WhatsApp Group Blog Post",
    flag: "🇹🇷"
  },
  {
    href: "/resources/whatsapp/whatsapp-gruppa-dlya-praktiki-arabskogo-yazyka",
    title: "Группа WhatsApp для практики арабского языка",
    date: "2024-2025",
    description: "Изучайте и практикуйте арабский язык в WhatsApp-группах и Telegram.",
    imageUrl: "/arabicgroup.jpg",
    imageAlt: "Группа WhatsApp для практики арабского языка",
    flag: "🇷🇺"
  },
  {
    href: "/resources/whatsapp/grob-whatsapp-englizi",
    title: "مجموعة واتساب للغة الإنجليزية",
    date: "2025-2026",
    description: "مارس وتعلم اللغة الإنجليزية على واتساب",
    imageUrl: "/whatsappgroups.png",
    imageAlt: "قروب واتساب اللغة الإنجليزية",
    flag: "🇦🇪"
  },
  {
    href: "/resources/whatsapp/software-developers-whatsapp-group",
    title: "Software Developers WhatsApp Group",
    date: "2025-2026",
    description: "Discuss the latest news in the software development industry.",
    imageUrl: "/developers-whatsapp.jpg",
    imageAlt: "Software Developers WhatsApp Group",
    flag: "🇬🇧"
  },
  {
    href: "/resources/whatsapp/grupo-whatsapp-em-ingles",
    title: "Grupos de inglês no WhatsApp",
    date: "2025-2026",
    description: "Conecte-se com aprendizes de inglês de todo o mundo.",
    imageUrl: "/whatsappgroups.png",
    imageAlt: "Grupos de inglês no WhatsApp",
    flag: "🇵🇹"
  },
  {
    href: "/resources/whatsapp/kelompok-bahasa-inggris",
    title: "Grup WhatsApp Bahasa Inggris",
    date: "2025-2026",
    description: "Belajar dan Berlatih Bahasa Inggris di WhatsApp",
    imageUrl: "/whatsappgroups.png",
    imageAlt: "Belajar dan Berlatih Bahasa Inggris di WhatsApp",
    flag: "🇮🇩"
  },
  {
    href: "/resources/whatsapp/englisch-lernen-whatsapp-gruppen",
    title: "Englische WhatsApp-Gruppen",
    date: "2025-2026",
    description: "Englisch auf WhatsApp lernen und üben",
    imageUrl: "/whatsappgroups.png",
    imageAlt: "Englische WhatsApp-Gruppen",
    flag: "🇩🇪"
  },
  // --- Newly Added Cards ---
  {
    href: "/resources/whatsapp/eigo-whatsapp-gurupu",
    title: "英語のWhatsAppグループ",
    date: "2025-2026",
    description: "WhatsAppで英語を練習し、学びましょう",
    imageUrl: "/whatsappgroups.png",
    imageAlt: "Japanese WhatsApp Group",
    flag: "🇯🇵"
  },
  {
    href: "/resources/whatsapp/stickers-whatsapp-group",
    title: "Stickers WhatsApp Group",
    date: "2025-2026",
    description: "Share, discover, and request new stickers.",
    imageUrl: "/sticker.png", // Assumed a different image for variety
    imageAlt: "Stickers WhatsApp Group",
    flag: "🇬🇧"
  },
  {
    href: "/resources/whatsapp/ingles-whatsapp-grupo",
    title: "Ingles WhatsApp Grupo",
    date: "2025-2026",
    description: "Magsanay at matuto ng Ingles sa WhatsApp.",
    imageUrl: "/whatsappgroups.png",
    imageAlt: "Filipino WhatsApp Group for English",
    flag: "🇵🇭"
  },
];

export default function WhatsApp() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">WhatsApp Group Links</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {groupCards.map((card, index) => (
          <Link
            key={index}
            href={card.href}
            className="block hover:opacity-90 transition-opacity"
          >
            <Card className="h-full">
              <CardHeader className="pb-0 pt-4 px-6">
                <div className="space-y-2 w-full">
                  <div className="flex items-center justify-between w-full">
                    <h4 className="text-xl font-bold">{card.title}</h4>
                    <span className="text-2xl ml-2">{card.flag}</span>
                  </div>
                  <small className="text-default-500 block">{card.date}</small>
                  <p className="text-sm">{card.description}</p>
                </div>
              </CardHeader>
              <CardBody className="pt-4 px-6 pb-6">
                <div className="aspect-video w-full">
                  <Image
                    alt={card.imageAlt}
                    className="object-cover rounded-lg w-full h-full"
                    src={card.imageUrl}
                  />
                </div>
              </CardBody>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}