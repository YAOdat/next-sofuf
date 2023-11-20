'use client';

import React from "react";
import { Card, CardBody, CardHeader, Image, Link } from "@nextui-org/react";
const whatsappGroups = [
    { name: 'English Group 1', link: 'https://chat.whatsapp.com/LyczdR1bJWGErr6ArcSBSx', },
    { name: 'English Group 2', link: 'https://chat.whatsapp.com/L6BzyM6siWzCvwlFINGhUN', members: '10.8k' },
    { name: 'Voice Notes Group', link: 'https://chat.whatsapp.com/DNAiOzxCkAVCsDA2oNnlJd', members: '10.8k'}
  ];

export default function WhatsApp() {
  return (
    <div className="flex justify-center pt-0 px-2 w-full min-h-screen">
      <Card>
        <CardBody>
          <article className="max-w-[100rem]">
            <h1 className="text-3xl font-bold">English WhatsApp Group — Learn and Practice English on WhatsApp</h1>
            <p className="font-thin">2023 - 11 - 20 / Author: Odat</p>
            <article className="article" >
              {/* Add the tags section if tags exist */}
              <div  className="w-full text-center">
                <p className="text-sm font-thin" style={{ fontSize: '1rem', marginBottom: '1rem' }}>
                  Are you looking to boost your English language skills in a fun and interactive way? Look no further! Our English WhatsApp groups are designed to help you practice and improve your writing, reading, speaking, and listening skills. WhatsApp Messenger, with its versatile features, serves as an excellent platform for language learning.
                </p>
              </div>
              {/* WhatsApp Group Links */}
              <div className="flex flex-row flex-wrap justify-center select-none">
                {whatsappGroups.map((group, index) => (
                  <span key={index} className="p-1 text-sm font-thin text-center rounded-full w-fit h-fit">
                    Join our {group.name}: 
                    <Link style={{ color: 'cyan', fontWeight: 'bold' }} href={group.link} target="_blank" rel="noopener noreferrer">
                       TAP HERE TO JOIN
                    </Link>
                  </span>
                ))}
              </div>
            </article>
            <div style={{ maxWidth: '48rem', margin: '2rem auto' }}>
    <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '1rem' }}>How it Works:</h2>

    <ul style={{ marginLeft: '1.5rem', marginBottom: '1rem', listStyleType: 'disc' }}>
      <li>
        <span style={{ fontWeight: 'bold' }}>Writing Practice:</span>
        <span style={{ marginLeft: '0.5rem' }}>Engage in meaningful conversations by writing and sending messages to group members.</span>
      </li>
      <li>
        <span style={{ fontWeight: 'bold' }}>Reading Practice:</span>
        <span style={{ marginLeft: '0.5rem' }}>Enhance comprehension skills by reading messages from other members.</span>
      </li>
      <li>
        <span style={{ fontWeight: 'bold' }}>Speaking Practice:</span>
        <span style={{ marginLeft: '0.5rem' }}>Practice articulating thoughts and ideas by recording and sending voice notes.</span>
      </li>
      <li>
        <span style={{ fontWeight: 'bold' }}>Listening Practice:</span>
        <span style={{ marginLeft: '0.5rem' }}>Improve auditory skills by listening to voice notes from other members in the group.</span>
      </li>
    </ul>

    <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '1rem' }}>WhatsApp Group Links:</h2>

    <div style={{ marginBottom: '1rem' }}>
      <p style={{ marginBottom: '0.5rem' }}>To get started, follow these simple steps:</p>
      <ol style={{ marginLeft: '1.5rem', marginBottom: '1rem', listStyleType: 'decimal' }}>
        <li>Ensure you have a basic understanding of the English language.</li>
        <li>Turn off automatic media downloads in WhatsApp settings for a smoother experience.</li>
        <li>Mute the group immediately after joining.</li>
        <li>Familiarize yourself with the group rules outlined in the description.</li>
      </ol>
    </div>
    <div style={{ marginBottom: '1rem' }}>
      <p style={{ marginBottom: '0.5rem' }}>Choose from our various English WhatsApp groups:</p>
      <ol style={{ marginLeft: '1.5rem', marginBottom: '1rem', listStyleType: 'circle' }}>
      {whatsappGroups.map((group, index) => (
        <li>{group.name} <Link>{group.link}</Link></li>
        ))}
       
      </ol>
    </div>
  </div>
          </article>
        </CardBody>
      </Card>
    </div>
  );
}

