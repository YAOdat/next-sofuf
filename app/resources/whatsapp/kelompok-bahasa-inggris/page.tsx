import React from "react";
import { Card, CardBody, Spacer, Link, Code, Image } from "@nextui-org/react";
import type { Metadata } from 'next';
import CommentSection from "@/components/commentSection";
import AdComponent from "@/components/AdComponent";

const kelompokBahasaInggris = [
  { nama: 'Kelompok Bahasa Inggris 1', link: 'https://chat.whatsapp.com/LyczdR1bJWGErr6ArcSBSx', bahasa: 'Inggris' },
  { nama: 'Kelompok Bahasa Inggris 2', link: 'https://chat.whatsapp.com/L6BzyM6siWzCvwlFINGhUN', bahasa: 'Inggris' },
  { nama: 'Kelompok Bahasa Inggris 3', link: 'https://chat.whatsapp.com/FMOdmLdsbRQCOUDPsvGoyf', bahasa: 'Inggris' },
  { nama: 'Kelompok Bahasa Inggris 4', link: 'https://chat.whatsapp.com/G4yKUNBwA6aAlwOPOUmpi1', bahasa: 'Inggris' },
  { nama: 'Kelompok Bahasa Inggris 5', link: 'https://chat.whatsapp.com/CAL43yKsm919DnmmtdGVNT', bahasa: 'Inggris' },
  { nama: 'Kelompok Catatan Suara', link: 'https://chat.whatsapp.com/DNAiOzxCkAVCsDA2oNnlJd', bahasa: 'Inggris' },
  { nama: 'Kelompok Bahasa Inggris-Arab', link: 'https://chat.whatsapp.com/HeBS7UaTuH2HtSDMl9hj9x', bahasa: 'InggrisArab' }
];

const kelompokBahasa = [
  {
    nama: "Arab | Inggris",
    deskripsi: "Bergabunglah dengan komunitas bilingual ini di mana pembelajar bahasa Arab dan Inggris berkumpul untuk pertukaran bahasa.",
    link: "https://chat.whatsapp.com/HeBS7UaTuH2HtSDMl9hj9x",
  },
  {
    nama: "Inggris — Pyсский",
    deskripsi: "Selami lingkungan linguistik yang beragam dengan penutur bahasa Rusia dan Inggris dalam kelompok pertukaran bahasa ini.",
    link: "https://chat.whatsapp.com/CGmjCn9z94p4O6IraY5pvL"
  },
  {
    nama: "Türkçe Ve İngilizce",
    deskripsi: "Terhubung dengan sesama pembelajar dalam kelompok yang menampung bahasa Turki dan Inggris untuk pengalaman pertukaran bahasa yang kaya.",
    link: "https://chat.whatsapp.com/LRDFFg2GR6B7rekwAo3mCS"
  },
  {
    nama: "Jepang(日本語)-Inggris(英語)",
    deskripsi: "Bergabunglah dengan kelompok ini untuk berlatih bahasa Jepang dan Inggris dalam lingkungan yang menyenangkan dan mendukung.",
    link: "https://chat.whatsapp.com/BiCkJLiwf1y8SBXoKJlc5J"
  },
  {
    nama: "Thai ไทย I Inggris",
    deskripsi: "Belajar bahasa Thai dan Inggris dari penutur asli dalam kelompok pertukaran bahasa yang ramah dan interaktif ini.",
    link: "https://chat.whatsapp.com/Je7gDVaz6tS28AwTvPuZoM"
  },
  {
    nama: "Inggris - Français",
    deskripsi: "Bergabunglah dengan kelompok ini untuk meningkatkan keterampilan bahasa Inggris dan Prancis Anda.",
    link: "https://chat.whatsapp.com/EQlwGRxgDjeJwo78SgQUkD"
  }
];

