'use client';
import React from "react";
import { Tabs, Tab, Card, CardBody } from "@heroui/react";
import { Chip } from "@heroui/react";


const progressQuiz = [
    {
        id: 1,
        unit: "Unit 4",
        unitTitle: "Weather and Climate",
        reading: "https://t.me/ProgressQuiz/358",
        listening: "https://t.me/ProgressQuiz/358",
        type: "File",
        book: "Book 2"
    },
    {
        id: 2,
        unit: "Unit 6",
        unitTitle: "Business",
        reading: "https://t.me/ProgressQuiz/361",
        listening: "https://t.me/ProgressQuiz/361",
        type: "File",
        book: "Book 2"
    },
    {
        id: 3,
        unit: "Unit 1",
        unitTitle: "Animals",
        reading: "https://t.me/ProgressQuiz/91",
        listening: "https://t.me/ProgressQuiz/180",
        type: "Messages",
        book: "Book 3"
    },
    {
        id: 4,
        unit: "Unit 2",
        unitTitle: "The Environment",
        reading: "https://t.me/ProgressQuiz/107",
        listening: "https://t.me/ProgressQuiz/137",
        type: "Messages",
        book: "Book 3"
    },
    {
        id: 5,
        unit: "Unit 3",
        unitTitle: "Transport",
        reading: "https://t.me/ProgressQuiz/156",
        listening: "https://t.me/ProgressQuiz/45",
        type: "Messages",
        book: "Book 3"
    },
];


export default function ProgressQuiz() {
    return (
        <div className="flex w-full flex-col">
            <h1 className="text-2xl font-bold p-2 m-2">حلول اختبارات التقدم - علمي 2</h1>
            <Tabs aria-label="Options" variant='underlined'>
                {progressQuiz.map((quiz) => (
                    <Tab key={quiz.id} title={quiz.unit}>
                        <Card>
                            <CardBody>
                                <h2 className="text-xl font-bold">{quiz.unit}: {quiz.unitTitle}</h2>
                                <div className="flex justify-center items-center m-1 p-1">
                                    <Chip color="default">{quiz.book}</Chip>
                                </div>
                                <p>Listening: <a href={quiz.listening} target="_blank" rel="noopener noreferrer" className="text-cyan-500">Click here</a></p>
                                <p>Reading: <a href={quiz.reading}  target="_blank" rel="noopener noreferrer" className="text-cyan-500">Click here</a></p>
                            </CardBody>
                        </Card>
                    </Tab>
                ))}
            </Tabs>

        </div>
    );
}
