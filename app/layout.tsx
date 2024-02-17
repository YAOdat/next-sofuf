import "@/styles/globals.css";
import type { Metadata } from 'next'
// import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
	title: 'Home | Sofuf',
	description: 'Sofuf is a comprehensive platform for learning and resources.',
	keywords: 'sofuf, odat, KAU, MOE, King AbdulAziz University, Sofof',
	viewport: 'width=device-width, initial-scale=1.0',
	robots: 'index, follow',
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head >
			<script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-FJ4P5C4K33`}
		  
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag() {
                window.dataLayer.push(arguments);
              }
              gtag('js', new Date());
              gtag('config', 'G-FJ4P5C4K33');
            `,
          }}
        />
			</head>
			<body
				className={clsx(
					"min-h-screen bg-background font-sans antialiased",
					fontSans.variable
				)}
				>
				<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
					<div className="relative flex flex-col h-screen">
						<Navbar />
						<main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
							{children}
						</main>
						<footer className="w-full flex items-center justify-center py-3">
							<Link
								isExternal
								className="flex items-center gap-1 text-current"
								href="/odat"
								// title="Odat homepage"
								>
								<span className="text-default-600">Powered by</span>
								<p className="text-primary">Sofuf</p>
							</Link>
						</footer>
					</div>
				</Providers>
				<Analytics />

			</body>
		</html>
	);
}
