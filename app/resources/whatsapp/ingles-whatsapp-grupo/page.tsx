import React from "react";
import { Card, CardBody, Spacer, Link, Code, Image, Button, Chip } from "@heroui/react";
import type { Metadata } from 'next';
import CommentSection from "@/components/commentSection";
import Script from 'next/script';

const englishGroups = [
  { name: 'English Group 1', link: 'https://chat.whatsapp.com/CAL43yKsm919DnmmtdGVNT', language: 'English', members: '850+' },
  { name: 'English Group 2', link: 'https://chat.whatsapp.com/L6BzyM6siWzCvwlFINGhUN', language: 'English', members: '500+' },
  { name: 'English Group 3', link: 'https://chat.whatsapp.com/FMOdmLdsbRQCOUDPsvGoyf', language: 'English', members: '650+' },
  { name: 'English Group 4', link: 'https://chat.whatsapp.com/G4yKUNBwA6aAlwOPOUmpi1', language: 'English', members: '700+' },
  { name: 'English Group 5', link: 'https://chat.whatsapp.com/LyczdR1bJWGErr6ArcSBSx', language: 'English', members: '200+' },
  { name: 'Voice Notes Group', link: 'https://chat.whatsapp.com/DNAiOzxCkAVCsDA2oNnlJd', language: 'English', members: '900+', special: 'Voice Practice' },
  { name: 'English Arabic Group', link: 'https://chat.whatsapp.com/HeBS7UaTuH2HtSDMl9hj9x', language: 'EnglishArabic', members: '180+' }
];

const langGroups = [
  {
    name: "Arabic | English",
    description: "Sumali sa bilingual na komunidad kung saan ang mga nag-aaral ng Arabic at English ay nagkakapalitan ng wika.",
    link: "https://chat.whatsapp.com/HeBS7UaTuH2HtSDMl9hj9x",
    flag: "🇸🇦🇺🇸"
  },
  {
    name: "English — Pyсский",
    description: "Magsanib-puwersa kasama ang mga nagsasalita ng Russian at English para sa kapaki-pakinabang na palitan ng wika.",
    link: "https://chat.whatsapp.com/CGmjCn9z94p4O6IraY5pvL",
    flag: "🇷🇺🇺🇸"
  },
  {
    name: "Türkçe Ve İngilizce",
    description: "Makipag-ugnayan sa mga kapwa nag-aaral ng Turkish at English sa isang makabuluhang grupo.",
    link: "https://chat.whatsapp.com/LRDFFg2GR6B7rekwAo3mCS",
    flag: "🇹🇷🇺🇸"
  },
  {
    name: "Japanese(日本語)-English(英語)",
    description: "Sumali upang magsanay ng Japanese at English sa isang masaya at suportadong kapaligiran.",
    link: "https://chat.whatsapp.com/BiCkJLiwf1y8SBXoKJlc5J",
    flag: "🇯🇵🇺🇸"
  },
  {
    name: "Thai ไทย I English",
    description: "Matuto ng Thai at English kasama ang mga katutubong nagsasalita sa isang palakaibigang grupo.",
    link: "https://chat.whatsapp.com/Je7gDVaz6tS28AwTvPuZoM",
    flag: "🇹🇭🇺🇸"
  },
  {
    name: "English - Français",
    description: "Sumali upang paghusayin ang iyong kasanayan sa English at French.",
    link: "https://chat.whatsapp.com/EQlwGRxgDjeJwo78SgQUkD",
    flag: "🇫🇷🇺🇸"
  }
];

