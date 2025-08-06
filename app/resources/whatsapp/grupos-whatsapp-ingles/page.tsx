import React from "react";
import { Card, CardBody, Spacer, Link, Code, Image, Button, Chip } from "@heroui/react";
import type { Metadata } from 'next';
import CommentSection from "@/components/commentSection";
import Script from 'next/script';

const englishGroups = [
  { name: 'Grupo de Inglés 1', link: 'https://chat.whatsapp.com/LyczdR1bJWGErr6ArcSBSx', language: 'Inglés', members: '850+' },
  { name: 'Grupo de Inglés 2', link: 'https://chat.whatsapp.com/L6BzyM6siWzCvwlFINGhUN', language: 'Inglés', members: '500+' },
  { name: 'Grupo de Inglés 3', link: 'https://chat.whatsapp.com/FMOdmLdsbRQCOUDPsvGoyf', language: 'Inglés', members: '650+' },
  { name: 'Grupo de Inglés 4', link: 'https://chat.whatsapp.com/G4yKUNBwA6aAlwOPOUmpi1', language: 'Inglés', members: '700+' },
  { name: 'Grupo de Inglés 5', link: 'https://chat.whatsapp.com/CAL43yKsm919DnmmtdGVNT', language: 'Inglés', members: '200+' },
  { name: 'Grupo de Notas de Voz', link: 'https://chat.whatsapp.com/DNAiOzxCkAVCsDA2oNnlJd', language: 'Inglés', members: '900+', special: 'Práctica de Voz' },
  { name: 'Grupo Inglés-Árabe', link: 'https://chat.whatsapp.com/HeBS7UaTuH2HtSDMl9hj9x', language: 'Inglés-Árabe', members: '180+' }
];

const langGroups = [
  {
    name: "Árabe | Inglés",
    description: "Únete a esta comunidad bilingüe donde los estudiantes de árabe e inglés intercambian idiomas.",
    link: "https://chat.whatsapp.com/HeBS7UaTuH2HtSDMl9hj9x",
    flag: "🇸🇦🇺🇸"
  },
  {
    name: "Inglés — Pyсский",
    description: "Sumérgete en un entorno lingüístico diverso con hablantes de ruso e inglés en este grupo de intercambio de idiomas.",
    link: "https://chat.whatsapp.com/CGmjCn9z94p4O6IraY5pvL",
    flag: "🇷🇺🇺🇸"
  },
  {
    name: "Türkçe Ve İngilizce",
    description: "Conéctate con otros estudiantes en un grupo que acomoda tanto el turco como el inglés para una experiencia de intercambio de idiomas enriquecedora.",
    link: "https://chat.whatsapp.com/LRDFFg2GR6B7rekwAo3mCS",
    flag: "🇹🇷🇺🇸"
  },
  {
    name: "Japonés(日本語)-Inglés(英語)",
    description: "Únete a este grupo para practicar japonés e inglés en un ambiente divertido y de apoyo.",
    link: "https://chat.whatsapp.com/BiCkJLiwf1y8SBXoKJlc5J",
    flag: "🇯🇵🇺🇸"
  },
  {
    name: "Tailandés ไทย I Inglés",
    description: "Aprende tailandés e inglés de hablantes nativos en este grupo amigable e interactivo de intercambio de idiomas.",
    link: "https://chat.whatsapp.com/Je7gDVaz6tS28AwTvPuZoM",
    flag: "🇹🇭🇺🇸"
  },
  {
    name: "Inglés - Francés",
    description: "Únete a este grupo para mejorar tus habilidades en inglés y francés.",
    link: "https://chat.whatsapp.com/EQlwGRxgDjeJwo78SgQUkD",
    flag: "🇫🇷🇺🇸"
  }
];

