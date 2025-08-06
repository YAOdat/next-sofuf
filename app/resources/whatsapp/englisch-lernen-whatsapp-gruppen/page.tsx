import React from "react";
import { Card, CardBody, Spacer, Link, Code, Image } from "@heroui/react";
import type { Metadata } from 'next';
import CommentSection from "@/components/commentSection";


const englischeGruppen = [
  { name: 'Englische Gruppe 1', link: 'https://chat.whatsapp.com/LyczdR1bJWGErr6ArcSBSx', sprache: 'Englisch' },
  { name: 'Englische Gruppe 2', link: 'https://chat.whatsapp.com/L6BzyM6siWzCvwlFINGhUN', sprache: 'Englisch' },
  { name: 'Englische Gruppe 3', link: 'https://chat.whatsapp.com/FMOdmLdsbRQCOUDPsvGoyf', sprache: 'Englisch' },
  { name: 'Englische Gruppe 4', link: 'https://chat.whatsapp.com/G4yKUNBwA6aAlwOPOUmpi1', sprache: 'Englisch' },
  { name: 'Englische Gruppe 5', link: 'https://chat.whatsapp.com/CAL43yKsm919DnmmtdGVNT', sprache: 'Englisch' },
  { name: 'Sprachnachrichten-Gruppe', link: 'https://chat.whatsapp.com/DNAiOzxCkAVCsDA2oNnlJd', sprache: 'Englisch' },
  { name: 'Englisch-Arabisch-Gruppe', link: 'https://chat.whatsapp.com/HeBS7UaTuH2HtSDMl9hj9x', sprache: 'EnglischArabisch' }
];

const sprachgruppen = [
  {
    name: "Arabisch | Englisch",
    beschreibung: "Treten Sie dieser zweisprachigen Community bei, in der Arabisch- und Englischlernende zusammenkommen, um Sprachaustausch zu betreiben.",
    link: "https://chat.whatsapp.com/HeBS7UaTuH2HtSDMl9hj9x",
  },
  {
    name: "Englisch — Pyсский",
    beschreibung: "Tauchen Sie ein in eine vielfältige sprachliche Umgebung mit Sprechern von Russisch und Englisch in dieser Sprachaustauschgruppe.",
    link: "https://chat.whatsapp.com/CGmjCn9z94p4O6IraY5pvL"
  },
  {
    name: "Türkçe Ve İngilizce",
    beschreibung: "Verbinden Sie sich mit anderen Lernenden in einer Gruppe, die sowohl Türkisch als auch Englisch für eine bereichernde Sprachaustauscherfahrung bietet.",
    link: "https://chat.whatsapp.com/LRDFFg2GR6B7rekwAo3mCS"
  },
  {
    name: "Japanisch(日本語)-Englisch(英語)",
    beschreibung: "Treten Sie dieser Gruppe bei, um Japanisch und Englisch in einer unterhaltsamen und unterstützenden Umgebung zu üben.",
    link: "https://chat.whatsapp.com/BiCkJLiwf1y8SBXoKJlc5J"
  },
  {
    name: "Thai ไทย I Englisch",
    beschreibung: "Lernen Sie Thai und Englisch von Muttersprachlern in dieser freundlichen und interaktiven Sprachaustauschgruppe.",
    link: "https://chat.whatsapp.com/Je7gDVaz6tS28AwTvPuZoM"
  },
  {
    name: "Englisch - Französisch",
    beschreibung: "Treten Sie dieser Gruppe bei, um Ihre Englisch- und Französischkenntnisse zu verbessern.",
    link: "https://chat.whatsapp.com/EQlwGRxgDjeJwo78SgQUkD"
  }
];

export const metadata: Metadata = {
  title: 'Englische WhatsApp-Gruppen beitreten | Englisch auf WhatsApp lernen',
  keywords: 'Englische WhatsApp-Gruppe, Englisch online lernen, Sprachaustausch, WhatsApp-Gruppenlink Englisch, Englisch auf WhatsApp üben, kostenlose englische WhatsApp-Gruppen 2024, englischsprachige WhatsApp-Gruppe, WhatsApp-Gruppe zum Englischlernen, WhatsApp-Gruppenlink Englisch, Englisch lernen WhatsApp-Gruppe, englischsprachige Chat-Gruppe, Englisch lernen WhatsApp, Englisch WhatsApp, englischsprachige Chat-Gruppe',
  description: 'Treten Sie kostenlosen englischen WhatsApp-Gruppen bei, um Englisch mit Muttersprachlern zu üben und zu lernen. Verbessern Sie Ihre Sprech-, Schreib- und Hörfähigkeiten durch echte Gespräche. Finden Sie jetzt Ihre perfekte Englisch-Sprachaustauschgruppe!',
  robots: 'index, follow',
  openGraph: {
    title: 'Kostenlosen englischen WhatsApp-Gruppen beitreten | Englisch online üben & lernen',
    description: 'Verbinden Sie sich mit Englischlernenden weltweit. Treten Sie unseren kostenlosen WhatsApp-Gruppen bei, um Ihre Englischkenntnisse durch echte Gespräche zu verbessern.',
    url: 'https://www.sofuf.com/resources/whatsapp/english-whatsapp-group',
    images: [{ url: 'https://www.sofuf.com/ewg-blog.png', alt: 'Englische WhatsApp-Gruppenlinks 2024' }],
  },
};


