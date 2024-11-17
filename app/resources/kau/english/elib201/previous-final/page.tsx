'use client'

import { useState } from 'react'
import { Button, Card, CardBody, CardFooter, CardHeader, Radio, RadioGroup, Pagination, Spacer } from '@nextui-org/react'
import examData from '@/public/elib201exam.json'

export default function ExamPage() {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [answers, setAnswers] = useState<Record<number, string>>({})
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [score, setScore] = useState(0)

    const currentSection = examData.sections[0]
    const currentQuestionData = currentSection.questions[currentQuestion]

    const handleAnswer = (value: string) => {
        setAnswers(prev => ({
            ...prev,
            [currentQuestion]: value
        }))
    }

    const handlePageChange = (page: number) => {
        setCurrentQuestion(page - 1)
    }

    const handleSubmit = () => {
        const correctAnswers = currentSection.questions.reduce((acc, question) => {
            if (answers[question.id - 1] === question.correctAnswer) {
                return acc + 1
            }
            return acc
        }, 0)

        setScore((correctAnswers / currentSection.questions.length) * 100)
        setIsSubmitted(true)
    }

    const renderParagraphWithHighlight = () => {
        const parts = currentSection.paragraph.split(/(\[\d+\])/)
        return (
            <p className="text-lg leading-relaxed">
                {parts.map((part, index) => {
                    const gapMatch = part.match(/\[(\d+)\]/)
                    if (gapMatch) {
                        const gapNumber = parseInt(gapMatch[1])
                        const isCurrentGap = gapNumber === currentQuestionData.id
                        return (
                            <span
                                key={index}
                                className={`px-1 py-0.5 rounded ${
                                    isCurrentGap 
                                        ? 'bg-yellow-200 dark:bg-yellow-900 font-bold' 
                                        : answers[gapNumber - 1]
                                        ? 'bg-blue-100 dark:bg-blue-900'
                                        : 'bg-gray-100 dark:bg-gray-800'
                                }`}
                            >
                                {answers[gapNumber - 1] 
                                    ? currentSection.questions[gapNumber - 1].options.find(
                                        opt => opt.value === answers[gapNumber - 1]
                                      )?.label
                                    : `[${gapNumber}]`
                                }
                            </span>
                        )
                    }
                    return <span key={index}>{part}</span>
                })}
            </p>
        )
    }

    return (
        <div className="container mx-auto py-8 px-4">
            <Card className="max-w-3xl mx-auto">
                <CardHeader className="flex flex-col items-start">
                    <h1 className="text-2xl font-bold">{examData.title}</h1>
                    <h2 className="text-lg font-bold" dir='rtl'>{examData.titleArabic}</h2>
                    <h3 className="text-md font-medium mt-4">{currentSection.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                        Question {currentQuestion + 1} of {currentSection.questions.length}
                    </p>
                </CardHeader>
                <CardBody>
                    {!isSubmitted ? (
                        <div className="space-y-6">
                            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                                {renderParagraphWithHighlight()}
                            </div>
                            <div className="mt-4">
                                <p className="font-medium mb-2">Select the answer for gap [{currentQuestionData.id}]:</p>
                                <RadioGroup
                                    value={answers[currentQuestion] || ''}
                                    onValueChange={handleAnswer}
                                >
                                    {currentQuestionData.options.map((option) => (
                                        <Radio key={option.value} value={option.value}>
                                            {option.value}) {option.label}
                                        </Radio>
                                    ))}
                                </RadioGroup>
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-6">
                            <div className="bg-blue-100 dark:bg-blue-900 border-l-4 border-blue-500 text-blue-700 dark:text-blue-200 p-4" role="alert">
                                <p className="font-bold">Exam Complete!</p>
                                <p>Your score: {score.toFixed(1)}%</p>
                            </div>
                            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                                {renderParagraphWithHighlight()}
                            </div>
                            <div className="space-y-4">
                                {currentSection.questions.map((question, index) => (
                                    <div key={question.id} className="border dark:border-gray-700 rounded-lg p-4">
                                        <div className="flex items-start gap-2">
                                            {answers[index] === question.correctAnswer ? (
                                                <span className="text-green-500">✓</span>
                                            ) : (
                                                <span className="text-red-500">✗</span>
                                            )}
                                            <div>
                                                <p className="font-medium">Gap [{question.id}]</p>
                                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                                    Your answer: {answers[index] 
                                                        ? question.options.find(opt => opt.value === answers[index])?.label 
                                                        : 'Not answered'}
                                                </p>
                                                {answers[index] !== question.correctAnswer && (
                                                    <p className="text-sm text-red-500 dark:text-red-400">
                                                        Correct answer: {question.options.find(
                                                            opt => opt.value === question.correctAnswer
                                                        )?.label}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </CardBody>
                <CardFooter className="flex justify-between">
                    {!isSubmitted ? (
                        <>
                            <Pagination
                                total={currentSection.questions.length}
                                page={currentQuestion + 1}
                                onChange={handlePageChange}
                            />
                            <Spacer x={4} />
                            {currentQuestion === currentSection.questions.length - 1 ? (
                                <Button color="primary" onClick={handleSubmit}>Submit Exam</Button>
                            ) : (
                                <Button color="primary" onClick={() => handlePageChange(currentQuestion + 2)}>Next Question</Button>
                            )}
                        </>
                    ) : (
                        <Button
                            color="primary"
                            onClick={() => {
                                setIsSubmitted(false)
                                setCurrentQuestion(0)
                                setAnswers({})
                                setScore(0)
                            }}
                        >
                            Retake Exam
                        </Button>
                    )}
                </CardFooter>
            </Card>
        </div>
    )
}