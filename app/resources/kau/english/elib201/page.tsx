'use client'

import React from "react";
import { Card, CardBody, CardHeader, Image, Link } from "@heroui/react";
import Head from "next/head";

const resource = {
  title: "Previous Final Exam",
  year: "2023-2024",
  description: "Access past final papers for ELIB 201.",
  imageUrl: "/previous-final-exam.jpg",
  imageAlt: "Previous Final Exam",
  link: "/resources/kau/english/elib201/previous-final",
};

export default function ELIB201Resources() {
  return (
    <div className="min-h-screen bg-background">
      <Head>
        <title>KAU English Resources - ELIB201</title>
        <meta
          name="description"
          content="English language resources for KAU students, including previous final exam materials for ELIB201 course."
        />
        <meta
          name="keywords"
          content="KAU, English, ELIB201, previous final exam, resources"
        />
      </Head>
      <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-foreground">
          KAU English Resources - ELIB201
        </h1>
        <div className="grid grid-cols-1 gap-6">
          <Link href={resource.link} isExternal={false}>
            <Card className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="p-0 overflow-hidden h-48">
                <Image
                  alt={resource.imageAlt}
                  src={resource.imageUrl}
                  className="w-full h-full object-cover"
                />
              </CardHeader>
              <CardBody className="p-4 flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-semibold text-foreground">
                    {resource.title}
                  </h4>
                  <p className="text-sm text-default-500 mb-2">
                    {resource.year}
                  </p>
                  <p className="text-sm text-foreground">{resource.description}</p>
                </div>
              </CardBody>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
}
