import React from "react";
import { Card, CardBody, Spacer, Link, Code, Image } from "@nextui-org/react";
import type { Metadata } from 'next';
import CommentSection from "@/components/commentSection";

const englishGroups = [
  { name: 'Английская группа 1', link: 'https://chat.whatsapp.com/LyczdR1bJWGErr6ArcSBSx', language: 'English' },
  { name: 'Английская группа 2', link: 'https://chat.whatsapp.com/L6BzyM6siWzCvwlFINGhUN', language: 'English' },
  { name: 'Английская группа 3', link: 'https://chat.whatsapp.com/FMOdmLdsbRQCOUDPsvGoyf', language: 'English' },
  { name: 'Английская группа 4', link: 'https://chat.whatsapp.com/G4yKUNBwA6aAlwOPOUmpi1', language: 'English' },
  { name: 'Группа голосовых сообщений', link: 'https://chat.whatsapp.com/DNAiOzxCkAVCsDA2oNnlJd', language: 'English' },
  { name: 'Англо-арабская группа', link: 'https://chat.whatsapp.com/HeBS7UaTuH2HtSDMl9hj9x', language: 'EnglishArabic' }
];

const langGroups = [
  {
    name: "Арабский | Английский",
    description: "Присоединяйтесь к двуязычному сообществу, где изучающие арабский и английский языки общаются для языкового обмена.",
    link: "https://chat.whatsapp.com/HeBS7UaTuH2HtSDMl9hj9x",
  },
  {
    name: "Английский — Русский",
    description: "Погрузитесь в разнообразную языковую среду с носителями русского и английского языков в этой группе языкового обмена.",
    link: "https://chat.whatsapp.com/CGmjCn9z94p4O6IraY5pvL"
  },
  {
    name: "Турецкий и Английский",
    description: "Общайтесь с другими учащимися в группе, где практикуют турецкий и английский языки для обогащающего языкового обмена.",
    link: "https://chat.whatsapp.com/LRDFFg2GR6B7rekwAo3mCS"
  },
  {
    name: "Японский(日本語)-Английский(英語)",
    description: "Присоединяйтесь к этой группе, чтобы практиковать японский и английский языки в веселой и дружественной атмосфере.",
    link: "https://chat.whatsapp.com/BiCkJLiwf1y8SBXoKJlc5J"
  },
  {
    name: "Тайский ไทย I Английский",
    description: "Изучайте тайский и английский языки с носителями языка в этой дружелюбной интерактивной группе языкового обмена.",
    link: "https://chat.whatsapp.com/Je7gDVaz6tS28AwTvPuZoM"
  },
  {
    name: "Английский - Французский",
    description: "Присоединяйтесь к этой группе, чтобы улучшить свои навыки английского и французского языков.",
    link: "https://chat.whatsapp.com/EQlwGRxgDjeJwo78SgQUkD"
  }
];

export const metadata: Metadata = {
  title: 'Присоединяйтесь к группам английского языка в Ватсап | Изучайте английский в Ватсап',
  keywords: 'группа английского языка ватсап, изучение английского онлайн, языковой обмен, ссылка на группу английского в ватсап, практика английского в ватсап, бесплатные группы английского ватсап 2024, разговорный английский ватсап группа',
  description: 'Присоединяйтесь к бесплатным группам английского языка в Ватсап для практики и изучения английского с носителями языка. Улучшайте навыки разговорной речи, письма и аудирования через реальные разговоры. Найдите свою идеальную группу для изучения английского языка прямо сейчас!',
  robots: 'index, follow',
  openGraph: {
    title: 'Присоединяйтесь к бесплатным группам английского языка в Ватсап | Практикуйте и изучайте английский онлайн',
    description: 'Общайтесь с изучающими английский язык по всему миру. Присоединяйтесь к нашим бесплатным группам в Ватсап для улучшения ваших навыков английского через реальные разговоры.',
    url: 'https://www.sofuf.com/resources/whatsapp/english-whatsapp-group',
    images: [{ url: 'https://www.sofuf.com/ewg-blog.png', alt: 'Ссылка на группу английского языка в Ватсап 2024' }],
  },
};

