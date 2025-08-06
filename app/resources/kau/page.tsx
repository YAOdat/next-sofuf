'use client';

import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@heroui/react";
import { GrResources } from "react-icons/gr";
import { title } from "../../../components/primitives";

const subjects = [
    {
        name: "اللغة الإنجليزية",
        link: "/resources/kau/english",
        image: "https://cdn-icons-png.flaticon.com/512/5388/5388630.png",
        description: "شروحات، ملخصات، تسريبات لمادة اللغة الإنجليزية في جامعة الملك عبد العزيز",
    },
    {
        name: "الفيزياء",
        link: "/resources/kau/physics",
        image: "https://cdn-icons-png.flaticon.com/512/3254/3254075.png",
        description: "شروحات، ملخصات، تسريبات لمادة الفيزياء في جامعة الملك عبد العزيز",
    },
];

export default function ResourcesPage() {
    return (
        <div dir="rtl" className="flex flex-col items-center container mx-auto px-4 py-10">
            <h1 className={`${title()} text-center text-4xl md:text-5xl mb-12`}>
                جامعة الملك عبد العزيز
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-center">
                {subjects.map((subject) => (
                    <Card key={subject.name} className="max-w-[400px] mx-auto shadow-lg">
                        <CardHeader className="flex gap-4 items-center p-4">
                            <Image
                                alt={`${subject.name} logo`}
                                height={40}
                                radius="sm"
                                src={subject.image}
                                width={40}
                            />
                            <div className="text-right">
                                <p className="text-lg font-semibold">{subject.name}</p>
                            </div>
                        </CardHeader>
                        <Divider />
                        <CardBody className="text-right p-4">
                            <p className="text-sm text-gray-700 dark:text-gray-300">{subject.description}</p>
                        </CardBody>
                        <Divider />
                        <CardFooter className="flex justify-end p-4">
                            <Link href={subject.link} className="flex items-center text-primary hover:underline">
                                <span className="mr-1">تصفح</span>
                                <GrResources className="ml-1" />
                            </Link>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