export const metadata: Metadata = {
  title: 'Grupos Gratuitos de WhatsApp en Inglés | Aprende Inglés en WhatsApp - Estudiantes Hispanos',
  keywords: 'grupos de WhatsApp en inglés, aprender inglés online gratis, intercambio de idiomas inglés español, enlaces de grupos de WhatsApp en inglés, practicar inglés en WhatsApp gratis, grupos gratuitos de WhatsApp en inglés, grupos de conversación en inglés WhatsApp, grupos de aprendizaje de inglés WhatsApp, enlaces de grupos de WhatsApp en inglés, aprender inglés grupos WhatsApp, grupos de chat en inglés WhatsApp, aprender inglés WhatsApp, inglés WhatsApp, grupos de chat en inglés, práctica de inglés grupos WhatsApp, grupos de conversación en inglés WhatsApp, intercambio de idiomas WhatsApp inglés, grupos de práctica de inglés, comunidad de aprendizaje de inglés WhatsApp, grupos de estudio de inglés WhatsApp, práctica de comunicación en inglés, grupos de fluidez en inglés WhatsApp, práctica de proficiencia en inglés, estudiantes hispanos de inglés, comunidad de aprendizaje de inglés hispana, práctica de inglés hablantes hispanos, conversación en inglés WhatsApp hispana, estudiantes hispanos de idioma inglés, grupos de habla inglesa hispana, aprendizaje de inglés WhatsApp hispano, comunidad de práctica de inglés hispana',
  description: 'Únete a grupos gratuitos de WhatsApp en inglés para estudiantes hispanos. Aprende y practica inglés con hablantes nativos y otros estudiantes. Mejora tu habla, escritura y comprensión auditiva a través de conversaciones reales. Gratis y abierto para todos los hispanos que quieren aprender inglés.',
  robots: 'index, follow',
  openGraph: {
    title: 'Grupos Gratuitos de WhatsApp en Inglés | Aprende Inglés - Estudiantes Hispanos',
    description: 'Únete a grupos gratuitos de WhatsApp en inglés para estudiantes hispanos. Practica inglés con hablantes nativos y otros estudiantes de todo el mundo. Gratis y abierto para todos los hispanos que quieren mejorar su inglés.',
    url: 'https://www.sofuf.com/resources/whatsapp/grupos-whatsapp-ingles',
    images: [{ url: 'https://www.sofuf.com/ewg-blog.png', alt: 'Grupos Gratuitos de WhatsApp en Inglés para Estudiantes Hispanos' }],
    type: 'website',
    locale: 'es_ES',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grupos Gratuitos de WhatsApp en Inglés | Aprende Inglés - Estudiantes Hispanos',
    description: 'Únete a grupos gratuitos de WhatsApp en inglés para estudiantes hispanos. Practica inglés con hablantes nativos y otros estudiantes de todo el mundo.',
    images: ['https://www.sofuf.com/ewg-blog.png'],
  },
  alternates: {
    canonical: 'https://www.sofuf.com/resources/whatsapp/grupos-whatsapp-ingles',
  },
  other: {
    'geo.region': 'ES',
    'geo.placename': 'Spain',
    'language': 'es',
  },
};

