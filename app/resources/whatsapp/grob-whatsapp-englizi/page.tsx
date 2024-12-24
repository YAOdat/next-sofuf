import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from 'next';
import CommentSection from "@/components/commentSection";

const englishGroups = [
  { name: 'المجموعة الإنجليزية 1', link: 'https://chat.whatsapp.com/LyczdR1bJWGErr6ArcSBSx', language: 'English' },
  { name: 'المجموعة الإنجليزية 2', link: 'https://chat.whatsapp.com/L6BzyM6siWzCvwlFINGhUN', language: 'English' },
  { name: 'المجموعة الإنجليزية 3', link: 'https://chat.whatsapp.com/FMOdmLdsbRQCOUDPsvGoyf', language: 'English' },
  { name: 'المجموعة الإنجليزية 4', link: 'https://chat.whatsapp.com/G4yKUNBwA6aAlwOPOUmpi1', language: 'English' },
  { name: 'مجموعة المحادثة الصوتية', link: 'https://chat.whatsapp.com/DNAiOzxCkAVCsDA2oNnlJd', language: 'English' },
  { name: 'مجموعة الإنجليزية والعربية', link: 'https://chat.whatsapp.com/HeBS7UaTuH2HtSDMl9hj9x', language: 'EnglishArabic' }
];

const langGroups = [
  {
    name: "العربية | الإنجليزية",
    description: "انضم إلى مجتمعنا ثنائي اللغة حيث يجتمع متعلمو اللغتين العربية والإنجليزية للتبادل اللغوي.",
    link: "https://chat.whatsapp.com/HeBS7UaTuH2HtSDMl9hj9x",
  },
  {
    name: "الإنجليزية — الروسية",
    description: "انغمس في بيئة لغوية متنوعة مع متحدثي اللغتين الروسية والإنجليزية في مجموعة التبادل اللغوي هذه.",
    link: "https://chat.whatsapp.com/CGmjCn9z94p4O6IraY5pvL"
  },
  {
    name: "التركية والإنجليزية",
    description: "تواصل مع زملائك المتعلمين في مجموعة تستوعب اللغتين التركية والإنجليزية لتجربة تبادل لغوي مثرية.",
    link: "https://chat.whatsapp.com/LRDFFg2GR6B7rekwAo3mCS"
  },
  {
    name: "اليابانية-الإنجليزية",
    description: "انضم إلى هذه المجموعة لممارسة اليابانية والإنجليزية في بيئة ممتعة وداعمة.",
    link: "https://chat.whatsapp.com/BiCkJLiwf1y8SBXoKJlc5J"
  },
  {
    name: "التايلاندية | الإنجليزية",
    description: "تعلم التايلاندية والإنجليزية من متحدثين أصليين في مجموعة تبادل لغوي ودية وتفاعلية.",
    link: "https://chat.whatsapp.com/Je7gDVaz6tS28AwTvPuZoM"
  },
  {
    name: "الإنجليزية - الفرنسية",
    description: "انضم إلى هذه المجموعة لتحسين مهاراتك في اللغتين الإنجليزية والفرنسية.",
    link: "https://chat.whatsapp.com/EQlwGRxgDjeJwo78SgQUkD"
  }
];

export const metadata: Metadata = {
  title: 'قروب واتساب لممارسة وتعلم اللغة الإنجليزية',
  keywords: 'مجموعة واتساب إنجليزية, تعلم الإنجليزية اونلاين, تبادل لغوي, رابط مجموعة واتساب إنجليزية, ممارسة الإنجليزية على واتساب, مجموعات واتساب إنجليزية مجانية 2025, قروبات واتساب انجليزي، قروب انقليزي واتساب، قروب انجليزي واتس، جروب انجليزي واتساب، مجموعة واتس انجليزي، تعلم اللغة الإنجليزية على واتساب، قروب واتساب انجليزي, ممارسة اللغة الإنجليزية اونلاين، ممارسة اللغة الإنجليزية على واتساب، قروب واتس انقلش، مجموعة انقلش واتساب، قروب واتساب انقلش، تعلم انقلش واتساب',
  description: 'انضم إلى مجموعات واتساب مجانية لممارسة وتعلم الإنجليزية مع أعضاء من مختلف دول العالم . حسّن مهارات التحدث والكتابة والاستماع من خلال محادثات حقيقية.',
  robots: 'index, follow',
  openGraph: {
    title: 'انضم إلى مجموعات واتساب للغة الإنجليزية | مارس وتعلم الإنجليزية اونلاين',
    description: 'تواصل مع متعلمي الإنجليزية حول العالم. انضم إلى مجموعاتنا على واتساب لتحسين مهاراتك في اللغة الإنجليزية.',
    url: 'https://www.sofuf.com/resources/whatsapp/english-whatsapp-group',
    images: [{ url: 'https://www.sofuf.com/ewg-blog.png', alt: 'روابط مجموعات واتساب إنجليزية 2024' }],
  },
};