export default function WhatsApp() {
  return (
    <div className="container mx-auto mt-8">
      <Card>
        <CardBody>
          <article className="max-w-full md:max-w-3xl lg:max-w-4xl mx-auto">
            <header>
              <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">Группы английского языка в Ватсап — Изучайте и практикуйте английский в Ватсап</h1>
              <p className="text-xs md:text-sm font-thin mb-4">2024 - 12 - 21 / Автор: Одат</p>
            </header>
            <div className="mb-4">
              <p className="md:text-base">
                Добро пожаловать в наши <span className="font-bold">группы по изучению английского языка в Ватсап</span>! Ватсап, универсальное приложение для обмена мгновенными сообщениями, позволяет пользователям обмениваться текстовыми и голосовыми сообщениями, совершать голосовые и видеозвонки, а также делиться различными медиафайлами, включая изображения, документы и местоположение. Как я убедился на личном опыте, использование этой платформы для практики английского языка оказалось очень эффективным.
              </p>
              <Link className="font-bold mt-4" href='https://chat.whatsapp.com/LyczdR1bJWGErr6ArcSBSx' style={{ color: 'cyan' }} isExternal rel="noopener noreferrer">Нажмите здесь, чтобы присоединиться</Link>
            </div>
            <div className="max-w-full md:max-w-3xl lg:max-w-4xl mx-auto mb-8">
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">Как это работает:</h2>
              <ul className="list-disc pl-6 mb-4">
                <li className="mb-2"><span className="font-bold">Практика письма:</span> Улучшайте навыки письма, составляя и отправляя сообщения в группе.</li>
                <li className="mb-2"><span className="font-bold">Практика чтения:</span> Развивайте навыки чтения, читая сообщения других участников группы.</li>
                <li className="mb-2"><span className="font-bold">Практика разговорной речи:</span> Записывайте и отправляйте голосовые сообщения для тренировки разговорного английского.</li>
                <li><span className="font-bold">Практика аудирования:</span> Развивайте навыки восприятия речи на слух, слушая голосовые сообщения других участников группы.</li>
              </ul>
              <h4 className="font-semibold mb-2">Перед вступлением в группу:</h4>
              <ol className="list-decimal pl-6 mb-4">
                <li className="mb-2">Убедитесь, что у вас есть базовое понимание английского языка.</li>
                <li className="mb-2">Отключите автоматическую загрузку медиафайлов в Ватсап (<span className="italic">Настройки {">"} Использование данных и хранилища {">"} Отключить все загрузки</span>).</li>
                <li className="mb-2">Сразу после присоединения отключите уведомления группы.</li>
                <li>Ознакомьтесь с правилами группы, указанными в описании.</li>
              </ol>
              <h3 className="text-lg font-semibold mb-2">Присоединяйтесь к нашим группам изучения английского языка в Ватсап:</h3>
              <p className="mb-4">Чтобы присоединиться, просто нажмите на ссылку рядом с каждой группой. Если у вас не установлен Ватсап, <a target="_blank" href="https://www.whatsapp.com/download" className="text-blue-500">скачайте его здесь</a>.</p>
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">Ссылки на группы в Ватсап:</h2>
              <div className="mb-4">
                <div className="flex flex-wrap mb-4">
                  <ul className="list-disc pl-6 mb-4">
                    {englishGroups.map((group, index) => (
                      <li key={index} className="mb-2">
                        {group.name}:<br></br><Code className="text-blue-500 break-words bg-cyan-900" ><Link href={group.link} className="responsiveLinkSize" target="_blank" rel="noopener noreferrer">{group.link}</Link>
                        </Code>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="mb-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Image
                alt="Присоединяйтесь к бесплатным группам английского языка в Ватсап 2024"
                className="object-cover rounded-xl"
                src="/ewg-blog.png"
                width={300}
                loading="lazy"
              />
            </div>

            <div className="max-w-full md:max-w-2xl mx-auto">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">Улучшайте свой английский с группами языкового обмена</h3>

              {langGroups.map((group, index) => (
                <div key={index} className="mb-8">
                  <h3 className="mb-4">Присоединяйтесь к нашему двуязычному сообществу для языкового обмена:</h3>
                  <h4 className="text-lg md:text-xl lg:text-2xl font-bold mb-2">Группа {group.name} в Ватсап:</h4>
                  <div className="mb-2">
                    <li key={index} className="mb-2">
                      {group.name}:<br />{group.description}<Code className="text-blue-500 break-words bg-cyan-900 mt-4" ><Link className="responsiveLinkSize" href={group.link} target="_blank" rel="noopener noreferrer">{group.link}</Link>
                      </Code>
                    </li>
                  </div>
                </div>
              ))}

              <p className="mb-8">
                Для тех, у кого нет Ватсап, мы также предлагаем группу английского языка в Телеграм для языковой практики.
                Присоединяйтесь к общению и улучшайте свои навыки английского языка в поддерживающем сообществе.
              </p>

              Группа английского языка в Телеграм:<br /><Code className="text-blue-500 break-words bg-cyan-900 mt-4" ><Link href="https://t.me/theEnglishTelegram" style={{ fontSize: '12px', color: 'cyan' }} target="_blank" rel="noopener noreferrer">https://t.me/theEnglishTelegram</Link>
              </Code>
            </div>

          </article>
        </CardBody>
      </Card>

      <Spacer y={1} />
      <CommentSection postID={"whatsapp-group-ruski"} />
    </div>
  );
}