import React from "react";
import { Card, CardBody, Spacer, Link, Code, Image } from "@nextui-org/react";
import type { Metadata } from 'next';
import CommentSection from "@/components/commentSection";
import AdComponent from "@/components/AdComponent";

const arabicGroups = [
  { name: 'Арабский WhatsApp-групповой чат', link: 'https://chat.whatsapp.com/GC59qnSlRtf9tC4NjqUuYY', language: 'Арабский' },
  { name: 'Группа "Английский и арабский язык"', link: 'https://chat.whatsapp.com/HeBS7UaTuH2HtSDMl9hj9x', language: 'Английский и арабский' }
];

const telegramGroups = [
  { name: 'Арабская Telegram-группа', link: 'https://t.me/ArabicDiscussionGroup' },
  { name: 'Канал с упражнениями по арабскому языку', link: 'https://t.me/ArabicExercises' }
];

export const metadata: Metadata = {
  title: 'Присоединяйтесь к арабским WhatsApp-группам | Изучайте арабский язык в ВатсАпп',
  keywords: 'Арабский WhatsApp-групповой чат, изучение арабского онлайн, языковой обмен, арабский язык WhatsApp, практиковать арабский язык в WhatsApp, бесплатные группы WhatsApp для изучения арабского',
  description: 'Присоединяйтесь к бесплатным арабским WhatsApp-группам, чтобы изучать арабский язык и улучшать свои навыки общения. Найдите идеальную группу для языкового обмена!',
  robots: 'index, follow',
  openGraph: {
    title: 'Присоединяйтесь к бесплатным арабским WhatsApp-группам | Практикуйте и изучайте арабский онлайн',
    description: 'Общайтесь с изучающими арабский со всего мира. Присоединяйтесь к нашим бесплатным WhatsApp-группам для изучения арабского языка.',
    url: 'https://www.sofuf.com/resources/whatsapp/arabic-whatsapp-group',
    images: [{ url: 'https://www.sofuf.com/arabic_whatsapp_group.webp', alt: 'Арабский WhatsApp-групповой чат 2024' }],
},
};

export default function ArabicWhatsAppGroups() {
  return (
    <div className="w-full">
      <Card>
        <CardBody>
          <article className="w-full">
            <header className="mb-8">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Арабский WhatsApp-групповой чат — Изучайте и практикуйте арабский язык в ВатсАпп</h1>
              <p className="text-sm sm:text-base text-gray-600">2024 - 12 - 16 / Автор: Odat</p>
            </header>
            <div className="mb-8">
              <p className="text-base sm:text-lg">
                Добро пожаловать в <span className="font-bold">арабские группы WhatsApp (ВатсАпп)</span>! WhatsApp — это приложение для обмена мгновенными сообщениями, которое позволяет отправлять текстовые и голосовые сообщения, а также делиться медиафайлами. Это удобный инструмент для практики арабского языка.
              </p>
            </div>
            <div className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-4">Как работает группа:</h2>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><span className="font-semibold">Практика письма:</span> Оттачивайте свои навыки письма, отправляя сообщения в группу.</li>
                <li><span className="font-semibold">Практика чтения:</span> Улучшайте свои навыки чтения, просматривая сообщения от других участников группы.</li>
                <li><span className="font-semibold">Практика устной речи:</span> Записывайте голосовые сообщения и отправляйте их в группу, чтобы развивать устные навыки.</li>
                <li><span className="font-semibold">Практика восприятия на слух:</span> Развивайте навыки слушания, прослушивая голосовые сообщения от участников группы.</li>
              </ul>
              <Card>
                <CardBody>
                  <h4 className="font-semibold mb-2">Перед тем, как присоединиться:</h4>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>Убедитесь, что у вас есть базовые знания арабского языка.</li>
                    <li>Отключите автоматическую загрузку медиафайлов в WhatsApp (<span className="italic">Настройки {">"} Использование данных и хранилища {">"} Отключить все загрузки</span>).</li>
                    <li>Сразу после вступления отключите уведомления от группы.</li>
                    <li>Ознакомьтесь с правилами группы, указанными в описании.</li>
                  </ol>
                </CardBody>
              </Card>
            </div>
            <div className="mb-8">
              <h3 className="text-lg sm:text-xl font-semibold mb-4">Присоединяйтесь к нашим WhatsApp-группам для изучения арабского языка:</h3>
              <p className="mb-4">
                Чтобы вступить, просто нажмите на ссылку рядом с названием группы. Если у вас еще нет приложения WhatsApp, <Link href="https://www.whatsapp.com/download" target="_blank" rel="noopener noreferrer" color="primary">скачайте его здесь</Link>.
              </p>
              <h2 className="text-xl sm:text-2xl font-bold mb-4">Ссылки на группы WhatsApp:</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {arabicGroups.map((group, index) => (
                  <Card key={index}>
                    <CardBody>
                      <h4 className="font-semibold mb-2">{group.name}</h4>
                      <p className="text-sm text-gray-600 mb-2">{group.language}</p>
                      <Code className="w-full overflow-x-auto">
                        <Link href={group.link} target="_blank" rel="noopener noreferrer" color="primary" className="break-all">
                          {group.link}
                        </Link>
                      </Code>
                    </CardBody>
                  </Card>
                ))}
              </div>
            </div>
            <div className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-4">Если вы предпочитаете Telegram:</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {telegramGroups.map((group, index) => (
                  <Card key={index}>
                    <CardBody>
                      <h4 className="font-semibold mb-2">{group.name}</h4>
                      <Code className="w-full overflow-x-auto">
                        <Link href={group.link} target="_blank" rel="noopener noreferrer" color="primary" className="break-all">
                          {group.link}
                        </Link>
                      </Code>
                    </CardBody>
                  </Card>
                ))}
              </div>
            </div>
            <div className="flex justify-center mb-8">
              <Image
                alt="Присоединяйтесь к арабским WhatsApp-группам"
                src="https://www.sofuf.com/arabic_whatsapp_group.webp"
                width={300}
                height={300}
              />
            </div>
          </article>
        </CardBody>
      </Card>
      <Spacer y={1} />
      <AdComponent />
      <CommentSection postID={"arabic-whatsapp-group"} />
    </div>
  );
}

