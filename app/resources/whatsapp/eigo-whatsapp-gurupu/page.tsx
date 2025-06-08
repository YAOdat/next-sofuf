import React from "react";
import { Card, CardBody, Spacer, Link, Code, Image } from "@nextui-org/react";
import type { Metadata } from 'next';
import CommentSection from "@/components/commentSection";
import AdComponent from "@/components/AdComponent";

const englishGroups = [
  { name: '英語グループ1', link: 'https://chat.whatsapp.com/LyczdR1bJWGErr6ArcSBSx', language: '英語' },
  { name: '英語グループ2', link: 'https://chat.whatsapp.com/L6BzyM6siWzCvwlFINGhUN', language: '英語' },
  { name: '英語グループ3', link: 'https://chat.whatsapp.com/FMOdmLdsbRQCOUDPsvGoyf', language: '英語' },
  { name: '英語グループ4', link: 'https://chat.whatsapp.com/G4yKUNBwA6aAlwOPOUmpi1', language: '英語' },
  { name: '英語グループ5', link: 'https://chat.whatsapp.com/CAL43yKsm919DnmmtdGVNT', language: '英語' },
  { name: 'ボイスノートグループ', link: 'https://chat.whatsapp.com/DNAiOzxCkAVCsDA2oNnlJd', language: '英語' },
  { name: '英語・アラビア語グループ', link: 'https://chat.whatsapp.com/HeBS7UaTuH2HtSDMl9hj9x', language: '英語・アラビア語' }
];

const langGroups = [
  {
    name: "アラビア語 | 英語",
    description: "アラビア語と英語の学習者が集まるバイリンガルコミュニティに参加して、言語交換をしましょう。",
    link: "https://chat.whatsapp.com/HeBS7UaTuH2HtSDMl9hj9x",
  },
  {
    name: "英語 — ロシア語",
    description: "ロシア語と英語の話者が集まる多様な言語環境で、言語交換を体験しましょう。",
    link: "https://chat.whatsapp.com/CGmjCn9z94p4O6IraY5pvL"
  },
  {
    name: "トルコ語と英語",
    description: "トルコ語と英語の学習者とつながり、豊かな言語交換体験をしましょう。",
    link: "https://chat.whatsapp.com/LRDFFg2GR6B7rekwAo3mCS"
  },
  {
    name: "日本語-英語",
    description: "楽しくサポートのある環境で日本語と英語を練習するためにこのグループに参加しましょう。",
    link: "https://chat.whatsapp.com/BiCkJLiwf1y8SBXoKJlc5J"
  },
  {
    name: "タイ語 ไทย I 英語",
    description: "フレンドリーでインタラクティブな言語交換グループで、ネイティブスピーカーからタイ語と英語を学びましょう。",
    link: "https://chat.whatsapp.com/Je7gDVaz6tS28AwTvPuZoM"
  },
  {
    name: "英語 - フランス語",
    description: "英語とフランス語のスキルを向上させるためにこのグループに参加しましょう。",
    link: "https://chat.whatsapp.com/EQlwGRxgDjeJwo78SgQUkD"
  }
];

export const metadata: Metadata = {
  title: '英語WhatsAppグループに参加 | WhatsAppで英語を学ぶ',
  keywords: '英語WhatsAppグループ, オンラインで英語を学ぶ, 言語交換, 英語WhatsAppグループリンク, WhatsAppで英語を練習, 無料英語WhatsAppグループ2024, 英語スピーキングWhatsAppグループ, 英語学習WhatsAppグループ, 英語WhatsAppグループリンク, 英語を学ぶWhatsAppグループ, 英語チャットWhatsAppグループ, WhatsAppで英語を学ぶ, 英語WhatsApp, 英語チャットグループ',
  description: 'ネイティブスピーカーと英語を練習し、学ぶための無料WhatsAppグループに参加しましょう。実際の会話を通じてスピーキング、ライティング、リスニングスキルを向上させます。今すぐあなたにぴったりの言語交換グループを見つけましょう！',
  robots: 'index, follow',
  openGraph: {
    title: '無料英語WhatsAppグループに参加 | オンラインで英語を練習＆学習',
    description: '世界中の英語学習者とつながりましょう。実際の会話を通じて英語スキルを向上させるための無料WhatsAppグループに参加してください。',
    url: 'https://www.sofuf.com/resources/whatsapp/english-whatsapp-group',
    images: [{ url: 'https://www.sofuf.com/ewg-blog.png', alt: '英語WhatsAppグループリンク2024' }],
  },
};


