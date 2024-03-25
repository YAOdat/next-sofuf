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
    title: 'Text Analyzer',
    description: 'Analyze text by counting the number of sentences and words in it.',
    keywords: 'text, analyzer, text analyzer, sentence, word, sentence counter, word counter',
}