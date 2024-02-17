import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { MdBusinessCenter } from "react-icons/md";
// import type { Metadata } from 'next'

// export const meta: Metadata = {
// 	title: 'Home | Sofuf',
// 	description: 'Sofuf is a comprehensive platform for learning and resources.',
// 	keywords: 'sofuf, odat, KAU, MOE, King AbdulAziz University, Sofof',
// 	viewport: 'width=device-width, initial-scale=1.0',
// 	robots: 'index, follow',
// }

export default function Home() {

	return (
		<> 

		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-lg text-center justify-center">
				<h1 className={title()}>Your&nbsp;</h1>
				<h1 className={title({ color: "cyan" })}>Learning&nbsp;</h1>
				<br />
				<h1 className={title()}>
				Journey Starts Here
				</h1>
				<h2 className={subtitle({ class: "mt-4" })}>
				Unlock the world of knowledge with Sofuf, a comprehensive platform for learning and resources.
				</h2>
			</div>

			<div className="flex gap-3">
				<Link
					
					href={siteConfig.links.docs}
					className={buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}
				>
					Resources
				</Link>
				<Link
					className={buttonStyles({ variant: "bordered", radius: "full" })}
					href={siteConfig.links.github}
				>
					<MdBusinessCenter size={20} />
					Careers
				</Link>
			</div>

			<div className="mt-8">
				<Snippet hideSymbol hideCopyButton variant="flat">
					<span>
						Contact us <Code color="primary"> <Link href="https://t.me/odatt" isExternal> t.me/odatt</Link></Code>
					</span>
				</Snippet>
			</div>
		</section>
		</>
	);
}
