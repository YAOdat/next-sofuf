'use client'

import { useEffect, useState } from 'react'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Spinner, Card, CardBody, Switch, Accordion, AccordionItem } from "@heroui/react"
import { useTheme } from 'next-themes'

interface VocabWord {
  word: string
  arTranslation: string
  example: string
  example_ar: string
}

interface VocabCategory {
  category: string
  words: VocabWord[]
}

export default function VocabularyList() {
  const [vocabData, setVocabData] = useState<VocabCategory[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isArabic, setIsArabic] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/midvocabs110.json')
        if (!response.ok) {
          throw new Error('Failed to fetch data')
        }
        const data = await response.json()
        setVocabData(data)
      } catch (err) {
        setError('An error occurred while fetching data')
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner size="lg" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Card>
          <CardBody>
            <p className="text-danger">{error}</p>
          </CardBody>
        </Card>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <h1 className="text-3xl font-bold">Vocabulary</h1>
        <div className="flex items-center gap-4">
          <Switch
            checked={isArabic}
            onChange={() => setIsArabic(!isArabic)}
            size="lg"
            color="secondary"
          >
            {isArabic ? 'Arabic' : 'English'}
          </Switch>
          <Switch
            checked={theme === 'dark'}
            onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            size="lg"
            startContent={<span>🌞</span>}
            endContent={<span>🌙</span>}
          />
        </div>
      </div>
      <Accordion selectionMode="multiple" className="mb-10">
        {vocabData.map((category, index) => (
          <AccordionItem key={index} title={category.category}>
            <div className="overflow-x-auto">
              <Table aria-label={`Vocabulary for ${category.category}`}>
                <TableHeader>
                  <TableColumn>{isArabic ? 'الكلمة' : 'Word'}</TableColumn>
                  <TableColumn>{isArabic ? 'الترجمة الإنجليزية' : 'Arabic Translation'}</TableColumn>
                  <TableColumn>{isArabic ? 'مثال (عربي)' : 'Example (English)'}</TableColumn>
                  <TableColumn>{isArabic ? 'مثال (إنجليزي)' : 'Example (Arabic)'}</TableColumn>
                </TableHeader>
                <TableBody>
                  {category.words.map((word, idx) => (
                    <TableRow key={idx}>
                      <TableCell>{isArabic ? word.arTranslation : word.word}</TableCell>
                      <TableCell>{isArabic ? word.word : word.arTranslation}</TableCell>
                      <TableCell>{isArabic ? word.example_ar : word.example}</TableCell>
                      <TableCell>{isArabic ? word.example : word.example_ar}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}