export const metadata: Metadata = {
  title: 'Bergabung dengan Grup WhatsApp Bahasa Inggris | Belajar Bahasa Inggris di WhatsApp',
  keywords: 'Grup WhatsApp Bahasa Inggris, belajar bahasa Inggris online, pertukaran bahasa, link grup WhatsApp Bahasa Inggris, praktik bahasa Inggris di WhatsApp, grup WhatsApp Bahasa Inggris gratis 2024, grup WhatsApp berbicara bahasa Inggris, grup WhatsApp belajar bahasa Inggris, link grup WhatsApp bahasa Inggris, grup WhatsApp belajar bahasa Inggris, grup WhatsApp chatting bahasa Inggris, belajar bahasa Inggris WhatsApp, bahasa Inggris WhatsApp, grup chatting bahasa Inggris',
  description: 'Bergabunglah dengan grup WhatsApp Bahasa Inggris gratis untuk berlatih dan belajar bahasa Inggris dengan penutur asli. Tingkatkan keterampilan berbicara, menulis, dan mendengarkan Anda melalui percakapan nyata. Temukan grup pertukaran bahasa Inggris yang sempurna untuk Anda sekarang!',
  robots: 'index, follow',
  openGraph: {
    title: 'Bergabung dengan Grup WhatsApp Bahasa Inggris Gratis | Berlatih & Belajar Bahasa Inggris Online',
    description: 'Terhubung dengan pembelajar bahasa Inggris di seluruh dunia. Bergabunglah dengan grup WhatsApp gratis kami untuk meningkatkan keterampilan bahasa Inggris Anda melalui percakapan nyata.',
    url: 'https://www.sofuf.com/resources/whatsapp/english-whatsapp-group',
    images: [{ url: 'https://www.sofuf.com/ewg-blog.png', alt: 'Link Grup WhatsApp Bahasa Inggris 2024' }],
  },
};


