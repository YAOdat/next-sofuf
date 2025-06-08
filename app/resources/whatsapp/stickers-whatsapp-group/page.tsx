import React from "react";
import { Card, CardBody, Spacer, Link, Code, Image, Button, Chip } from "@nextui-org/react";
import type { Metadata } from 'next';
import CommentSection from "../../../../components/commentSection";

export const metadata: Metadata = {
    title: 'Join Stickers WhatsApp Group – Share & Discover Funny Stickers',
    keywords: [
        'Stickers WhatsApp group 2025', 'WhatsApp sticker sharing group',
        'Join WhatsApp group for stickers', 'Funny stickers WhatsApp group',
        'WhatsApp sticker community', 'Send and receive stickers WhatsApp',
        'Best sticker groups WhatsApp', 'Custom sticker group WhatsApp',
        'WhatsApp sticker creators', 'WhatsApp sticker exchange',
        'free sticker packs WhatsApp', 'animated stickers WhatsApp',
        'meme stickers WhatsApp', 'emoji stickers WhatsApp',
        'stickers whatsapp group link', 'new stickers whatsapp group ',
    ],
    description: 'Join our active Stickers WhatsApp Group with 500+ members! Discover trending stickers, share custom packs, request specific stickers, and connect with creators. 100% free community for sticker enthusiasts.',
    robots: 'index, follow',
    openGraph: {
        title: 'Join Stickers WhatsApp Group 2025 – Share & Discover Funny Stickers',
        description: 'Join our active Stickers WhatsApp Group with 500+ members! Discover trending stickers, share custom packs, and connect with creators.',
        type: 'website',
        images: [
            {
                url: '/stickers.png',
                width: 1200,
                height: 630,
                alt: 'WhatsApp Stickers Group Preview'
            }
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Join Stickers WhatsApp Group 2025 – Share & Discover Funny Stickers',
        description: 'Join our active Stickers WhatsApp Group with 500+ members! Discover trending stickers and share custom packs.',
        images: ['/sticker.png'],
    },
    alternates: {
        canonical: '/groups/stickers-whatsapp-group'
    }
};

export default function StickersGroup() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SocialMediaPosting",
        "headline": "Join Stickers WhatsApp Group 2025 – Share & Discover Funny Stickers",
        "description": "Join our active Stickers WhatsApp Group with 500+ members! Discover trending stickers, share custom packs, request specific stickers, and connect with creators.",
        "image": "/sticker.png",
        "author": {
            "@type": "Person",
            "name": "Odat"
        },
        "publisher": {
            "@type": "Organization",
            "name": "WhatsApp Groups Hub"
        },
        "datePublished": "2025-06-08",
        "dateModified": "2025-06-08"
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    {/* Hero Section */}
                    <div className="text-center mb-8">
                        <div className="flex justify-center mb-4">
                            <Chip color="success" variant="flat" className="mb-2">
                                🔥 Active Community • 500+ Members
                            </Chip>
                        </div>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Stickers WhatsApp Group 2025
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                            The ultimate community for sticker enthusiasts! Discover, share, and create amazing WhatsApp stickers with fellow creators.
                        </p>
                        
                        <Button
                            as={Link}
                            href="https://chat.whatsapp.com/BRdsr1x72PSFBeyuC2sIFo"
                            isExternal
                            size="lg"
                            color="success"
                            className="font-bold text-white px-8 py-3 text-lg"
                            startContent={<span>📱</span>}
                        >
                            Join WhatsApp Group Now
                        </Button>
                    </div>

                    <Card className="mb-8 shadow-lg">
                        <CardBody className="p-6 md:p-8">
                            <article>
                                {/* Breadcrumb */}
                                <nav className="text-sm text-gray-500 mb-4" aria-label="Breadcrumb">
                                    <span>Home</span> / <span>WhatsApp Groups</span> / <span className="text-gray-700 dark:text-gray-300">Stickers Group</span>
                                </nav>

                                {/* Meta Info */}
                                <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-500">
                                    <span>📅 Published: June 8, 2025</span>
                                    <span>👤 Author: Odat</span>
                                    <span>🏷️ Category: Entertainment</span>
                                </div>

                                {/* Featured Image */}
                                <div className="mb-8 text-center">
                                    <Image
                                        alt="WhatsApp Stickers Group - Funny and Creative Sticker Collection"
                                        className="object-cover rounded-xl shadow-md mx-auto"
                                        src="/sticker.png"
                                        width={400}
                                        height={300}
                                        loading="lazy"
                                    />
                                    <p className="text-sm text-gray-500 mt-2 italic">
                                        WhatsApp Stickers Group
                                    </p>
                                </div>

                                {/* Introduction */}
                                <div className="mb-8">
                                    <p className="text-lg leading-relaxed mb-4">
                                        Welcome to the most active <strong>Stickers WhatsApp Group</strong> of 2025! Our vibrant community of over 1,000 members is dedicated to sharing, discovering, and creating the best WhatsApp stickers available.
                                    </p>
                                    <p className="text-base leading-relaxed">
                                        Whether you&apos;re looking for funny memes, cute animals, expressive emotions, or custom designs, our group has everything you need to make your WhatsApp conversations more engaging and fun.
                                    </p>
                                </div>

                                {/* Benefits Section */}
                                <section className="mb-8">
                                    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
                                        Why Join Our Stickers Community?
                                    </h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <Card className="p-4 border-l-4 border-blue-500">
                                            <h3 className="font-bold text-lg mb-2">🎨 Creative Hub</h3>
                                            <p>Connect with talented sticker creators, share your own designs, and get inspired by amazing artwork from the community.</p>
                                        </Card>
                                        <Card className="p-4 border-l-4 border-green-500">
                                            <h3 className="font-bold text-lg mb-2">📚 Massive Library</h3>
                                            <p>Access thousands of stickers across all categories - from trending memes to professional designs, all organized and easy to find.</p>
                                        </Card>
                                        <Card className="p-4 border-l-4 border-purple-500">
                                            <h3 className="font-bold text-lg mb-2">🎯 Custom Requests</h3>
                                            <p>Need a specific sticker? Our community is always ready to help! Request custom stickers and get them created by skilled designers.</p>
                                        </Card>
                                        <Card className="p-4 border-l-4 border-orange-500">
                                            <h3 className="font-bold text-lg mb-2">🌟 Active Community</h3>
                                            <p>Join daily discussions, participate in sticker challenges, and be part of a friendly, supportive community of sticker enthusiasts.</p>
                                        </Card>
                                    </div>
                                </section>

                                {/* Group Rules */}
                                <section className="mb-8">
                                    <h2 className="text-2xl font-bold mb-4">📋 Group Guidelines</h2>
                                    <Card className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
                                        <div className="space-y-3">
                                            <div className="flex items-start gap-3">
                                                <span className="text-green-500 font-bold">✅</span>
                                                <p><strong>Respect everyone:</strong> Maintain a friendly and inclusive environment for all members.</p>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <span className="text-green-500 font-bold">✅</span>
                                                <p><strong>Share quality content:</strong> Only post stickers and sticker-related content.</p>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <span className="text-green-500 font-bold">✅</span>
                                                <p><strong>Help others:</strong> Assist fellow members with sticker requests and questions.</p>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <span className="text-red-500 font-bold">❌</span>
                                                <p><strong>No spam:</strong> Avoid repetitive messages or unrelated content.</p>
                                            </div>
                                        </div>
                                    </Card>
                                </section>

                                {/* Pro Tip */}
                                <section className="mb-8">
                                    <h2 className="text-2xl font-bold mb-4">💡 Pro Tips for New Members</h2>
                                    <Card className="p-6 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500">
                                        <ul className="space-y-2">
                                            <li>• Turn off auto-download for media to save storage: <Code className="text-sm">Settings → Storage and Data → Media auto-download</Code></li>
                                            <li>• Use sticker search feature to find specific packs quickly</li>
                                            <li>• Pin important sticker packs to your favorites for easy access</li>
                                            <li>• Introduce yourself when you join to get a warm welcome from the community</li>
                                        </ul>
                                    </Card>
                                </section>

                                {/* Call to Action */}
                                <section className="text-center mb-8">
                                    <h2 className="text-2xl font-bold mb-4">Ready to Join the Fun?</h2>
                                    <p className="text-lg mb-6 text-gray-600 dark:text-gray-300">
                                        Don&apos;t miss out on the best sticker community on WhatsApp! Join thousands of members who are already enjoying amazing stickers daily.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <Button
                                            as={Link}
                                            href="https://chat.whatsapp.com/BRdsr1x72PSFBeyuC2sIFo"
                                            isExternal
                                            size="lg"
                                            color="success"
                                            className="font-bold text-white px-8"
                                            startContent={<span>🚀</span>}
                                        >
                                            Join Now - It&apos;s Free!
                                        </Button>
                                        <Button
                                            as={Link}
                                            href="#comments"
                                            variant="bordered"
                                            size="lg"
                                            className="px-8"
                                            startContent={<span>💬</span>}
                                        >
                                            Read Comments
                                        </Button>
                                    </div>
                                </section>

                                {/* FAQ Section */}
                                <section className="mb-8">
                                    <h2 className="text-2xl font-bold mb-6">❓ Frequently Asked Questions</h2>
                                    <div className="space-y-4">
                                        <Card className="p-4">
                                            <h3 className="font-bold mb-2">Is the group really free to join?</h3>
                                            <p className="text-gray-600 dark:text-gray-300">Yes! Our stickers WhatsApp group is completely free to join and participate in.</p>
                                        </Card>
                                        <Card className="p-4">
                                            <h3 className="font-bold mb-2">How many stickers are available?</h3>
                                            <p className="text-gray-600 dark:text-gray-300">We have thousands of stickers across all categories, with new ones added daily by our active community.</p>
                                        </Card>
                                        <Card className="p-4">
                                            <h3 className="font-bold mb-2">Can I request custom stickers?</h3>
                                            <p className="text-gray-600 dark:text-gray-300">Absolutely! Our community loves helping with custom sticker requests. Just ask and someone will help you out.</p>
                                        </Card>
                                    </div>
                                </section>
                            </article>
                        </CardBody>
                    </Card>

                    <Spacer y={1} />
                    <div id="comments">
                        <CommentSection postID="stickers-whatsapp-group" />
                    </div>
                </div>
            </div>
        </>
    );
}