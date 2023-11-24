import React from 'react';

export default function CareerAddLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
			<div className="inline-block max-w-lg text-center justify-center">
				{children}
			</div>
	);
}
