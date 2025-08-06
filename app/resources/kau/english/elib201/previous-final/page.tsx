'use client';
import { useState } from 'react'
import { Button, Card, CardBody, CardFooter, CardHeader, Radio, RadioGroup, Pagination, Spacer } from '@heroui/react'
import examDataJson from '@/public/elib201exam.json'


// Base interface for common question properties
interface BaseQuestion {
    id: number;
    options: {
        value: string;
        label: string;
    }[];
    correctAnswer: string;
}

// Interface for paragraph gap questions
interface ParagraphGapQuestion extends BaseQuestion {
    type: 'paragraph-gap';
    gapId: string;
}

// Interface for multiple choice questions
interface MultipleChoiceQuestion extends BaseQuestion {
    type: 'multiple-choice';
    text: string;
}

// Union type for all question types
type Question = ParagraphGapQuestion | MultipleChoiceQuestion;

// Section interfaces
interface BaseSection {
    id: number;
    type: string;
    title: string;
}

interface ParagraphGapSection extends BaseSection {
    type: 'paragraph-gap';
    paragraph: string;
    questions: ParagraphGapQuestion[];
}

interface MultipleChoiceSection extends BaseSection {
    type: 'multiple-choice';
    questions: MultipleChoiceQuestion[];
}

type Section = ParagraphGapSection | MultipleChoiceSection;

// Main exam interface
interface Exam {
    title: string;
    titleArabic: string;
    sections: Section[];
}

// Typecast the JSON to `Exam`
const examData: Exam = examDataJson as Exam;

