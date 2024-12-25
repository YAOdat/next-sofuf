import React from "react";
import { Card, CardBody, Spacer, Link, Code, Image } from "@nextui-org/react";
import type { Metadata } from 'next';
import CommentSection from "@/components/commentSection";

export const metadata: Metadata = {
  title: 'Join Software Developers WhatsApp Group',
  keywords: 'software developer WhatsApp group, software engineer community, tech news, software business ideas, startup discussions, tech entrepreneurship, developer networking, software development news, tech innovation community, technology whatsapp group',
  description: 'Join our Software Developers WhatsApp Group to stay updated with latest tech news, share business ideas, and connect with fellow developers. Perfect for tech enthusiasts and entrepreneurs!',
  robots: 'index, follow',
  openGraph: {
    title: 'Join Software Developers WhatsApp Group | Tech News & Business Ideas',
    description: 'Stay updated with latest tech news, share software business ideas, and connect with fellow developers in our active WhatsApp community.',
    url: 'https://www.sofuf.com/software-developers-whatsapp-group',
    images: [{ url: 'https://www.sofuf.com/resources/whatsapp/dev-group.png', alt: 'Software Developers WhatsApp Group' }],
  },
};

export default function DevWhatsAppGroup() {
  return (
    <div className="container mx-auto mt-8">
      <Card>
        <CardBody>
          <article className="max-w-full md:max-w-3xl lg:max-w-4xl mx-auto">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">Software Developers WhatsApp Group — News, Ideas, and Innovation</h1>
            <p className="text-xs md:text-sm font-thin mb-4">2024 - 12 - 25 / Author: Odat</p>

            <div className="mb-4">
              <p className="md:text-base">
                Welcome to the <span className="font-bold">Software Developers WhatsApp Group</span>! Stay updated with the latest tech news, share innovative ideas, and connect with fellow developers who are passionate about both technology and business opportunities.
              </p>
              <p className="md:text-base mt-4">
                Click below to join our growing developer community:
              </p>
              <Link href='https://chat.whatsapp.com/KxhKNzWg6qiHlQnyOCBWlc' className="font-bold mt-4" style={{ color: 'cyan' }} isExternal rel="noopener noreferrer">Join the Dev Group</Link>
            </div>

            <div className="max-w-full md:max-w-3xl lg:max-w-4xl mx-auto mb-8">
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">What We Offer</h2>
              <ul className="list-disc pl-6 mb-4">
                <li className="mb-2"><span className="font-bold">Tech News Updates:</span> Stay informed about the latest developments in software development, emerging technologies, and industry trends.</li>
                <li className="mb-2"><span className="font-bold">Business Ideas:</span> Share and discuss potential software business opportunities and startup concepts.</li>
                <li className="mb-2"><span className="font-bold">Community Support:</span> Get help and insights from fellow developers on technical challenges and business decisions.</li>
                <li><span className="font-bold">Innovation Discussions:</span> Explore new technologies and their potential business applications.</li>
              </ul>

              <h4 className="font-semibold mb-2">Group Guidelines:</h4>
              <ol className="list-decimal pl-6 mb-4">
                <li className="mb-2">Share relevant tech news from reliable sources.</li>
                <li className="mb-2">Respect intellectual property when discussing business ideas.</li>
                <li className="mb-2">Keep discussions professional and constructive.</li>
                <li>No spam or promotional content without admin approval.</li>
              </ol>
            </div>

            <div className="mb-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Image
                alt="Join Developer WhatsApp Group"
                className="object-cover rounded-xl"
                src="/developers-whatsapp.jpg"
                width={300}
              />
            </div>

            <div className="max-w-full md:max-w-2xl mx-auto">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">Join Our Developer Community Today!</h3>
              <p className="mb-8">Connect with developers worldwide, stay updated with tech news, and explore business opportunities together. Whether you're interested in emerging technologies or looking for your next big software business idea, there's a place for you here.</p>
              <p className="mb-2">Join now using this link:</p>
              <Link isExternal href="https://chat.whatsapp.com/KxhKNzWg6qiHlQnyOCBWlc" className="text-blue-500">https://chat.whatsapp.com/KxhKNzWg6qiHlQnyOCBWlc</Link>
              <p className="my-8">
                Looking for more? Check out our <Link href="/resources/whatsapp" className="text-blue-500">WhatsApp Groups</Link> for specialized discussions in different domains!
              </p>
            </div>
          </article>
        </CardBody>
      </Card>

      <Spacer y={1} />

      <CommentSection postID={"software-developers-whatsapp-group"} />
    </div>
  );
}