export default function WhatsApp() {
  return (
    <div className="container mx-auto mt-8">
      <Card>
        <CardBody>
          <article className="max-w-full md:max-w-3xl lg:max-w-4xl mx-auto">
            <header>
              <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">英語WhatsAppグループ — WhatsAppで英語を学び、練習する</h1>
              <p className="text-xs md:text-sm font-thin mb-4">2025年1月10日 / 著者: Odat</p>
            </header>
            <div className="mb-4">
              <p className="md:text-base">
                私たちの<span className="font-bold">英語学習WhatsAppグループ</span>へようこそ！WhatsApp Messengerは多機能なインスタントメッセージングアプリで、テキストや音声メッセージの交換、音声およびビデオ通話、画像、ドキュメント、位置情報などのさまざまなメディアの共有が可能です。私自身が経験したように、このプラットフォームを利用して英語を練習することは非常に効果的です。
              </p >
              <Link className="font-bold mt-4" href='https://chat.whatsapp.com/LyczdR1bJWGErr6ArcSBSx' style={{ color: 'cyan' }} isExternal rel="noopener noreferrer">参加するにはここをタップ</Link>
            </div>
            <div className="max-w-full md:max-w-3xl lg:max-w-4xl mx-auto mb-8">
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">使い方:</h2>
              <ul className="list-disc pl-6 mb-4">
                <li className="mb-2"><span className="font-bold">ライティング練習: </span> グループ内でメッセージを作成して送信することで、ライティングスキルを磨きましょう。</li>
                <li className="mb-2"><span className="font-bold">リーディング練習:</span> 他のメンバーが作成したメッセージを読むことで、読解力を向上させましょう。</li>
                <li className="mb-2"><span className="font-bold">スピーキング練習:</span> ボイスノートを録音して送信し、英語のスピーキングを練習しましょう。</li>
                <li><span className="font-bold">リスニング練習: </span> 他のメンバーのボイスノートを注意深く聞くことで、リスニングスキルを向上させましょう。</li>
              </ul>
              <h4 className="font-semibold mb-2">参加前に:</h4>
              <ol className="list-decimal pl-6 mb-4">
                <li className="mb-2">基本的な英語の理解があることを確認してください。</li>
                <li className="mb-2">WhatsAppで自動メディアダウンロードを無効にしてください（<span className="italic">設定 {">"} データとストレージの使用量 {">"} すべてのダウンロードをオフにする</span>）。</li>
                <li className="mb-2">参加後すぐにグループをミュートしてください。</li>
                <li>説明に記載されているグループルールを確認してください。</li>
              </ol>
              <h3 className="text-lg font-semibold mb-2">英語学習WhatsAppグループに参加:</h3>
              <p className="mb-4">参加するには、各グループの横にあるリンクをクリックしてください。WhatsAppがインストールされていない場合は、<a target="_blank" href="https://www.whatsapp.com/download" className="text-blue-500">こちらからダウンロード</a>してください。</p>
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">WhatsAppグループリンク:</h2>
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
                alt="無料英語WhatsAppグループ2024に参加"
                className="object-cover rounded-xl"
                src="/ewg-blog.png"
                width={300}
                loading="lazy"
              />
            </div>

            <div className="max-w-full md:max-w-2xl mx-auto">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">言語交換グループで英語力を向上させよう</h3>

              {langGroups.map((group, index) => (
                <div key={index} className="mb-8">
                  <h3 className="mb-4">言語交換のためのバイリンガルコミュニティに参加:</h3>
                  <h4 className="text-lg md:text-xl lg:text-2xl font-bold mb-2">{group.name} WhatsAppグループ:</h4>
                  <div className="mb-2">
                    <li key={index} className="mb-2">
                      {group.name}:<br />{group.description}<Code className="text-blue-500 break-words bg-cyan-900 mt-4" ><Link className="responsiveLinkSize" href={group.link} target="_blank" rel="noopener noreferrer">{group.link}</Link>
                      </Code>
                    </li>
                  </div>

                </div>
              ))}

              <p className="mb-8">
                WhatsAppをお持ちでない方には、英語のTelegramグループも用意しています。
                会話に参加して、サポートのあるコミュニティで英語スキルを向上させましょう。
              </p>

              英語Telegramグループ:<br /><Code className="text-blue-500 break-words bg-cyan-900 mt-4" ><Link href="https://t.me/theEnglishTelegram" style={{ fontSize: '12px', color: 'cyan' }} target="_blank" rel="noopener noreferrer">https://t.me/theEnglishTelegram</Link>
              </Code>
            </div>

          </article>
        </CardBody>
      </Card>

      <Spacer y={1} />
      <CommentSection postID={"ja-en-whatsapp-group"} />
    </div>
  );
}