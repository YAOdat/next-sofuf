import { title } from "@/components/primitives";
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'About - Sofuf',
	keywords: 'blog, posts, articles, news, updates, Sofuf blog, Sofuf posts, Sofuf articles, Sofuf news, Sofuf updates, Sofuf blog posts, Sofuf blog articles, Sofuf blog news, No copy right blog posts, Sofuf blog updates, Sofuf articles, Sofuf news, Sofuf updates, Sofuf blog articles, Sofuf blog news, Sofuf blog updates, Sofuf news, Sofuf updates, Sofuf blog news, Sofuf blog updates, Sofuf updates, Sofuf blog updates, Sofuf blog posts, Sofuf blog articles, Sofuf blog news, Sofuf blog updates, Sofuf articles, Sofuf news, Sofuf updates, Sofuf blog articles, Sofuf blog news, Sofuf blog updates, Sofuf news, Sofuf updates, Sofuf blog news, Sofuf blog updates, Sofuf updates, Sofuf blog updates, Sofuf blog posts, Sofuf blog articles, Sofuf blog news, Sofuf blog updates, Sofuf articles, Sofuf news, Sofuf updates, Sofuf blog articles, Sofuf blog news, Sofuf blog updates, Sofuf news, Sofuf updates, Sofuf blog news, Sofuf blog updates, Sofuf updates, Sofuf blog updates, Sofuf blog posts, Sofuf blog articles, Sofuf blog news, Sofuf blog updates, Sofuf articles, Sofuf news, Sofuf updates, Sofuf blog articles, Sofuf blog news, Sofuf blog updates, Sofuf news, Sofuf updates, Sofuf blog news, Sofuf blog updates, Sofuf updates, Sofuf blog updates, Sofuf blog posts, Sofuf blog articles, Sofuf blog news, Sofuf blog updates, Sofuf articles, Sofuf news, Sofuf updates, Sofuf blog articles, Sofuf blog news, Sofuf blog updates, Sofuf news, Sofuf updates, Sofuf blog news, Sofuf blog updates, Sofuf updates, Sofuf blog updates, Sofuf blog posts, Sofuf blog articles, Sofuf blog news, Sofuf blog updates, Sofuf articles, Sofuf news, Sofuf updates, Sofuf blog articles, Sofuf blog news, Sofuf blog updates, Sofuf news, Sofuf updates, Sofuf blog news, Sofuf blog updates, Sofuf updates, Sofuf blog updates, Sofuf blog posts, Sofuf blog articles, Sofuf blog news, Sofuf blog updates, Sofuf articles, Sofuf news, Sofuf updates, Sofuf blog articles',
	description: 'Sofuf is a platform dedicated to helping students by providing resources, links to WhatsApp learning groups, and much more to assist students in their academic journey. Our goal is to create a supportive and engaging environment for students, where they can find the help they need to succeed in their studies.',
	robots: 'index, follow',
}
export default function AboutPage() {
  return (
    <div className="p-4">
      <h1 className={title()}>About</h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
        Sofuf is a platform dedicated to helping students by providing resources, links to WhatsApp learning groups, and much more to assist students in their academic journey.
      </p>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
        Our goal is to create a supportive and engaging environment for students, where they can find the help they need to succeed in their studies.
      </p>
    </div>
  );
}