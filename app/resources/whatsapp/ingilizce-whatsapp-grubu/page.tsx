import React from "react";
import { Card, CardBody, Spacer, Link, Code } from "@nextui-org/react";
import type { Metadata } from 'next';
import CommentSection from "@/components/commentSection";
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'İngilizce Öğrenmek ve Pratik Yapmak için WhatsApp Grupları',
  keywords: ['İngilizce öğrenmek', 'WhatsApp grupları', 'İngilizce pratik yapmak', 'Türkçe öğrenen yabancılar', 'ana dili İngilizce olan kişiler', 'konuşma becerilerini geliştirmek', 'kelime öğrenmek', 'dilbilgisi kuralları öğrenmek', 'aksan', 'arkadaşlık', 'özgüven', "ingilizce whatsapp grubu", "whatsapp ingilizce grupları", "yabancı dil whatsapp grupları", "dil öğrenme amaçlı whatsapp grubu", "yabancı whatsapp grupları"],
  description: 'İngilizce öğrenmek ve pratik yapmak için WhatsApp grupları! Ana dili İngilizce olan kişilerle konuşma pratiği yapın, yeni kelimeler öğrenin ve farklı aksanlara maruz kalın.',
  robots: 'index, follow',
};

const englishGroups = [
  { name: 'Sadece İngilizce', link: 'https://chat.whatsapp.com/LyczdR1bJWGErr6ArcSBSx' },
  { name: 'Türkçe Öğrenen Yabancılar', link: 'https://chat.whatsapp.com/EpzjPWqKTXwBa6F6q0yNBp' },
  { name: 'İngilizce Grubu 2', link: 'https://chat.whatsapp.com/L6BzyM6siWzCvwlFINGhUN' },
  { name: 'İngilizce Grubu 4', link: 'https://chat.whatsapp.com/G4yKUNBwA6aAlwOPOUmpi1' },
  { name: 'İngilizce Grubu 5', link: 'https://chat.whatsapp.com/CAL43yKsm919DnmmtdGVNT' },
  { name: 'Daha Fazla İngilizce Grubu', link: 'https://chat.whatsapp.com/HeBS7UaTuH2HtSDMl9hj9x' },
  { name: 'Arapça WhatsApp Grubu', link: 'arapca-whatsapp-grubu' },
];

export default function EnglishLearningGroups() {
  return (
    <div className="container mx-auto mt-8">
      <Card>
        <CardBody>
          <article className="max-w-full md:max-w-3xl lg:max-w-4xl mx-auto">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">İngilizce Öğrenmek ve Pratik Yapmak için WhatsApp Grupları</h1>
            <p className="text-xs md:text-sm font-thin mb-4">2025 - 01 - 10 / Author: Odat</p>
            <div className="mb-4">
              <p className="md:text-base">
                İngilizce öğrenmek mi istiyorsunuz? Ana dili İngilizce olan kişilerle pratik yapmak mı hayaliniz? O halde İngilizce WhatsApp grupları tam size göre!
              </p>
              <p className="md:text-base">
                Bu gruplar, Türkçe öğrenen yabancılar ve İngilizce pratik yapmak isteyenler için harika bir platform sunuyor. Farklı seviyelerden insanlarla tanışabilir, dil becerilerinizi geliştirebilir ve yeni kültürler hakkında bilgi edinebilirsiniz.
              </p>
            </div>

            <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">En İyi İngilizce WhatsApp Grupları</h2>
            <ul className="list-disc pl-6 mb-4">
              {englishGroups.map((group, index) => (
                <li key={index} className="mb-2">
                  {group.name}:<br />
                  <Code className="text-blue-500 break-words bg-cyan-900">
                    <Link isExternal href={group.link} target="_blank" className="responsiveLinkSize" rel="noopener noreferrer">{group.link}</Link>
                  </Code>
                </li>
              ))}
            </ul>
            <p className="md:text-base">
              Not: Gruplara katılmadan önce kuralları dikkatlice okuduğunuzdan emin olun. Bazı gruplar yalnızca İngilizce konuşulmasına izin verirken, diğerlerinde Türkçe ve İngilizce karışık kullanılabilir.
            </p>

            <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">İngilizce WhatsApp Grupları ile:</h2>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">Konuşma becerilerinizi geliştirin.</li>
              <li className="mb-2">Yeni kelimeler ve dilbilgisi kuralları öğrenin.</li>
              <li className="mb-2">Farklı aksanlara maruz kalın.</li>
              <li className="mb-2">Ana dili İngilizce olan kişilerle arkadaş olun.</li>
              <li className="mb-2">Daha özgüvenli hale gelin.</li>
            </ul>
            <Image
              src="/whatsappgroups.png"
              alt="İngilizce WhatsApp gruplarına katılarak öğrenme ve pratik yapma"
              className="w-full h-auto rounded-md mb-4"
              width={1200}
              height={600}
            />
            <div className="mb-4">
              <p className="md:text-base">
                İngilizce WhatsApp grupları, dil öğrenme sürecinizi hızlandırmak ve konuşma pratiği yaparak dil becerilerinizi geliştirmek için ideal bir yoldur. Bu gruplar sayesinde, dünyanın dört bir yanından insanlarla iletişim kurabilir, dilbilgisi kurallarını daha iyi anlayabilir ve günlük yaşamda kullanılan kelimeler ve ifadelerle aşinalık kazanabilirsiniz. Aynı zamanda, farklı aksanlara maruz kalarak dinleme becerilerinizi geliştirebilir ve dil öğrenirken motivasyonunuzu yüksek tutabilirsiniz. Yeni arkadaşlıklar kurarak öğrenmeyi eğlenceli hale getirin ve İngilizce hedeflerinize bir adım daha yaklaşın!
              </p>
            </div>

            <p className="md:text-base">
              Hemen bir gruba katılın ve İngilizce öğrenmeye başlayın!
            </p>
          </article>
        </CardBody>
      </Card>
      <Spacer y={1} />
      <CommentSection postID={"ingilizce-group"} />
    </div>
  );
}