export default function WhatsApp() {
  return (
    <div className="container mx-auto mt-8">
      <Card>
        <CardBody>
          <article className="max-w-full md:max-w-3xl lg:max-w-4xl mx-auto">
            <header>
              <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">Grup WhatsApp Bahasa Inggris — Belajar dan Berlatih Bahasa Inggris di WhatsApp</h1>
              <p className="text-xs md:text-sm font-thin mb-4">2025 - 01 - 10 / Penulis: Odat</p>
            </header>
            <div className="mb-4">
              <p className="md:text-base">
                Selamat datang di <span className="font-bold">Grup WhatsApp Belajar Bahasa Inggris</span> kami! WhatsApp Messenger, aplikasi pesan instan serbaguna, memungkinkan pengguna untuk bertukar pesan teks dan suara, melakukan panggilan suara dan video, serta berbagi berbagai format media, termasuk gambar, dokumen, dan lokasi pengguna. Memanfaatkan platform ini untuk berlatih bahasa Inggris terbukti sangat bermanfaat, seperti yang saya temukan sendiri.
              </p >
              <Link className="font-bold mt-4" href='https://chat.whatsapp.com/LyczdR1bJWGErr6ArcSBSx' style={{ color: 'cyan' }} isExternal rel="noopener noreferrer">Klik Di Sini untuk Bergabung</Link>
            </div>
            <div className="max-w-full md:max-w-3xl lg:max-w-4xl mx-auto mb-8">
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">Cara Kerjanya:</h2>
              <ul className="list-disc pl-6 mb-4">
                <li className="mb-2"><span className="font-bold"> Latihan Menulis: </span> Asah keterampilan menulis Anda dengan menulis dan mengirim pesan dalam grup.</li>
                <li className="mb-2"><span className="font-bold">Latihan Membaca:</span> Tingkatkan kemampuan membaca Anda dengan membaca pesan yang dibuat oleh anggota grup lainnya.</li>
                <li className="mb-2"><span className="font-bold">Latihan Berbicara:</span> Rekam dan kirim catatan suara untuk melatih bahasa Inggris lisan Anda.</li>
                <li><span className="font-bold">Latihan Mendengarkan: </span> Kembangkan keterampilan mendengarkan Anda dengan mendengarkan catatan suara dari anggota grup lainnya.</li>
              </ul>
              <h4 className="font-semibold mb-2">Sebelum Bergabung:</h4>
              <ol className="list-decimal pl-6 mb-4">
                <li className="mb-2">Pastikan Anda memiliki pemahaman dasar bahasa Inggris.</li>
                <li className="mb-2">Nonaktifkan unduhan media otomatis di WhatsApp (<span className="italic">Pengaturan {">"} Penggunaan Data dan Penyimpanan {">"} Matikan semua unduhan</span>).</li>
                <li className="mb-2">Bisukan grup segera setelah bergabung.</li>
                <li>Kenali aturan grup yang diuraikan dalam deskripsi.</li>
              </ol>
              <h3 className="text-lg font-semibold mb-2">Bergabunglah dengan Grup WhatsApp Belajar Bahasa Inggris Kami:</h3>
              <p className="mb-4">Untuk bergabung, cukup klik pada link di samping setiap grup. Jika Anda belum menginstal WhatsApp, <a target="_blank" href="https://www.whatsapp.com/download" className="text-blue-500">unduh di sini</a>.</p>
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">Link Grup WhatsApp:</h2>
              <div className="mb-4">
                <div className="flex flex-wrap mb-4">
                  <ul className="list-disc pl-6 mb-4">
                    {kelompokBahasaInggris.map((kelompok, index) => (
                      <li key={index} className="mb-2">
                        {kelompok.nama}:<br></br><Code className="text-blue-500 break-words bg-cyan-900" ><Link href={kelompok.link} className="responsiveLinkSize" target="_blank" rel="noopener noreferrer">{kelompok.link}</Link>
                        </Code>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="mb-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Image
                alt="Bergabung dengan Grup WhatsApp Bahasa Inggris Gratis 2024"
                className="object-cover rounded-xl"
                src="/ewg-blog.png"
                width={300}
                loading="lazy"
              />
            </div>

            <div className="max-w-full md:max-w-2xl mx-auto">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">Tingkatkan Bahasa Inggris Anda dengan Grup Pertukaran Bahasa</h3>

              {kelompokBahasa.map((kelompok, index) => (
                <div key={index} className="mb-8">
                  <h3 className="mb-4">Bergabunglah dengan komunitas bilingual kami untuk pertukaran bahasa:</h3>
                  <h4 className="text-lg md:text-xl lg:text-2xl font-bold mb-2">{kelompok.nama} Grup WhatsApp:</h4>
                  <div className="mb-2">
                    <li key={index} className="mb-2">
                      {kelompok.nama}:<br />{kelompok.deskripsi}<Code className="text-blue-500 break-words bg-cyan-900 mt-4" ><Link className="responsiveLinkSize" href={kelompok.link} target="_blank" rel="noopener noreferrer">{kelompok.link}</Link>
                      </Code>
                    </li>
                  </div>

                </div>
              ))}

              <p className="mb-8">
                Bagi mereka yang tidak memiliki WhatsApp, kami juga menawarkan grup Telegram Bahasa Inggris untuk latihan bahasa.
                Bergabunglah dalam percakapan dan tingkatkan keterampilan bahasa Inggris Anda dalam komunitas yang mendukung.
              </p>

              Grup Telegram Bahasa Inggris:<br /><Code className="text-blue-500 break-words bg-cyan-900 mt-4" ><Link href="https://t.me/theEnglishTelegram" style={{ fontSize: '12px', color: 'cyan' }} target="_blank" rel="noopener noreferrer">https://t.me/theEnglishTelegram</Link>
              </Code>
            </div>

          </article>
        </CardBody>
      </Card>

      <Spacer y={1} />
      <CommentSection postID={"indo-whatsapp-group"} />
    </div>
  );
}