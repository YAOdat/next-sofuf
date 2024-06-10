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
			label: "About",
			href: "/about",
		},
		
	],
	links: {
		github: "/careers",
		twitter: "https://t.me/odatt",
		docs: "/resources",
	},
};
