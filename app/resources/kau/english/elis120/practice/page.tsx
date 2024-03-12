'use client';
import React, { useState, useEffect } from "react";
import { Pagination, Chip, Button } from "@nextui-org/react";
import { FaRedo } from "react-icons/fa";
import type { Metadata } from 'next'

const metadata: Metadata = {
    title: 'امتحان تجريبي للغة - جامعة الملك عبد العزيز',
    description: ' اختبار تجريبي للغة الإنجليزية للمستوى الثاني - علمي  في جامعة الملك عبد العزيز.',
    keywords: 'تسريبات اختبار اللغة الإنجليزية، اختبار سابق انقلش، جامعة الملك عبد العزيز، معهد اللغة الإنجليزية.'
}

const readingQuestions = [
    {
        question: "What does the article say about Careem's website?",
        options: [
            "It first came out in 2015.",
            "It was originally for business and the general public.",
            "It's available in 14 different languages.",
            "It was their only option at first."
        ],
        answer: "It was their only option at first."
    },
    {
        question: "Why did Careem start the popular app where regular people could book rides around a city, like we do today?",
        options: [
            "The website had too many problems.",
            "Dubai was very congested, and this would reduce the problem.",
            "There were not a lot of business customers.",
            "A lot of people wanted this kind of service."
        ],
        answer: "A lot of people wanted this kind of service."
    },
    {
        question: "Why does the text mention different countries?",
        options: [
            "To mention the most important countries for Careem.",
            "To list all the countries that Careem has plans to work in.",
            "To mention the order of countries that Careem expanded to.",
            "To describe how big Careem has grown."
        ],
        answer: "To describe how big Careem has grown."
    },
    {
        question: "Why was competing against Uber challenging for Careem, according to the article?",
        options: [
            "Uber had a lot of unique aspects of their company.",
            "Uber had more money than Careem.",
            "Uber had more options on its app.",
            "Uber had better customer service."
        ],
        answer: "Uber had more money than Careem."
    },
    {
        question: "What does Careem consider its biggest competitor?",
        options: [
            "Regular taxis",
            "Other transport companies",
            "People having their own cars",
            "Uber"
        ],
        answer: "People having their own cars"
    },
    {
        question: "Which of the following statements is true about Uber, according to the article?",
        options: [
            "You can choose a ride in advance.",
            "It is not planning to expand in the Middle East, Africa and South Asia.",
            "It started as a mobile app and then added a website.",
            "Saudi Arabia is not its largest market in the Middle East."
        ],
        answer: "You can choose a ride in advance.",
    },
    {
        question: "Which two statements does the article say about the growth of Careem?",
        options: [
            "Careem tried to be different from Uber so it could grow.",
            "Careem grew in the Middle East faster than Uber.",
            "After it expanded to other Middle Eastern countries, Careem expanded to South Asia.",
            "Careem grew quickly because it started with regular customers, then added businesses."
        ],
        answer: '',
        answers: [
            "Careem tried to be different from Uber so it could grow.",
            "After it expanded to other Middle Eastern countries, Careem expanded to South Asia."
        ],
        multiple: true

    },
    {
        question: "Which three statements are true about Careem, according to the article?",
        options: [
            "It is owned by another company.",
            "You can use it to ride in a bus.",
            "They offer the same services in every city.",
            "It provides a lot of jobs for people."
        ],
        answer: '',
        answers: [
            "It is owned by another company.",
            "You can use it to ride in a bus.",
            "It provides a lot of jobs for people."
        ],
        multiple: true

    }

]