export const metadata: Metadata = {
  title: 'Libreng English WhatsApp Groups | Matuto ng English sa WhatsApp - Filipino Learners',
  keywords: 'English WhatsApp group Filipino, matuto ng English online libre, palitan ng wika English Filipino, English WhatsApp group link 2024, magsanay ng English sa WhatsApp libre, libreng English WhatsApp groups 2025, English speaking whatsapp group Filipino, english learning whatsapp group Philippines, english whatsapp group link 2026, learn english whatsapp group Filipino, english chatting whatsapp group Philippines, learn english whatsapp Filipino, english whatsapp group Philippines, english chatting group Filipino, English practice WhatsApp group, English conversation group WhatsApp, English language exchange WhatsApp, English speaking practice group, English learning community WhatsApp, English study group WhatsApp, English communication practice, English fluency WhatsApp group, English proficiency practice, English speaking Filipino learners, English learning Filipino community, English practice Filipino speakers, English conversation Filipino WhatsApp, English language Filipino learners, English speaking Filipino group, English learning Filipino WhatsApp, English practice Filipino community',
  description: 'Sumali sa mga libreng English WhatsApp group para sa mga Filipino learners. Matuto at magsanay ng English kasama ang mga native speaker at ibang learners. Pagbutihin ang inyong pagsasalita, pagsusulat, at pakikinig sa mga totoong usapan. Libre at bukas para sa lahat ng Filipino na gustong matuto ng English.',
  robots: 'index, follow',
  openGraph: {
    title: 'Libreng English WhatsApp Groups | Matuto ng English - Filipino Learners',
    description: 'Sumali sa libreng English WhatsApp groups para sa mga Filipino learners. Magsanay ng English kasama ang mga native speaker at ibang learners sa buong mundo. Libre at bukas para sa lahat ng Filipino na gustong pagbutihin ang kanilang English.',
    url: 'https://www.sofuf.com/resources/whatsapp/ingles-whatsapp-grupo',
    images: [{ url: 'https://www.sofuf.com/ewg-blog.png', alt: 'Libreng English WhatsApp Groups para sa Filipino Learners' }],
    type: 'website',
    locale: 'tl_PH',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Libreng English WhatsApp Groups | Matuto ng English - Filipino Learners',
    description: 'Sumali sa libreng English WhatsApp groups para sa mga Filipino learners. Magsanay ng English kasama ang mga native speaker at ibang learners sa buong mundo.',
    images: ['https://www.sofuf.com/ewg-blog.png'],
  },
  alternates: {
    canonical: 'https://www.sofuf.com/resources/whatsapp/ingles-whatsapp-grupo',
  },
  other: {
    'geo.region': 'PH',
    'geo.placename': 'Philippines',
    'language': 'tl',
  },
};

