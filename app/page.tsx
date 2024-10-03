import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { MdBusinessCenter } from "react-icons/md";
import AdComponent from "@/components/AdComponent"; // Import the ad component

export default function Home() {
	return (
		<> 
			<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
				<div className="inline-block max-w-lg text-center justify-center">
					<h1 className={title()}>Your&nbsp;</h1>
					<h1 className={title({ color: "cyan" })}>Learning&nbsp;</h1>
					<br />
					<h1 className={title()}>Journey Starts Here</h1>
					<h2 className={subtitle({ class: "mt-4" })}>
						Unlock the world of knowledge with Sofuf, a comprehensive platform for learning and resources.
					</h2>
				</div>

				<div className="flex gap-3" aria-label="Main Navigation">
					<Link
						href={siteConfig.links.docs}
						className={buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}
						title="Access learning resources"
					>
						Resources
					</Link>
					<Link
						className={buttonStyles({ variant: "bordered", radius: "full" })}
						href={siteConfig.links.github}
						title="Explore career opportunities"
					>
						<MdBusinessCenter size={20} aria-hidden="true" />
						<span className="sr-only">Careers</span> {/* Improves accessibility */}
						Careers
					</Link>
				</div>

				<div className="mt-8">
					<Snippet hideSymbol hideCopyButton variant="flat">
						<span>
							Contact us <Code color="primary"><Link href="https://t.me/odatt" isExternal rel="noopener noreferrer" title="Contact us on Telegram">t.me/odatt</Link></Code>
						</span>
					</Snippet>
				</div>
			</section>

			{/* Ad Section */}
			<section className="flex flex-col items-center justify-center gap-4 py-6 bg-gray-100 border-t" aria-label="Sponsored Advertisement">
				<h3 className={title({ color: "violet" })}>Sponsored Ad</h3>
				<p className="text-center text-sm text-gray-600 mb-4">
					Support us by checking out this sponsored content.
				</p>

				{/* Ad Component */}
				<AdComponent />

			</section>

			{/* Footer */}
			<footer className="w-full flex items-center justify-center py-3" aria-label="Footer">
				<Link
					className="flex items-center gap-1 text-current"
					href="/about"
					title="Learn more about Sofuf"
				>
					<span className="text-default-600">Powered by</span>
					<p className="text-primary">Sofuf</p>
				</Link>
			</footer>
		</>
	);
}