export default function PracticeTest() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState(new Array(readingQuestions.length).fill(null));
    const [multipleChoiceAnswers, setMultipleChoiceAnswers] = useState(new Array(readingQuestions.length).fill([]));
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [Section, setSection] = useState('Reading');

    useEffect(() => {
        // Clear answers only when the component mounts
        if (currentQuestionIndex === 0) {
            setAnswers(new Array(readingQuestions.length).fill(null));
            setMultipleChoiceAnswers(new Array(readingQuestions.length).fill([]));
        }
    }, [currentQuestionIndex]);

    const handleRadioChange = (e: { target: { value: any; }; }) => {
        const newAnswers = [...answers];
        newAnswers[currentQuestionIndex] = e.target.value;
        setAnswers(newAnswers);
    }

    const handleMultipleChoiceChange = (e: { target: { checked: any; value: any; }; }) => {
        const newMultipleChoiceAnswers = [...multipleChoiceAnswers];
        const selectedOptions = newMultipleChoiceAnswers[currentQuestionIndex];

        if (e.target.checked) {
            selectedOptions.push(e.target.value);
        } else {
            const index = selectedOptions.indexOf(e.target.value);
            if (index !== -1) {
                selectedOptions.splice(index, 1);
            }
        }

        newMultipleChoiceAnswers[currentQuestionIndex] = selectedOptions;
        setMultipleChoiceAnswers(newMultipleChoiceAnswers);
    };

    const handleSubmit = () => {
        setIsSubmitted(true);
    }


    const getIncorrectAnswers = () => {
        const incorrectAnswers: { question: string; correctAnswer: string; yourAnswer: any; }[] = [];
        for (let i = 0; i < readingQuestions.length; i++) {
            if (answers[i] !== readingQuestions[i].answer) {
                incorrectAnswers.push({
                    question: readingQuestions[i].question,
                    correctAnswer: readingQuestions[i].answer,
                    yourAnswer: answers[i],
                });
            }
        }
        return incorrectAnswers;
    }

    const calculateScore = () => {
        let score = 0;

        // Single choice questions
        for (let i = 0; i < readingQuestions.length; i++) {
            if (answers[i] === readingQuestions[i].answer) {
                score += 1;
            }
        }

        // Multiple choice questions
        for (let i = 0; i < multipleChoiceAnswers.length; i++) {
            const selectedOptions = multipleChoiceAnswers[i];
            const correctAnswers = readingQuestions[i].answers;

            // Check each selected option
            selectedOptions.forEach((option: string) => {
                // Check if 'correctAnswers' is defined and if the selected option is a correct answer
                if (correctAnswers && correctAnswers.includes(option)) {
                    score += 1; // +1 point for each correct answer in a multiple-choice question
                }
            });
        }

        return score;
    };



    return (
        <div>
            <h1 className="text-2xl font-bold">Practice Test</h1>
            {Section === 'Grammar' && <div className="my-2 py-1"> Section: <Chip color="warning" variant="dot">Grammar</Chip> </div>}
            {Section === 'Reading' && <div className="my-2 py-1"> Section: <Chip color="warning" variant="dot">Reading</Chip> </div>}
            <h1 className="text-3xl font-bold mb-4 my-2">Careem: Ride-sharing that Transformed Transportation</h1>
            <div className="container mx-auto px-4 py-8 text-left">
                <p className="mb-4">Careem is a ride sharing company with over 30 million users. It operates in over 90 cities in 14 different countries. It is a new company which has changed transport and the way people move around. Careem was started in 2012 in Dubai by two men, Mubashir Sheika and Magnus Dickson. At first, Careem was only for business and was website based. Companies could schedule their employees trips online through the website. Due to the huge demand, they began working on a product for the general public. The popular public app did not come around until 2015.
                </p>

                <p className="mb-4">Careem began operating in the UAE, but then quickly spread to other countries in the Middle East. Saudi Arabia is now its largest market. Following this, Careem grew as far west as Morocco, as far north as Turkey, and as far east as Pakistan. Careem has other ride sharing forms of transport, including bicycles and buses. These are only in a few cities.
                </p>

                <p className="mb-4">Another ride sharing company is Uber, but there are some key differences. Uber started doing business in the Middle East in 2013. Careem was a new, small company trying to compete with Uber, a very large company with a lot of money. It had to develop aspects of the company that made it different from Uber. The two main aspects were the ability to choose a ride in advance (now Uber has this option) and through a more personal customer service experience (something that Uber still lacks). These differences have helped Careem to grow quickly throughout the Middle East, Africa, and South Asia, even though Uber is in those same places. However, Careem thinks the biggest competitor is people owning cars, not another company. Most people that use Careem today, did not switch from using taxis or other companies. They used to drive their own cars.</p>
                <p className="mb-4">In 2019, Uber bought Careem for $3.1 billion, though the companies have both continued to operate separately. Careem has over 1 million drivers, or captains, providing many jobs in the countries it works in. Careem thinks that it will grow a lot in the future and has big ideas of what is next.
                </p>

            </div>
            <div className="container mx-auto px-4 py-8 text-left">
                <h1 className="text-2xl font-bold">Questions</h1>
                <div className="my-4">
                    {readingQuestions.length > 0 && (
                        <div className="my-4">
                            <h2 className="text-lg font-bold">{currentQuestionIndex + 1}. {readingQuestions[currentQuestionIndex].question}</h2>
                            <div className="flex flex-col">
                                {readingQuestions[currentQuestionIndex].options.map((option, i) => (
                                    <div key={i} className="flex items-center my-2">
                                        {readingQuestions[currentQuestionIndex].multiple ? (
                                            <input
                                                type="checkbox"
                                                id={`option-${currentQuestionIndex}-${i}`}
                                                name={`question-${currentQuestionIndex}`}
                                                value={option}
                                                checked={multipleChoiceAnswers[currentQuestionIndex].includes(option)}
                                                onChange={handleMultipleChoiceChange}
                                            />
                                        ) : (
                                            <input
                                                type="radio"
                                                id={`option-${currentQuestionIndex}-${i}`}
                                                name={`question-${currentQuestionIndex}`}
                                                value={option}
                                                checked={answers[currentQuestionIndex] === option}
                                                onChange={handleRadioChange}
                                            />
                                        )}
                                        <label htmlFor={`option-${currentQuestionIndex}-${i}`} className="ml-2">{option}</label>
                                    </div>
                                ))}
                            </div>
                            <div className="flex w-full flex-col">
                                <Pagination className='my-2 mx-auto block' total={readingQuestions.length} initialPage={1} onChange={(page) => setCurrentQuestionIndex(page - 1)} />
                            </div>
                        </div>

                    )}
                    {isSubmitted ? (
                        <div>
                            <h2>Your Score: {calculateScore()} / 11</h2>
                            {getIncorrectAnswers().length > 0 && (
                                <div>
                                    {/* // if the score is equal to 11 do not show */}
                                    {calculateScore() !== 11 &&
                                        <>
                                            <h3>Incorrect Answers:</h3>
                                            <ul>
                                                {getIncorrectAnswers().map((incorrectAnswer, index) => (
                                                    <li key={index} className="my-2">
                                                        <strong>Question {index + 1}:</strong> {incorrectAnswer.question} <br />
                                                        <strong>Correct Answer:</strong> {incorrectAnswer.correctAnswer} <br />
                                                    </li>
                                                ))}
                                            </ul>
                                        </>
                                    }
                                </div>
                            )}
                            <Button color="secondary" className='my-2' onClick={() => setIsSubmitted(false)}> <FaRedo /> Retake Test </Button>
                        </div>
                    ) :
                        <Button color="primary" variant="bordered" className='my-2 mx-auto block' onClick={handleSubmit}>Submit</Button>
                    }

                </div>
            </div>
        </div>
    );
}
