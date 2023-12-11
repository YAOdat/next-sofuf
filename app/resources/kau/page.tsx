'use client';

import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";
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

]


export default function ResourcesPage() {


    return (
        <div dir="rtl">
            <h1 className={`${title()}`}>جامعة الملك عبد العزيز</h1>
            {subjects.map((subject) => (
                <Card key={subject.name} className="max-w-[400px] mt-4">
                    <CardHeader className="flex gap-3">
                        <Image
                            alt={`${subject.name} logo`}
                            height={40}
                            radius="sm"
                            src={subject.image}
                            width={40}
                        />
                        <div className="flex flex-col justify-start items-start">
                            <p className="text-md">{subject.name}</p>
                            {/* <p className="text-small text-default-500">{subject.fullName}</p> */}
                        </div>
                    </CardHeader>
                    <Divider />
                    <CardBody className="text-right">
                        <p dir="rtl">{subject.description}</p>
                    </CardBody>
                    <Divider />
                    <CardFooter className="flex justify-end">
                        <Link href={subject.link}>
                            <GrResources className="mt-1" />
                            <span className="mr-1">تصفح</span>
                        </Link>
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
}
