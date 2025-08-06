import type { Metadata } from 'next'
import MontegAdService from '../../components/MontegAdService'

export default function BlogLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-lg text-center justify-center">
				{children}
			</div>
			{/* Monteg Ad Service - Only for blog pages */}
			<MontegAdService enabled={true} />
		</section>
	);
}

export const metadata: Metadata = {
	title: 'Sofuf Blog',
	keywords: 'blog, posts, articles, news, updates, Sofuf blog, Sofuf posts, Sofuf articles, Sofuf news, Sofuf updates, Sofuf blog posts, Sofuf blog articles, Sofuf blog news, No copy right blog posts, Sofuf blog updates, Sofuf articles, Sofuf news, Sofuf updates, Sofuf blog articles, Sofuf blog news, Sofuf blog updates, Sofuf news, Sofuf updates, Sofuf blog news, Sofuf blog updates, Sofuf updates, Sofuf blog updates, Sofuf blog posts, Sofuf blog articles, Sofuf blog news, Sofuf blog updates, Sofuf articles, Sofuf news, Sofuf updates, Sofuf blog articles, Sofuf blog news, Sofuf blog updates, Sofuf news, Sofuf updates, Sofuf blog news, Sofuf blog updates, Sofuf updates, Sofuf blog updates, Sofuf blog posts, Sofuf blog articles, Sofuf blog news, Sofuf blog updates, Sofuf articles, Sofuf news, Sofuf updates, Sofuf blog articles, Sofuf blog news, Sofuf blog updates, Sofuf news, Sofuf updates, Sofuf blog news, Sofuf blog updates, Sofuf updates, Sofuf blog updates, Sofuf blog posts, Sofuf blog articles, Sofuf blog news, Sofuf blog updates, Sofuf articles, Sofuf news, Sofuf updates, Sofuf blog articles, Sofuf blog news, Sofuf blog updates, Sofuf news, Sofuf updates, Sofuf blog news, Sofuf blog updates, Sofuf updates, Sofuf blog updates, Sofuf blog posts, Sofuf blog articles, Sofuf blog news, Sofuf blog updates, Sofuf articles, Sofuf news, Sofuf updates, Sofuf blog articles, Sofuf blog news, Sofuf blog updates, Sofuf news, Sofuf updates, Sofuf blog news, Sofuf blog updates, Sofuf updates, Sofuf blog updates, Sofuf blog posts, Sofuf blog articles, Sofuf blog news, Sofuf blog updates, Sofuf articles, Sofuf news, Sofuf updates, Sofuf blog articles, Sofuf blog news, Sofuf blog updates, Sofuf news, Sofuf updates, Sofuf blog news, Sofuf blog updates, Sofuf updates, Sofuf blog updates, Sofuf blog posts, Sofuf blog articles, Sofuf blog news, Sofuf blog updates, Sofuf articles, Sofuf news, Sofuf updates, Sofuf blog articles',
	description: 'Read the latest blog posts from Sofuf.',
	robots: 'index, follow',
}