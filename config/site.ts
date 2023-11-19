export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Sofuf",
	description: "Your Learning Journey Starts Here",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
    {
      label: "Resources",
      href: "/resources",
    },
    {
      label: "Careers",
      href: "/careers",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "About",
      href: "/about",
    }
	],
	navMenuItems: [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "Resources",
			href: "/resources",
		},
		{
			label: "Careers",
			href: "/careers",
		},
		{
			label: "Blog",
			href: "/blog",
		},
		{
			label: "Contact",
			href: "/contact",
		},
		{
			label: "About",
			href: "/about",
		},
		
	],
	links: {
		github: "/careers",
		twitter: "https://t.me/odatt",
		docs: "/resources",
		discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev"
	},
};