export default function ExamPage() {
    const [currentSection, setCurrentSection] = useState<number>(0)
    const [currentQuestion, setCurrentQuestion] = useState<number>(0)
    const [answers, setAnswers] = useState<Record<string, string>>({})
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
    const [score, setScore] = useState<number>(0)

    const section = examData.sections[currentSection]
    const currentQuestionData = section.questions[currentQuestion]
    const totalQuestions = examData.sections.reduce((acc, section) => acc + section.questions.length, 0)

    const handleAnswer = (value: string) => {
        setAnswers(prev => ({
            ...prev,
            [`${currentSection}-${currentQuestion}`]: value
        }))
    }

    const handlePageChange = (page: number) => {
        let questionCount = 0
        let targetSection = 0
        let targetQuestion = 0

        for (let i = 0; i < examData.sections.length; i++) {
            const sectionQuestionCount = examData.sections[i].questions.length
            if (questionCount + sectionQuestionCount >= page) {
                targetSection = i
                targetQuestion = page - questionCount - 1
                break
            }
            questionCount += sectionQuestionCount
        }

        setCurrentSection(targetSection)
        setCurrentQuestion(targetQuestion)
    }

    const getCurrentQuestionNumber = (): number => {
        let questionNumber = currentQuestion + 1
        for (let i = 0; i < currentSection; i++) {
            questionNumber += examData.sections[i].questions.length
        }
        return questionNumber
    }

    const handleSubmit = () => {
        let correct = 0
        let total = 0

        examData.sections.forEach((section, sectionIndex) => {
            section.questions.forEach((question, questionIndex) => {
                const answer = answers[`${sectionIndex}-${questionIndex}`]
                if (answer === question.correctAnswer) {
                    correct++
                }
                total++
            })
        })

        setScore((correct / total) * 100)
        setIsSubmitted(true)
    }

    const renderParagraphWithHighlight = () => {
        if (section.type !== 'paragraph-gap' || !section.paragraph) return null

        const parts = section.paragraph.split(/(\[\d+\])/)
        return (
            <p className="text-lg leading-relaxed">
                {parts.map((part, index) => {
                    const gapMatch = part.match(/\[(\d+)\]/)
                    if (gapMatch) {
                        const gapNumber = parseInt(gapMatch[1])
                        const isCurrentGap = gapNumber === currentQuestionData.id
                        const answer = answers[`${currentSection}-${gapNumber - 1}`]
                        return (
                            <span
                                key={index}
                                className={`px-1 py-0.5 rounded ${
                                    isCurrentGap 
                                        ? 'bg-yellow-200 dark:bg-yellow-900 font-bold' 
                                        : answer
                                        ? 'bg-blue-100 dark:bg-blue-900'
                                        : 'bg-gray-100 dark:bg-gray-800'
                                }`}
                            >
                                {answer
                                    ? section.questions[gapNumber - 1].options.find(
                                        opt => opt.value === answer
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

    const renderQuestionText = (question: Question): string => {
        if ('text' in question) {
            return question.text
        }
        return `Select the answer for gap [${question.id}]:`
    }

    return (
        <div className="container mx-auto py-8 px-4">
            <Card className="max-w-3xl mx-auto">
                <CardHeader className="flex flex-col items-start">
                    <h1 className="text-2xl font-bold">{examData.title}</h1>
                    <h2 className="text-lg font-bold" dir='rtl'>{examData.titleArabic}</h2>
                    <h3 className="text-md font-medium mt-4">{section.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                        Question {getCurrentQuestionNumber()} of {totalQuestions}
                    </p>
                </CardHeader>
                <CardBody>
                    {!isSubmitted ? (
                        <div className="space-y-6">
                            {section.type === 'paragraph-gap' && section.paragraph && (
                                <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                                    {renderParagraphWithHighlight()}
                                </div>
                            )}
                            <div className="mt-4">
                                <p className="font-medium mb-2">
                                    {renderQuestionText(currentQuestionData)}
                                </p>
                                <RadioGroup
                                    value={answers[`${currentSection}-${currentQuestion}`] || ''}
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
                            {examData.sections.map((section, sectionIndex) => (
                                <div key={sectionIndex} className="space-y-4">
                                    <h4 className="font-medium">{section.title}</h4>
                                    {section.type === 'paragraph-gap' && section.paragraph && (
                                        <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                                            {renderParagraphWithHighlight()}
                                        </div>
                                    )}
                                    {section.questions.map((question, questionIndex) => (
                                        <div key={question.id} className="border dark:border-gray-700 rounded-lg p-4">
                                            <div className="flex items-start gap-2">
                                                {answers[`${sectionIndex}-${questionIndex}`] === question.correctAnswer ? (
                                                    <span className="text-green-500">✓</span>
                                                ) : (
                                                    <span className="text-red-500">✗</span>
                                                )}
                                                <div>
                                                    <p className="font-medium">
                                                        {'text' in question 
                                                            ? question.text
                                                            : `Gap [${question.id}]`
                                                        }
                                                    </p>
                                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                                        Your answer: {answers[`${sectionIndex}-${questionIndex}`]
                                                            ? question.options.find(opt => opt.value === answers[`${sectionIndex}-${questionIndex}`])?.label
                                                            : 'No answer'
                                                        }
                                                    </p>
                                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                                        Correct answer: {question.options.find(opt => opt.value === question.correctAnswer)?.label}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    )}
                </CardBody>
                {!isSubmitted && (
                    <CardFooter className="flex justify-between">
                        <Button
                            disabled={currentQuestion === 0 && currentSection === 0}
                            onPress={() => handlePageChange(getCurrentQuestionNumber() - 1)}
                        >
                            Previous
                        </Button>
                        <Pagination
                            page={getCurrentQuestionNumber()}
                            total={totalQuestions}
                            onChange={(page) => handlePageChange(page)}
                            showControls
                            showShadow
                            className="flex justify-center"
                        />
                        <Button
                            color="success"
                            onPress={currentQuestion + 1 === section.questions.length && currentSection + 1 === examData.sections.length ? handleSubmit : () => handlePageChange(getCurrentQuestionNumber() + 1)}
                        >
                            {currentQuestion + 1 === section.questions.length && currentSection + 1 === examData.sections.length
                                ? 'Submit'
                                : 'Next'}
                        </Button>
                    </CardFooter>
                )}
            </Card>
            <Spacer y={12} />
    
        </div>
    )
}
