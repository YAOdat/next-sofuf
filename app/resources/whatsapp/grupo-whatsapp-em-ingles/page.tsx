import React from "react";
import { Card, CardBody, Spacer, Link, Code, Image } from "@heroui/react";
import type { Metadata } from 'next';
import CommentSection from "@/components/commentSection";

const portugueseGroups = [
  { name: 'Grupo de Inglês 1', link: 'https://chat.whatsapp.com/LyczdR1bJWGErr6ArcSBSx', language: 'Inglês' },
  { name: 'Grupo de Inglês 2', link: 'https://chat.whatsapp.com/L6BzyM6siWzCvwlFINGhUN', language: 'Inglês' },
  { name: 'Grupo de Inglês 3', link: 'https://chat.whatsapp.com/FMOdmLdsbRQCOUDPsvGoyf', language: 'Inglês' },
  { name: 'Grupo de Inglês 5', link: 'https://chat.whatsapp.com/CAL43yKsm919DnmmtdGVNT', language: 'Inglês' },
  { name: 'Grupo de Áudio', link: 'https://chat.whatsapp.com/DNAiOzxCkAVCsDA2oNnlJd', language: 'Inglês' },
  { name: 'Grupo Inglês-Português', link: 'https://chat.whatsapp.com/HeBS7UaTuH2HtSDMl9hj9x', language: 'InglêsPortuguês' }
];

export const metadata: Metadata = {
  title: 'Grupos de Inglês no WhatsApp | Pratique Inglês Online',
  keywords: 'grupo de inglês no WhatsApp, aprender inglês online, troca de idiomas, link do grupo de inglês no WhatsApp, prática de inglês no WhatsApp, grupos gratuitos de inglês 2024, conversação em inglês no WhatsApp, como aprender inglês no WhatsApp',
  description: 'Entre nos grupos gratuitos de inglês no WhatsApp para praticar e aprender inglês com falantes nativos. Melhore suas habilidades de conversação, escrita e escuta em um ambiente real. Encontre seu grupo ideal para estudar inglês agora!',
  robots: 'index, follow',
  openGraph: {
    title: 'Entre nos grupos gratuitos de inglês no WhatsApp | Aprenda e pratique inglês online',
    description: 'Conecte-se com aprendizes de inglês de todo o mundo. Participe de nossos grupos gratuitos no WhatsApp para melhorar suas habilidades linguísticas por meio de conversas reais.',
    url: 'https://www.sofuf.com/resources/whatsapp/portuguese-whatsapp-group',
    images: [{ url: 'https://www.sofuf.com/ewg-blog.png', alt: 'Link para grupo de inglês no WhatsApp 2024' }],
  },
};

export default function WhatsAppPortuguese() {
  return (
    <div className="container mx-auto mt-8">
      <Card>
        <CardBody>
          <article className="max-w-full md:max-w-3xl lg:max-w-4xl mx-auto">
            <header>
              <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">Grupos de Inglês no WhatsApp — Aprenda e Pratique Inglês</h1>
              <p className="text-xs md:text-sm font-thin mb-4">2024 - 12 - 21 / Autor: Sofuf</p>
            </header>
            <div className="mb-4">
              <p className="md:text-base">
                Bem-vindo aos nossos <span className="font-bold">grupos de estudo de inglês no WhatsApp</span>! O WhatsApp é uma plataforma versátil que permite a troca de mensagens, áudios, chamadas e muito mais. Usar esta ferramenta para praticar inglês tem se mostrado extremamente eficiente.
              </p>
              <Link className="font-bold mt-4" href='https://chat.whatsapp.com/LyczdR1bJWGErr6ArcSBSx' style={{ color: 'cyan' }} isExternal rel="noopener noreferrer">Clique aqui para participar</Link>
            </div>
            <div className="mb-4">
              <p className="md:text-base">
                Grupos de WhatsApp para prática de inglês oferecem uma maneira divertida e interativa de melhorar suas habilidades no idioma. Seja você iniciante ou avançado, esses grupos conectam aprendizes e falantes nativos para conversas reais. Participe para explorar novos vocabulários, melhorar a fluência e até mesmo fazer amigos internacionais enquanto aprende.
              </p>
            </div>
            <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">Como Funciona:</h2>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2"><span className="font-bold">Prática de Escrita:</span> Melhore sua escrita enviando mensagens no grupo.</li>
              <li className="mb-2"><span className="font-bold">Prática de Leitura:</span> Leia as mensagens de outros participantes e aumente sua compreensão.</li>
              <li className="mb-2"><span className="font-bold">Prática de Conversação:</span> Grave e envie mensagens de áudio para aprimorar sua fluência.</li>
              <li><span className="font-bold">Prática de Escuta:</span> Ouça mensagens de áudio de outros membros para melhorar sua compreensão oral.</li>
            </ul>
            <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">Links dos Grupos no WhatsApp:</h2>
            <ul className="list-disc pl-6 mb-4">
              {portugueseGroups.map((group, index) => (
                <li key={index} className="mb-2">
                  {group.name}:<br />
                  <Code className="text-blue-500 break-words bg-cyan-900"><Link href={group.link} target="_blank" rel="noopener noreferrer">{group.link}</Link></Code>
                </li>
              ))}
            </ul>
            <div className="mb-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Image
                alt="Entre nos grupos de inglês no WhatsApp 2024"
                className="object-cover rounded-xl"
                src="/whatsappgroups.png"
                width={300}
                loading="lazy"
              />
            </div>
            <CommentSection postID={"por-ingles-group"} />
          </article>
        </CardBody>
      </Card>
    </div>
  );
}
