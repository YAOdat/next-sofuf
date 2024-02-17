import React from "react";
import { Card, CardBody, Link, Code, Image } from "@nextui-org/react";
import type { Metadata } from 'next'

const englishGroups = [
  { name: 'English Group 1', link: 'https://chat.whatsapp.com/LyczdR1bJWGErr6ArcSBSx', language: 'English' },
  { name: 'English Group 2', link: 'https://chat.whatsapp.com/L6BzyM6siWzCvwlFINGhUN', language: 'English' },
  { name: 'English Group 3', link: 'https://chat.whatsapp.com/FMOdmLdsbRQCOUDPsvGoyf', language: 'English' },
  { name: 'English Group 4', link: 'https://chat.whatsapp.com/G4yKUNBwA6aAlwOPOUmpi1', language: 'English' },
  { name: 'Voice Notes Group', link: 'https://chat.whatsapp.com/DNAiOzxCkAVCsDA2oNnlJd', language: 'English'},
  { name: 'English Arabic Group', link: 'https://chat.whatsapp.com/DNAiOzxCkAVCsDA2oNnlJd', language: 'EnglishArabic'}
  
];
const langGroups = [
  { 
    name: "Arabic | English", 
    description: "Join this bilingual community where both Arabic and English learners come together for language exchange.",
    link: "https://chat.whatsapp.com/HeBS7UaTuH2HtSDMl9hj9x", 
  },
  { 
    name: "English — Pyсский", 
    description: "Immerse yourself in a diverse linguistic environment with speakers of both Russian and English in this language exchange group.",
    link: "https://chat.whatsapp.com/CGmjCn9z94p4O6IraY5pvL" 
  },
  { 
    name: "Türkçe Ve İngilizce", 
    description: "Connect with fellow learners in a group accommodating both Turkish and English languages for an enriching language exchange experience.",
    link: "https://chat.whatsapp.com/LRDFFg2GR6B7rekwAo3mCS" 
  },
  {
    name:"Japanese(日本語)-English(英語)", 
    description: "Join this group to practice Japanese and English in a fun and supportive environment.",
    link: "https://chat.whatsapp.com/BiCkJLiwf1y8SBXoKJlc5J"
  },
  {
    name: "Thai ไทย I English",
    description: "Learn Thai and English from native speakers in this friendly and interactive language exchange group.",
    link: "https://chat.whatsapp.com/Je7gDVaz6tS28AwTvPuZoM"
  },
  {
    name: "English - Français",
    description: "Join this group to improve your English and French language skills.",
    link: "https://chat.whatsapp.com/EQlwGRxgDjeJwo78SgQUkD"
  }
];

export const metadata: Metadata = {
  title: 'English WhatsApp Group - Learn and Practice English on WhatsApp',
  keywords: 'English WhatsApp groups, learn English online, language exchange, English whatsapp group link, practice English on WhatsApp, Best English Language Exchange on WhatsApp',
  description: 'Learn & practice English with others! Join free WhatsApp groups & connect with learners worldwide. Improve reading, writing, speaking, & listening through real-life conversations. Find your WhatsApp group link & start today!',
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1',
}
export default function WhatsApp() {
  return (
    <div className="container mx-auto mt-8">
      <Card>
        <CardBody>
          <article className="max-w-full md:max-w-3xl lg:max-w-4xl mx-auto">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">English WhatsApp Group — Learn and Practice English on WhatsApp</h1>
            <p className="text-xs md:text-sm font-thin mb-4">2023 - 11 - 21 / Author: Odat</p>
            <div className="mb-4">
              <p className="md:text-base">
             Welcome to our <span className="font-bold">English Learning WhatsApp Groups</span>! WhatsApp Messenger, a versatile instant messaging app, empowers users to exchange text and voice messages, conduct voice and video calls, and share various media formats, including images, documents, and user locations. Leveraging this platform for English language practice has proven highly beneficial, as I personally discovered.
              </p >
              <Link className="font-bold mt-4" href='https://chat.whatsapp.com/LyczdR1bJWGErr6ArcSBSx' style={{color:'cyan'}} isExternal rel="noopener noreferrer">Tap Here to Join</Link>
            </div>
            <div className="max-w-full md:max-w-3xl lg:max-w-4xl mx-auto mb-8">
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">How it Works:</h2>
              <ul className="list-disc pl-6 mb-4">
    <li className="mb-2"><span className="font-bold"> Writing Practice: </span> Sharpen your writing skills by composing and sending messages within the group.</li>
    <li className="mb-2"><span className="font-bold">Reading Practice:</span> Enhance your reading proficiency by perusing messages crafted by fellow group members.</li>
    <li className="mb-2"><span className="font-bold">Speaking Practice:</span> Record and send voice notes to exercise your spoken English.</li>
    <li><span className="font-bold">Listening Practice: </span> Develop your listening skills by attentively listening to voice notes from other group members.</li>
  </ul>
  <h4 className="font-semibold mb-2">Before You Join:</h4>
  <ol className="list-decimal pl-6 mb-4">
    <li className="mb-2">Ensure you have a basic understanding of the English language.</li>
    <li className="mb-2">Disable automatic media downloads on WhatsApp (<span className="italic">Settings {">"} Data and Storage Usage {">"} Turn off all downloads</span>).</li>
    <li className="mb-2">Mute the group immediately upon joining.</li>
    <li>Familiarize yourself with the group rules outlined in the description.</li>
  </ol>
  <h3 className="text-lg font-semibold mb-2">Join Our English Learning WhatsApp Groups:</h3>
  <p className="mb-4">To join, simply click on the link beside each group. If you do not have WhatsApp installed, <a target="_blank" href="insert-download-link" className="text-blue-500">download it here</a>.</p>
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">WhatsApp Group Links:</h2>
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
          alt="English WhatsApp Group Link 2024"
          className="object-cover rounded-xl"
          src="/ewg-blog.png"
          width={300}
        /></div>

            <div className="max-w-full md:max-w-2xl mx-auto">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">Enhance Your English with Language Exchange Groups</h3>

        {langGroups.map((group, index) => (
          <div key={index} className="mb-8">
            <h3 className="mb-4">Join our bilingual community for language exchange:</h3>
            <h4 className="text-lg md:text-xl lg:text-2xl font-bold mb-2">{group.name} WhatsApp Group:</h4>
              <div className="mb-2">
              <li key={index} className="mb-2">
                    {group.name}:<br/>{group.description}<Code className="text-blue-500 break-words bg-cyan-900 mt-4" ><Link className="responsiveLinkSize" href={group.link} target="_blank" rel="noopener noreferrer">{group.link}</Link>
                  </Code>
                  </li>
              </div>
          
          </div>
        ))}
        
        <p className="mb-8">
          For those without WhatsApp, we also offer an English Telegram group for language practice.
          Join the conversation and enhance your English skills in a supportive community.
        </p>

        English Telegram Group:<br/><Code className="text-blue-500 break-words bg-cyan-900 mt-4" ><Link href="https://t.me/theEnglishTelegram" style={{fontSize:'12px', color:'cyan'}} target="_blank" rel="noopener noreferrer">https://t.me/theEnglishTelegram</Link>
      </Code>
      </div>
    
          </article>
        </CardBody>
      </Card>
    </div>
  );
}