export default function WhatsApp() {
  return (
    <div className="container mx-auto mt-8 px-4 text-right" dir="rtl">
      <div className="bg-white dark:bg-black shadow-md rounded-lg overflow-hidden">
        <div className="p-6 dark:text-gray-200">
          <article className="max-w-4xl mx-auto">
            <header className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-gray-100">مجموعة واتساب لممارسة وتعلم اللغة الإنجليزية</h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">2024 - 12 - 24 / الكاتب: عودات</p>
            </header>

            <section className="mb-8">
              <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
              مرحباً بكم في <span className="font-bold">مجموعات تعلم الإنجليزية على واتساب</span>! يعد تطبيق واتساب للرسائل الفورية منصة متعددة الاستخدامات تمكن المستخدمين من تبادل الرسائل النصية والصوتية، وإجراء المكالمات الصوتية والفيديو، ومشاركة مختلف أنواع الوسائط، بما في ذلك الصور والمستندات ومواقع المستخدمين. لقد اكتشفت شخصياً أن استخدام الواتساب يساعد كثيرًا على تحسين اللغة الإنجليزية وذلك من خلال الممارسة.              </p>
              <Link
                href='https://chat.whatsapp.com/LyczdR1bJWGErr6ArcSBSx'
                className="inline-block bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                اضغط هنا للانضمام
              </Link>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">كيف تعمل المجموعة:</h2>
              <ul className="list-disc pr-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li><span className="font-bold">ممارسة الكتابة:</span> طور مهارات الكتابة لديك من خلال كتابة وإرسال الرسائل داخل المجموعة.</li>
                <li><span className="font-bold">ممارسة القراءة:</span> حسّن كفاءتك في القراءة من خلال قراءة الرسائل التي يكتبها أعضاء المجموعة الآخرون.</li>
                <li><span className="font-bold">ممارسة التحدث:</span> سجل وأرسل ملاحظات صوتية لتمرين لغتك الإنجليزية المنطوقة.</li>
                <li><span className="font-bold">ممارسة الاستماع:</span> طور مهارات الاستماع لديك من خلال الاستماع بعناية إلى الملاحظات الصوتية من أعضاء المجموعة الآخرين.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h4 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">قبل الانضمام:</h4>
              <ol className="list-decimal pr-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>تأكد أنك تعرف أساسيات اللغة الإنجليزية على الأقل.</li>
                <li>قم بتعطيل التنزيل التلقائي للوسائط على واتساب (<span className="italic">الإعدادات {">"} استخدام البيانات والتخزين {">"} إيقاف جميع التنزيلات</span>).</li>
                <li>قم بكتم إشعارات المجموعة فور انضمامك.</li>
                <li>تعرف على قواعد المجموعة الموضحة في وصف المجموعة.</li>
              </ol>
            </section>

            <section className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">كيفية الانضمام إلى مجموعاتنا لتعلم الإنجليزية:</h3>
              <p className="mb-4 text-gray-700 dark:text-gray-300">للانضمام، ما عليك سوى النقر على الرابط بجانب كل مجموعة. إذا لم يكن لديك واتساب مثبتاً، <a target="_blank" href="https://www.whatsapp.com/download" className="text-blue-500 dark:text-blue-400 hover:underline">قم بتحميله من هنا</a>.</p>

              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">روابط مجموعات واتساب:</h2>
              <ul className="space-y-4">
                {englishGroups.map((group, index) => (
                  <li key={index} className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg">
                    <h4 className="font-bold mb-2 text-gray-800 dark:text-gray-100">{group.name}</h4>
                    <div className="bg-gray-200 dark:bg-gray-800 p-2 rounded">
                      <Link
                        href={group.link}
                        className="text-blue-500 dark:text-blue-400 hover:underline break-all"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {group.link}
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            <div className="flex justify-center mb-8">
              <Image
                alt="انضم إلى مجموعات واتساب إنجليزية مجانية 2024"
                className="rounded-xl max-w-full h-auto"
                src="/ewg-blog.png"
                width={300}
                height={200}
              />
            </div>

            <section className="mb-8">
              <h3 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">حسّن لغتك الإنجليزية مع مجموعات التبادل اللغوي</h3>

              {langGroups.map((group, index) => (
                <div key={index} className="mb-6 bg-gray-100 dark:bg-gray-900 p-4 rounded-lg">
                  <h4 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">مجموعة واتساب {group.name}:</h4>
                  <p className="mb-2 text-gray-700 dark:text-gray-300">{group.description}</p>
                  <div className="bg-gray-200 dark:bg-gray-800 p-2 rounded mt-2">
                    <Link
                      href={group.link}
                      className="text-blue-500 dark:text-blue-400 hover:underline break-all"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {group.link}
                    </Link>
                  </div>
                </div>
              ))}

              <p className="mb-4 text-gray-700 dark:text-gray-300">
                للأشخاص الذين لا يستخدمون واتساب، نقدم أيضاً مجموعة تيليجرام إنجليزية لممارسة اللغة.
                انضم إلى المحادثة وحسّن مهاراتك في اللغة الإنجليزية في مجتمع داعم.
              </p>

              <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg">
                <h4 className="font-bold mb-2 text-gray-800 dark:text-gray-100">مجموعة تيليجرام الإنجليزية:</h4>
                <div className="bg-gray-200 dark:bg-gray-800 p-2 rounded">
                  <Link
                    href="https://t.me/theEnglishTelegram"
                    className="text-blue-500 dark:text-blue-400 hover:underline break-all"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://t.me/theEnglishTelegram
                  </Link>
                </div>
              </div>
            </section>
          </article>
        </div>
      </div>

      <div className="mt-8">
        <CommentSection postID={"ar-english-whatsapp-group"} />
      </div>
    </div>
  );
}

