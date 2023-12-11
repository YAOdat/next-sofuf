import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { MdBusinessCenter } from "react-icons/md";


export default function Home() {

	return (
		<> 
		<head>
			<title>Home | Sofuf</title>
			<meta name="description" content="Sofuf is a comprehensive platform for learning and resources." />
			<meta name="keywords" content="sofuf, odat, KAU, MOE, King AbdulAziz University, Sofof" />
			<meta name="author" content="Yaser Odat" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta name="robots" content="index, follow" />
			<meta property="og:title" content="Sofuf" />
			<meta property="og:description" content="Sofuf is a comprehensive platform for learning and resources." />
			<meta property="og:type" content="website" />
			<meta property="og:url" content="https://sofuf.com/" />
			<meta property="og:site_name" content="Sofuf" />
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
