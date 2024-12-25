import React from "react";
import type { Metadata } from 'next'

export default function DocsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
 
	return (
		<section className="flex flex-col items-center justify-center">

			<div className="inline-block max-w-lg text-center justify-center">
				{children}
			</div>
		</section>
	);
}

export const metadata: Metadata = {
    title: 'Sentence Counter | Analyze Your Text',
	description: 'Quickly analyze your text with our Sentence & Word Counter. Count sentences, words, and improve your writing effortlessly.',
	keywords: 'text analysis tool, sentence counter, word counter, text analyzer, writing tools, count words, count sentences, writing analysis, sentence and word counter',
}