export default function WhatsApp() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Libreng English WhatsApp Groups para sa Filipino Learners",
    "description": "Sumali sa mga libreng English WhatsApp group para sa mga Filipino learners. Matuto at magsanay ng English kasama ang mga native speaker at ibang learners.",
    "url": "https://www.sofuf.com/resources/whatsapp/ingles-whatsapp-grupo",
    "mainEntity": {
      "@type": "ItemList",
      "name": "English WhatsApp Groups for Filipino Learners",
      "description": "Collection of free English WhatsApp groups for Filipino learners to practice and improve their English skills",
      "numberOfItems": englishGroups.length + langGroups.length,
      "itemListElement": [
        ...englishGroups.map((group, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": "Organization",
            "name": group.name,
            "url": group.link,
            "description": `English WhatsApp group for Filipino learners with ${group.members} members`
          }
        })),
        ...langGroups.map((group, index) => ({
          "@type": "ListItem",
          "position": englishGroups.length + index + 1,
          "item": {
            "@type": "Organization",
            "name": group.name,
            "url": group.link,
            "description": group.description
          }
        }))
      ]
    },
    "author": {
      "@type": "Person",
      "name": "Odat"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Sofuf",
      "url": "https://www.sofuf.com"
    },
    "inLanguage": ["tl", "en"],
    "audience": {
      "@type": "Audience",
      "audienceType": "Filipino English Learners"
    }
  };

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 px-4 py-2 rounded-full mb-6">
            <span className="text-2xl">📱</span>
            <span className="text-sm font-medium text-green-700 dark:text-green-300">WhatsApp Learning Groups</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-6">
            Libreng English WhatsApp Groups
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Matuto at magsanay ng English sa mga aktibong WhatsApp community para sa mga Filipino learners. Sumali sa libu-libong learners sa buong mundo!
          </p>
          <Button 
            as={Link}
            href="https://chat.whatsapp.com/LyczdR1bJWGErr6ArcSBSx"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold px-8 py-3 text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            size="lg"
          >
            🚀 Sumali Ngayon - Libre!
          </Button>
        </div>

        {/* Main Content Card */}
        <Card className="shadow-2xl border-0 mb-8">
          <CardBody className="p-8 md:p-12">
            <article className="max-w-6xl mx-auto">
              {/* Author Info */}
              <div className="flex items-center gap-4 mb-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                  O
                </div>
                <div>
                  <p className="font-semibold">May-akda: Odat</p>
                  <p className="text-sm text-gray-500">2025-06-08</p>
                </div>
              </div>

              {/* Introduction */}
              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-lg leading-relaxed">
                  Maligayang pagdating sa aming <span className="font-bold text-green-600">Libreng English Learning WhatsApp Groups para sa mga Filipino Learners</span>! 
                  Ang WhatsApp Messenger ay isang malawakang ginagamit na app para sa instant messaging na nagbibigay-daan 
                  sa pagpapadala ng text at voice messages, video calls, at pagbabahagi ng media. Napakahusay nitong gamitin 
                  para sa pagsasanay sa English language, lalo na para sa mga Filipino na gustong pagbutihin ang kanilang English skills.
                </p>
                <p className="text-lg leading-relaxed mt-4">
                  Sa aming mga grupo, makakahanap kayo ng mga kapwa Filipino learners at native English speakers na handang 
                  tumulong sa inyong pag-aaral. Libre ang lahat ng grupo at bukas para sa lahat ng antas - mula sa beginner 
                  hanggang sa advanced level.
                </p>
              </div>

              {/* How It Works Section */}
              <Card className="mb-12 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
                <CardBody className="p-8">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
                    🎯 Paano Ito Gumagana
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">✍️</div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Pagsasanay sa Pagsusulat</h3>
                        <p className="text-gray-600 dark:text-gray-300">Hasain ang inyong pagsusulat sa pamamagitan ng pagpapadala ng mga mensahe sa grupo.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">👁️</div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Pagsasanay sa Pagbasa</h3>
                        <p className="text-gray-600 dark:text-gray-300">Palawakin ang inyong kakayahan sa pagbasa gamit ang mga mensahe ng iba.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                      <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">🎤</div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Pagsasanay sa Pagsasalita</h3>
                        <p className="text-gray-600 dark:text-gray-300">Mag-record ng voice notes at ipadala ito upang magsanay ng pagsasalita.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                      <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">👂</div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Pagsasanay sa Pakikinig</h3>
                        <p className="text-gray-600 dark:text-gray-300">Makinig sa mga voice notes mula sa ibang miyembro upang mapaunlad ang inyong pakikinig.</p>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>

              {/* Before Joining Section */}
              <Card className="mb-12 bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-400">
                <CardBody className="p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    ⚠️ Bago Sumali:
                  </h3>
                  <ol className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                      <span>Tiyaking mayroon kayong batayang kaalaman sa wikang English.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                      <span>I-disable ang automatic download ng media sa WhatsApp (<em>Settings {">"} Data and Storage Usage {">"} I-off ang lahat ng downloads</em>).</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                      <span>I-mute agad ang grupo pagkasali ninyo.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                      <span>Basahin at unawain ang mga patakaran ng grupo sa description.</span>
                    </li>
                  </ol>
                </CardBody>
              </Card>

              {/* English Groups Section */}
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                  🇺🇸 Libreng English WhatsApp Groups para sa Filipino Learners
                </h2>
                <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
                  Upang sumali, i-click lamang ang link sa bawat grupo. Kung wala pa kayong WhatsApp, 
                  <Link href="https://www.whatsapp.com/download" target="_blank" className="text-blue-500 font-semibold"> i-download ito dito.</Link>
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {englishGroups.map((group, index) => (
                    <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      <CardBody className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="font-bold text-lg">{group.name}</h3>
                          {group.special && (
                            <Chip color="secondary" size="sm">{group.special}</Chip>
                          )}
                        </div>
                        <div className="flex items-center gap-2 mb-4">
                          <Chip color="success" variant="flat" size="sm">
                            👥 {group.members}
                          </Chip>
                          <Chip color="primary" variant="flat" size="sm">
                            🌐 {group.language}
                          </Chip>
                        </div>
                        <Button
                          as={Link}
                          href={group.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold"
                          variant="solid"
                        >
                          Sumali sa Grupo 🚀
                        </Button>
                      </CardBody>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Feature Image */}
              <div className="flex justify-center mb-12">
                <div className="relative">
                  <Image
                    alt="Sumali sa Libreng English WhatsApp Groups 2026"
                    className="object-cover rounded-xl shadow-2xl"
                    src="/ewg-blog.png"
                    width={400}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                </div>
              </div>

              {/* Language Exchange Groups */}
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                  🌍 Language Exchange Groups
                </h2>
                <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
                  Pagbutihin ang inyong English sa mga bilingual na komunidad
                </p>
                <div className="grid lg:grid-cols-2 gap-8">
                  {langGroups.map((group, index) => (
                    <Card key={index} className="hover:shadow-xl transition-all duration-300">
                      <CardBody className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-2xl">{group.flag}</span>
                          <h3 className="text-xl font-bold">{group.name}</h3>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                          {group.description}
                        </p>
                        <Button
                          as={Link}
                          href={group.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold"
                          variant="solid"
                        >
                          Sumali sa Exchange Group 🔄
                        </Button>
                      </CardBody>
                    </Card>
                  ))}
                </div>
              </div>

              {/* FAQ Section for SEO */}
              <Card className="mb-12 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
                <CardBody className="p-8">
                  <h2 className="text-3xl font-bold text-center mb-8">❓ Madalas Itanong (FAQ)</h2>
                  <div className="space-y-6">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                      <h3 className="font-bold text-lg mb-3">Libre ba ang mga English WhatsApp group?</h3>
                      <p className="text-gray-600 dark:text-gray-300">Oo, libre ang lahat ng grupo. Walang bayad para sumali at magsanay ng English.</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                      <h3 className="font-bold text-lg mb-3">Para saan ang mga English WhatsApp group na ito?</h3>
                      <p className="text-gray-600 dark:text-gray-300">Para sa mga Filipino na gustong matuto at magsanay ng English kasama ang mga native speaker at ibang learners.</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                      <h3 className="font-bold text-lg mb-3">Kailangan ba ng advance na English skills?</h3>
                      <p className="text-gray-600 dark:text-gray-300">Hindi, bukas ang mga grupo para sa lahat ng antas - mula sa beginner hanggang sa advanced level.</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                      <h3 className="font-bold text-lg mb-3">Paano sumali sa English WhatsApp groups?</h3>
                      <p className="text-gray-600 dark:text-gray-300">I-click lamang ang link ng grupo na gusto ninyong salihan. Automatic na kayong makakasali sa grupo.</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                      <h3 className="font-bold text-lg mb-3">May mga Filipino ba sa mga grupo?</h3>
                      <p className="text-gray-600 dark:text-gray-300">Oo, maraming Filipino learners ang sumasali sa mga grupo para magsanay ng English kasama ang mga international learners.</p>
                    </div>
                  </div>
                </CardBody>
              </Card>

              {/* Telegram Section */}
              <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20">
                <CardBody className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">📱 English Telegram Group</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Para sa mga walang WhatsApp, mayroon din kaming English Telegram group para sa pagsasanay sa wika.
                    Sumali sa talakayan at paunlarin ang inyong kasanayan sa English sa isang suportadong komunidad.
                  </p>
                  <Button
                    as={Link}
                    href="https://t.me/theEnglishTelegram"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3"
                    size="lg"
                  >
                    Sumali sa Telegram 💬
                  </Button>
                </CardBody>
              </Card>
            </article>
          </CardBody>
        </Card>

        <CommentSection postID={"f-whatsapp-group"} />
      </div>
    </div>
    </>
  );
}