export default function WhatsApp() {
  return (
    <div className="container mx-auto mt-8">
      <Card>
        <CardBody>
          <article className="max-w-full md:max-w-3xl lg:max-w-4xl mx-auto">
            <header>
              <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">Englische WhatsApp-Gruppen — Englisch auf WhatsApp lernen und üben</h1>
              <p className="text-xs md:text-sm font-thin mb-4">2025 - 01 - 10 / Autor: Odat</p>
            </header>
            <div className="mb-4">
              <p className="md:text-base">
                Willkommen bei unseren <span className="font-bold">Englisch-Lern-WhatsApp-Gruppen</span>! WhatsApp Messenger, eine vielseitige Instant-Messaging-App, ermöglicht es Benutzern, Text- und Sprachnachrichten auszutauschen, Sprach- und Videoanrufe zu tätigen und verschiedene Medienformate wie Bilder, Dokumente und Benutzerstandorte zu teilen. Die Nutzung dieser Plattform zum Englischlernen hat sich als sehr nützlich erwiesen, wie ich selbst festgestellt habe.
              </p >
              <Link className="font-bold mt-4" href='https://chat.whatsapp.com/LyczdR1bJWGErr6ArcSBSx' style={{ color: 'cyan' }} isExternal rel="noopener noreferrer">Hier klicken, um beizutreten</Link>
            </div>
            <div className="max-w-full md:max-w-3xl lg:max-w-4xl mx-auto mb-8">
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">So funktioniert es:</h2>
              <ul className="list-disc pl-6 mb-4">
                <li className="mb-2"><span className="font-bold"> Schreibübungen: </span> Verbessern Sie Ihre Schreibfähigkeiten, indem Sie Nachrichten in der Gruppe verfassen und versenden.</li>
                <li className="mb-2"><span className="font-bold">Leseübungen:</span> Verbessern Sie Ihre Lesefähigkeiten, indem Sie Nachrichten anderer Gruppenmitglieder lesen.</li>
                <li className="mb-2"><span className="font-bold">Sprechübungen:</span> Nehmen Sie Sprachnachrichten auf und senden Sie sie, um Ihr gesprochenes Englisch zu üben.</li>
                <li><span className="font-bold">Hörübungen: </span> Verbessern Sie Ihre Hörfähigkeiten, indem Sie Sprachnachrichten anderer Gruppenmitglieder anhören.</li>
              </ul>
              <h4 className="font-semibold mb-2">Bevor Sie beitreten:</h4>
              <ol className="list-decimal pl-6 mb-4">
                <li className="mb-2">Stellen Sie sicher, dass Sie über grundlegende Englischkenntnisse verfügen.</li>
                <li className="mb-2">Deaktivieren Sie automatische Mediendownloads auf WhatsApp (<span className="italic">Einstellungen {">"} Daten- und Speichernutzung {">"} Alle Downloads deaktivieren</span>).</li>
                <li className="mb-2">Stummschalten Sie die Gruppe sofort nach dem Beitritt.</li>
                <li>Machen Sie sich mit den in der Beschreibung aufgeführten Gruppenregeln vertraut.</li>
              </ol>
              <h3 className="text-lg font-semibold mb-2">Treten Sie unseren Englisch-Lern-WhatsApp-Gruppen bei:</h3>
              <p className="mb-4">Um beizutreten, klicken Sie einfach auf den Link neben jeder Gruppe. Wenn Sie WhatsApp nicht installiert haben, <a target="_blank" href="https://www.whatsapp.com/download" className="text-blue-500">laden Sie es hier herunter</a>.</p>
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">WhatsApp-Gruppenlinks:</h2>
              <div className="mb-4">
                <div className="flex flex-wrap mb-4">
                  <ul className="list-disc pl-6 mb-4">
                    {englischeGruppen.map((gruppe, index) => (
                      <li key={index} className="mb-2">
                        {gruppe.name}:<br></br><Code className="text-blue-500 break-words bg-cyan-900" ><Link href={gruppe.link} className="responsiveLinkSize" target="_blank" rel="noopener noreferrer">{gruppe.link}</Link>
                        </Code>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="mb-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Image
                alt="Kostenlosen englischen WhatsApp-Gruppen 2024 beitreten"
                className="object-cover rounded-xl"
                src="/ewg-blog.png"
                width={300}
                loading="lazy"
              />
            </div>

            <div className="max-w-full md:max-w-2xl mx-auto">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">Verbessern Sie Ihr Englisch mit Sprachaustauschgruppen</h3>

              {sprachgruppen.map((gruppe, index) => (
                <div key={index} className="mb-8">
                  <h3 className="mb-4">Treten Sie unserer zweisprachigen Community für Sprachaustausch bei:</h3>
                  <h4 className="text-lg md:text-xl lg:text-2xl font-bold mb-2">{gruppe.name} WhatsApp-Gruppe:</h4>
                  <div className="mb-2">
                    <li key={index} className="mb-2">
                      {gruppe.name}:<br />{gruppe.beschreibung}<Code className="text-blue-500 break-words bg-cyan-900 mt-4" ><Link className="responsiveLinkSize" href={gruppe.link} target="_blank" rel="noopener noreferrer">{gruppe.link}</Link>
                      </Code>
                    </li>
                  </div>

                </div>
              ))}

              <p className="mb-8">
                Für diejenigen, die WhatsApp nicht haben, bieten wir auch eine englische Telegram-Gruppe zum Sprachenlernen an.
                Nehmen Sie an der Konversation teil und verbessern Sie Ihre Englischkenntnisse in einer unterstützenden Community.
              </p>

              Englische Telegram-Gruppe:<br /><Code className="text-blue-500 break-words bg-cyan-900 mt-4" ><Link href="https://t.me/theEnglishTelegram" style={{ fontSize: '12px', color: 'cyan' }} target="_blank" rel="noopener noreferrer">https://t.me/theEnglishTelegram</Link>
              </Code>
            </div>

          </article>
        </CardBody>
      </Card>

      <Spacer y={1} />
      <CommentSection postID={"de-whatsapp-group"} />
    </div>
  );
}