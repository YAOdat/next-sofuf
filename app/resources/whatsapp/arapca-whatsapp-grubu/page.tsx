import React from "react";
import { Card, CardBody, Spacer, Link, Code, Image } from "@heroui/react";
import type { Metadata } from 'next'
import CommentSection from "../../../../components/commentSection";

const arabicGroups = [
    { name: 'Arapça WhatsApp Grubu', link: 'https://chat.whatsapp.com/GC59qnSlRtf9tC4NjqUuYY', language: 'Arabic' },
    { name: 'English Arabic Group', link: 'https://chat.whatsapp.com/DNAiOzxCkAVCsDA2oNnlJd', language: 'EnglishArabic' }
];

export const metadata: Metadata = {
    title: 'Arapça WhatsApp Grubu',
    keywords: ['Arapça WhatsApp grubu', 'arapça whatsapp grupları', 'Arapça WhatsApp grubu bağlantısı', 'WhatsApp\'tan Arapça öğrenmek', 'Arapça konuşma pratiği WhatsApp grubu', 'Arapça öğrenme grubu WhatsApp', 'Arapça dil becerilerini geliştirme WhatsApp grubu', 'Arapça ile konuşma pratiği', 'Arapça konuşma WhatsApp', 'Arapça sohbet grubu', 'Arapça öğrenme uygulaması'],
    description: 'Arapça öğrenme grubu WhatsApp! Yeni kelimeler, dilbilgisi kuralları öğrenin ve ana dili Arapça olanlarla Arapça konuşma pratiği yapın. WhatsApp üzerinden Arapça öğrenin!',
    robots: 'index, follow',
}

export default function Arabca() {
    return (
        <div className="container mx-auto mt-8">
            <Card>
                <CardBody>
                    <article className="max-w-full md:max-w-3xl lg:max-w-4xl mx-auto">
                        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">Arapça WhatsApp Grubu</h1>
                        <p className="text-xs md:text-sm font-thin mb-4">2024 - 05 - 23 / Author: Odat</p>
                        <div className="mb-4">
                            <p className="md:text-base">
                                WhatsApp ile <span className="font-bold">Arapça</span> Konuşma Becerilerinizi Geliştirin!
                            </p >
                            <Link className="font-bold mt-4" href='https://chat.whatsapp.com/GC59qnSlRtf9tC4NjqUuYY' style={{ color: 'cyan' }} isExternal rel="noopener noreferrer">Tap Here to Join</Link>
                        </div>
                        <div className="max-w-full md:max-w-3xl lg:max-w-4xl mx-auto mb-8">
                            <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">Neden Bu Gruba Katılmalısınız?</h2>
                            <ul className="list-disc pl-6 mb-4">
                                <li className="mb-2"><span className="font-bold"> Deneyimli Arapça öğrencileriyle etkileşim: </span> Sorularınıza cevap alın ve tecrübelerinizi paylaşın.</li>
                                <li className="mb-2"><span className="font-bold">Günlük konuşma pratiği:</span> Arapça&apos;yı günlük hayatta kullanarak kendinizi geliştirin.</li>
                                <li className="mb-2"><span className="font-bold">Konuşma becerileri üzerinde yoğunlaşma: </span>Dilediğiniz zaman sesli mesaj göndererek konuşma pratiği yapın.</li>
                                <li><span className="font-bold">Destekleyici ortam:</span> Motivasyonunuzu yüksek tutun ve öğrenme sürecinden keyif alın.</li>
                            </ul>
                            <h4 className="font-semibold mb-2">Gruba Katılmadan Önce:</h4>
                            <ol className="list-decimal pl-6 mb-4">
                                <li className="mb-2">Arapça dil bilgisi hakkında temel bilgilere sahip olun.</li>
                                <li className="mb-2">Grup kurallarını okuyun ve uymayı taahhüt edin.(<span className="italic">Settings {">"} Data and Storage Usage {">"} Turn off all downloads</span>).</li>
                                <li className="mb-2">WhatsApp bildirimlerini sessize ayarlayın.</li>
                            </ol>
                            <h3 className="text-lg font-semibold mb-2">Gruba Nasıl Katılırım?</h3>
                            <p className="mb-4">Aşağıdaki bağlantıya tıklayarak gruba hemen katılın! <a target="_blank" href="https://www.whatsapp.com/download" className="text-blue-500">download it here</a>.</p>
                            <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">Gruba Nasıl Katılırım?</h2>
                            <div className="mb-4">
                                <div className="flex flex-wrap mb-4">
                                    <ul className="list-disc pl-6 mb-4">
                                        {arabicGroups.map((group, index) => (
                                            <li key={index} className="mb-2">
                                                {group.name}:<br></br>
                                                <Code className="text-blue-500 break-words bg-cyan-900">
                                                    <Link href={group.link} className="responsiveLinkSize" target="_blank" rel="noopener noreferrer">{group.link}</Link>
                                                </Code>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="mb-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Image
                                alt="Arapça WhatsApp grubu 2024"
                                className="object-cover rounded-xl"
                                src="https://external-preview.redd.it/RqmBj2CfpZUCyg_SqB_ivZRpWwi1-s9bFvdab0Cu5aA.jpg?auto=webp&s=245b9c36dc8410a715c4dfd4d255da5a9935a7b3"
                                width={300}
                            />
                        </div>
                        <div className="max-w-full md:max-w-2xl mx-auto">
                            <p className="mb-8">
                                Bu Telegram grubu, Arapça öğrenmek isteyen ve WhatsApp kullanmayan kişiler için mükemmel bir fırsattır. Katılın ve dil becerilerinizi geliştirmeye başlayın!
                            </p>
                            Arabic Telegram Group:<br />
                            <Code className="text-blue-500 break-words bg-cyan-900 mt-4">
                                <Link href="https://t.me/ArabicDiscussionGroup" style={{ fontSize: '12px', color: 'cyan' }} target="_blank" rel="noopener noreferrer">https://t.me/ArabicDiscussionGroup</Link>
                            </Code>
                        </div>
                    </article>
                </CardBody>
            </Card>
            <Spacer y={1} />
            <CommentSection postID="arabca-whatsapp-group" />
        </div>
    );
}
