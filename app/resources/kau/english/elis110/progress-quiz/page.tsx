'use client';
import React from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { Chip } from "@nextui-org/react";


const progressQuiz = [
    {
        id: 1,
        unit: "Unit 1",
        unitTitle: "People",
        reading: "https://t.me/ProgressQuiz/474",
        listening: "https://t.me/ProgressQuiz/474",
        type: "File",
        book: "Book 1"
    },
    {
        id: 2,
        unit: "Unit 3",
        unitTitle: "Lifestyle",
        reading: "https://t.me/ProgressQuiz/475",
        listening: "https://t.me/ProgressQuiz/475",
        type: "File",
        book: "Book 1"
    },
    {
        id: 3,
        unit: "Unit 4",
        unitTitle: "Places",
        reading: "https://t.me/ProgressQuiz/476",
        listening: "https://t.me/ProgressQuiz/476",
        type: "File",
        book: "Book 1"
    },
    {
        id: 4,
        unit: "Unit 5",
        unitTitle: "Jobs",
        reading: "https://t.me/ProgressQuiz/156",
        listening: "https://t.me/ProgressQuiz/254",
        type: "Messages",
        book: "Book 1"
    },
    {
        id: 5,
        unit: "Unit 6",
        unitTitle: "Homes and Buildings",
        reading: "https://t.me/ProgressQuiz/6",
        listening: "https://t.me/ProgressQuiz/6",
        type: "Messages",
        book: "Book 1"
    },
    {
        id: 6,
        unit: "Unit 1",
        unitTitle: "Places (Unlock 2)",
        reading: "https://t.me/ProgressQuiz/336",
        listening: "https://t.me/ProgressQuiz/307",
        type: "Messages",
        book: "Book 2"
    },

];

export default function ProgressQuiz() {
    return (
        <div className="flex w-full flex-col">
            <h1 className="text-2xl font-bold p-2 m-2 text-center">حلول اختبارات التقدم - علمي 1</h1>
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
