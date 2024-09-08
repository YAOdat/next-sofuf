import React from "react";
import { Card, CardBody, Spacer, Link, Code, Image } from "@nextui-org/react";
import type { Metadata } from 'next';
import CommentSection from "@/components/commentSection";

export const metadata: Metadata = {
  title: 'Join Free Voice Chat WhatsApp Group | Improve Your Speaking Skills',
  keywords: 'Voice chat WhatsApp group, improve speaking skills, practice English speaking, WhatsApp group for speaking, voice message group, ESL voice chat group, English speaking WhatsApp group, language practice online',
  description: 'Join our free Voice Chat WhatsApp Group to improve your English speaking skills. Practice speaking with others by sending voice messages and receiving feedback. Perfect for ESL learners!',
  robots: 'index, follow',
  openGraph: {
    title: 'Join Free Voice Chat WhatsApp Group | Improve Your English Speaking Skills',
    description: 'Practice your English speaking in our free Voice Chat WhatsApp Group. Join other learners and practice speaking by sending voice messages. Improve your skills today!',
    url: 'https://www.sofuf.com/voice-chat-whatsapp-group',
    images: [{ url: 'https://www.sofuf.com/resources/whatsapp/voice-chat-group.png', alt: 'Voice Chat WhatsApp Group for Speaking Practice' }],
  },
};

export default function VoiceChatWhatsAppGroup() {
  return (
    <div className="container mx-auto mt-8">
      <Card>
        <CardBody>
          <article className="max-w-full md:max-w-3xl lg:max-w-4xl mx-auto">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">Voice Chat WhatsApp Group — Improve Your English Speaking Skills</h1>
            <p className="text-xs md:text-sm font-thin mb-4">2024 - 09 - 08 / Author: Odat</p>

            <div className="mb-4">
              <p className="md:text-base">
                Welcome to the <span className="font-bold">Voice Chat WhatsApp Group</span>! This group is for people who want to practice speaking English. You can send voice messages, listen to others, and get better at speaking English.
              </p>
              <p className="md:text-base mt-4">
                To join, just click the link below and start practicing today!
              </p>
              <Link href='https://chat.whatsapp.com/DNAiOzxCkAVCsDA2oNnlJd' className="font-bold mt-4" style={{ color: 'cyan' }} isExternal rel="noopener noreferrer">Join the Voice Chat Group</Link>
            </div>

            <div className="max-w-full md:max-w-3xl lg:max-w-4xl mx-auto mb-8">
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">How Does It Work?</h2>
              <ul className="list-disc pl-6 mb-4">
                <li className="mb-2"><span className="font-bold">Send Voice Messages:</span> Record yourself speaking and send voice notes in the group.</li>
                <li className="mb-2"><span className="font-bold">Get Feedback:</span> Other group members can listen to your messages and give you feedback.</li>
                <li className="mb-2"><span className="font-bold">Listen to Others:</span> Improve your listening and speaking by hearing how others speak.</li>
                <li><span className="font-bold">Practice Daily:</span> Speak as often as possible to get better at English.</li>
              </ul>

              <h4 className="font-semibold mb-2">Before You Join:</h4>
              <ol className="list-decimal pl-6 mb-4">
                <li className="mb-2">Make sure you have WhatsApp installed on your phone.</li>
                <li className="mb-2">Turn off automatic media downloads on WhatsApp to save space (<span className="italic">Settings {">"} Data and Storage Usage {">"} Turn off all downloads</span>).</li>
                <li className="mb-2">Mute the group if you don’t want to get many notifications.</li>
                <li>Follow the group rules to make sure everyone enjoys their learning experience.</li>
              </ol>
            </div>

            <div className="mb-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Image
                alt="Join Voice Chat WhatsApp Group"
                className="object-cover rounded-xl"
                src="/voice-chat-group.png"
                width={300}
              />
            </div>

            <div className="max-w-full md:max-w-2xl mx-auto">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">Join the Group Now and Start Speaking English!</h3>
              <p className="mb-8">Speaking English is a great way to get better at it. In this group, you will practice with other English learners just like you. Join now, send your first voice message, and start improving today!</p>
            <p className="mb-2">to join the group just follow the link below:</p>
            <Link isExternal href="https://chat.whatsapp.com/DNAiOzxCkAVCsDA2oNnlJd" className="text-blue-500">https://chat.whatsapp.com/DNAiOzxCkAVCsDA2oNnlJd</Link>
                          <p className="my-8">
                Want to practice more? Check out our <Link href="/resources/whatsapp/english-whatsapp-group" className="text-blue-500">English Learning WhatsApp Groups</Link> to practice writing, reading, and speaking in other ways too!
              </p>
            </div>
          </article>
        </CardBody>
      </Card>

      <Spacer y={1} />

      <CommentSection postID={"voice-chat-whatsapp-group"} />
    </div>
  );
}