export default function WhatsApp() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Grupos Gratuitos de WhatsApp en Inglés para Estudiantes Hispanos",
    "description": "Únete a grupos gratuitos de WhatsApp en inglés para estudiantes hispanos. Aprende y practica inglés con hablantes nativos y otros estudiantes.",
    "url": "https://www.sofuf.com/resources/whatsapp/grupos-whatsapp-ingles",
    "mainEntity": {
      "@type": "ItemList",
      "name": "Grupos de WhatsApp en Inglés para Estudiantes Hispanos",
      "description": "Colección de grupos gratuitos de WhatsApp en inglés para estudiantes hispanos para practicar y mejorar sus habilidades en inglés",
      "numberOfItems": englishGroups.length + langGroups.length,
      "itemListElement": [
        ...englishGroups.map((group, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": "Organization",
            "name": group.name,
            "url": group.link,
            "description": `Grupo de WhatsApp en inglés para estudiantes hispanos con ${group.members} miembros`
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
    "inLanguage": ["es", "en"],
    "audience": {
      "@type": "Audience",
      "audienceType": "Estudiantes Hispanos de Inglés"
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
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20">
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 px-6 py-3 rounded-full mb-8 shadow-lg">
              <span className="text-3xl">📱</span>
              <span className="text-lg font-semibold text-blue-700 dark:text-blue-300">Grupos de Aprendizaje de WhatsApp</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-8 leading-tight">
              Grupos Gratuitos de WhatsApp en Inglés
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto mb-10 leading-relaxed">
              Aprende y practica inglés en comunidades activas de WhatsApp. ¡Únete a miles de estudiantes de todo el mundo!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                as={Link}
                href="https://chat.whatsapp.com/LyczdR1bJWGErr6ArcSBSx"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold px-10 py-4 text-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-full"
                size="lg"
              >
                🚀 Únete Ahora - ¡Gratis!
              </Button>
              <Button 
                as={Link}
                href="#grupos"
                className="bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 font-semibold px-8 py-4 text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 rounded-full border-2 border-blue-200 dark:border-blue-700"
                size="lg"
                variant="bordered"
              >
                📋 Ver Todos los Grupos
              </Button>
            </div>
          </div>

          {/* Main Content Card */}
          <Card className="shadow-2xl border-0 mb-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
            <CardBody className="p-8 md:p-12">
              <article className="max-w-6xl mx-auto">
                {/* Author Info */}
                <div className="flex items-center gap-4 mb-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    O
                  </div>
                  <div>
                    <p className="font-bold text-lg">Autor: Odat</p>
                    <p className="text-sm text-gray-500">Actualizado recientemente</p>
                  </div>
                </div>

                {/* Introduction */}
                <div className="prose prose-lg max-w-none mb-12">
                  <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300">
                    ¡Bienvenido a nuestros <span className="font-bold text-blue-600">Grupos Gratuitos de Aprendizaje de Inglés en WhatsApp para Estudiantes Hispanos</span>! 
                    WhatsApp Messenger es una aplicación de mensajería instantánea ampliamente utilizada que permite 
                    enviar mensajes de texto y voz, realizar videollamadas y compartir medios. Es excelente para 
                    practicar inglés, especialmente para hispanos que quieren mejorar sus habilidades en inglés.
                  </p>
                  <p className="text-xl leading-relaxed mt-6 text-gray-700 dark:text-gray-300">
                    En nuestros grupos, encontrarás otros estudiantes hispanos y hablantes nativos de inglés dispuestos 
                    a ayudarte en tu aprendizaje. Todos los grupos son gratuitos y están abiertos para todos los niveles, 
                    desde principiantes hasta avanzados.
                  </p>
                </div>

                {/* How It Works Section */}
                <Card className="mb-12 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-0 shadow-xl">
                  <CardBody className="p-8 md:p-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      🎯 Cómo Funciona
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                      <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                        <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mb-4">✍️</div>
                        <h3 className="font-bold text-xl mb-3">Práctica de Escritura</h3>
                        <p className="text-gray-600 dark:text-gray-300">Mejora tu escritura enviando mensajes en el grupo.</p>
                      </div>
                      <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mb-4">👁️</div>
                        <h3 className="font-bold text-xl mb-3">Práctica de Lectura</h3>
                        <p className="text-gray-600 dark:text-gray-300">Expande tu capacidad de lectura con mensajes de otros.</p>
                      </div>
                      <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                        <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mb-4">🎤</div>
                        <h3 className="font-bold text-xl mb-3">Práctica de Habla</h3>
                        <p className="text-gray-600 dark:text-gray-300">Graba notas de voz y envíalas para practicar el habla.</p>
                      </div>
                      <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                        <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mb-4">👂</div>
                        <h3 className="font-bold text-xl mb-3">Práctica de Escucha</h3>
                        <p className="text-gray-600 dark:text-gray-300">Escucha notas de voz de otros miembros para mejorar tu comprensión.</p>
                      </div>
                    </div>
                  </CardBody>
                </Card>

                {/* Before Joining Section */}
                <Card className="mb-12 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-400">
                  <CardBody className="p-8">
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                      ⚠️ Antes de Unirte:
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <ol className="space-y-4">
                        <li className="flex items-start gap-4">
                          <span className="flex-shrink-0 w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                          <span className="text-gray-700 dark:text-gray-300">Asegúrate de tener conocimientos básicos del idioma inglés.</span>
                        </li>
                        <li className="flex items-start gap-4">
                          <span className="flex-shrink-0 w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                          <span className="text-gray-700 dark:text-gray-300">Desactiva las descargas automáticas de medios en WhatsApp (<em>Configuración {">"} Datos y almacenamiento {">"} Desactivar todas las descargas</em>).</span>
                        </li>
                      </ol>
                      <ol className="space-y-4" start={3}>
                        <li className="flex items-start gap-4">
                          <span className="flex-shrink-0 w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                          <span className="text-gray-700 dark:text-gray-300">Silencia el grupo inmediatamente al unirte.</span>
                        </li>
                        <li className="flex items-start gap-4">
                          <span className="flex-shrink-0 w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                          <span className="text-gray-700 dark:text-gray-300">Lee y entiende las reglas del grupo en la descripción.</span>
                        </li>
                      </ol>
                    </div>
                  </CardBody>
                </Card>

                {/* English Groups Section */}
                <div id="grupos" className="mb-12">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    🇺🇸 Grupos Gratuitos de WhatsApp en Inglés para Estudiantes Hispanos
                  </h2>
                  <p className="text-center text-gray-600 dark:text-gray-300 mb-10 text-lg">
                    Para unirte, simplemente haz clic en el enlace de cada grupo. Si no tienes WhatsApp, 
                    <Link href="https://www.whatsapp.com/download" target="_blank" className="text-blue-500 font-semibold"> descárgalo aquí.</Link>
                  </p>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {englishGroups.map((group, index) => (
                      <Card key={index} className="hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
                        <CardBody className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="font-bold text-lg text-gray-800 dark:text-gray-200">{group.name}</h3>
                            {group.special && (
                              <Chip color="secondary" size="sm" className="font-semibold">{group.special}</Chip>
                            )}
                          </div>
                          <div className="flex items-center gap-2 mb-6">
                            <Chip color="success" variant="flat" size="sm" className="font-semibold">
                              👥 {group.members}
                            </Chip>
                            <Chip color="primary" variant="flat" size="sm" className="font-semibold">
                              🌐 {group.language}
                            </Chip>
                          </div>
                          <Button
                            as={Link}
                            href={group.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                            variant="solid"
                            size="lg"
                          >
                            Únete al Grupo 🚀
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
                      alt="Únete a Grupos Gratuitos de WhatsApp en Inglés para Estudiantes Hispanos"
                      className="object-cover rounded-2xl shadow-2xl"
                      src="/ewg-blog.png"
                      width={500}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                  </div>
                </div>

                {/* Language Exchange Groups */}
                <div className="mb-12">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    🌍 Grupos de Intercambio de Idiomas
                  </h2>
                  <p className="text-center text-gray-600 dark:text-gray-300 mb-10 text-lg">
                    Mejora tu inglés en comunidades bilingües
                  </p>
                  <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
                    {langGroups.map((group, index) => (
                      <Card key={index} className="hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
                        <CardBody className="p-8">
                          <div className="flex items-center gap-4 mb-6">
                            <span className="text-3xl">{group.flag}</span>
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">{group.name}</h3>
                          </div>
                          <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed">
                            {group.description}
                          </p>
                          <Button
                            as={Link}
                            href={group.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                            variant="solid"
                            size="lg"
                          >
                            Únete al Grupo de Intercambio 🔄
                          </Button>
                        </CardBody>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* FAQ Section for SEO */}
                <Card className="mb-12 bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 border-0 shadow-xl">
                  <CardBody className="p-8 md:p-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                      ❓ Preguntas Frecuentes (FAQ)
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
                        <h3 className="font-bold text-xl mb-4 text-gray-800 dark:text-gray-200">¿Son gratuitos los grupos de WhatsApp en inglés?</h3>
                        <p className="text-gray-600 dark:text-gray-300">Sí, todos los grupos son completamente gratuitos. No hay costo para unirse y practicar inglés.</p>
                      </div>
                      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
                        <h3 className="font-bold text-xl mb-4 text-gray-800 dark:text-gray-200">¿Para qué sirven estos grupos de WhatsApp en inglés?</h3>
                        <p className="text-gray-600 dark:text-gray-300">Para hispanos que quieren aprender y practicar inglés con hablantes nativos y otros estudiantes.</p>
                      </div>
                      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
                        <h3 className="font-bold text-xl mb-4 text-gray-800 dark:text-gray-200">¿Necesito un nivel avanzado de inglés?</h3>
                        <p className="text-gray-600 dark:text-gray-300">No, los grupos están abiertos para todos los niveles, desde principiantes hasta avanzados.</p>
                      </div>
                      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
                        <h3 className="font-bold text-xl mb-4 text-gray-800 dark:text-gray-200">¿Cómo me uno a los grupos de WhatsApp en inglés?</h3>
                        <p className="text-gray-600 dark:text-gray-300">Simplemente haz clic en el enlace del grupo que quieras unirte. Se unirás automáticamente al grupo.</p>
                      </div>
                      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
                        <h3 className="font-bold text-xl mb-4 text-gray-800 dark:text-gray-200">¿Hay hispanos en los grupos?</h3>
                        <p className="text-gray-600 dark:text-gray-300">Sí, muchos estudiantes hispanos se unen a los grupos para practicar inglés con estudiantes internacionales.</p>
                      </div>
                      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
                        <h3 className="font-bold text-xl mb-4 text-gray-800 dark:text-gray-200">¿Puedo practicar todos los días?</h3>
                        <p className="text-gray-600 dark:text-gray-300">¡Absolutamente! Los grupos están activos 24/7 y puedes practicar cuando quieras.</p>
                      </div>
                    </div>
                  </CardBody>
                </Card>

                {/* Telegram Section */}
                <Card className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 border-0 shadow-xl">
                  <CardBody className="p-8 md:p-10 text-center">
                    <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">📱 Grupo de Telegram en Inglés</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed max-w-3xl mx-auto">
                      Para aquellos sin WhatsApp, también ofrecemos un grupo de Telegram en inglés para práctica de idiomas.
                      Únete a la conversación y mejora tus habilidades en inglés en una comunidad de apoyo.
                    </p>
                    <Button
                      as={Link}
                      href="https://t.me/theEnglishTelegram"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold px-10 py-4 text-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 rounded-full"
                      size="lg"
                    >
                      Únete a Telegram 💬
                    </Button>
                  </CardBody>
                </Card>
              </article>
            </CardBody>
          </Card>

          <CommentSection postID={"grupos-whatsapp-ingles"} />
        </div>
      </div>
    </>
  );
} 