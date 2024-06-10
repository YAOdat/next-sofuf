'use client';
import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/navbar";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import { useState } from 'react';
import { FaTelegram } from "react-icons/fa";
import { link as linkStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";
import { ThemeSwitch } from "@/components/theme-switch";
import {
	SearchIcon,
} from "@/components/icons";
import { Logo } from "@/components/icons";

export const Navbar = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
	const toggleMobileMenu = () => {
	  setIsMobileMenuOpen(!isMobileMenuOpen);
	};
  
	const searchInput = (
	  <Input
		aria-label="Search"
		classNames={{
		  inputWrapper: "bg-default-100",
		  input: "text-sm",
		}}
		endContent={
		  <Kbd className="hidden lg:inline-block" keys={["command"]}>
			Ctrl
		  </Kbd>
		}
		labelPlacement="outside"
		placeholder="Search..."
		startContent={
		  <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
		}
		type="search"
	  />
	);
  
	return (
	  <NextUINavbar
		maxWidth="xl"
		position="sticky"
		isMenuOpen={isMobileMenuOpen}
		onMenuOpenChange={toggleMobileMenu}
	  >
		<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
		  <NavbarBrand as="li" className="gap-3 max-w-fit">
			<NextLink className="flex justify-start items-center gap-1" href="/">
			  <Logo />
			  <p className="font-bold text-inherit">SOFUF</p>
			</NextLink>
		  </NavbarBrand>
		  <ul className="hidden lg:flex gap-4 justify-start ml-2">
			{siteConfig.navItems.map((item) => (
			  <NavbarItem key={item.href}>
				<NextLink
				  className={clsx(
					linkStyles({ color: "foreground" }),
					"data-[active=true]:text-primary data-[active=true]:font-medium"
				  )}
				  color="foreground"
				  href={item.href}
				>
				  {item.label}
				</NextLink>
			  </NavbarItem>
			))}
		  </ul>
		</NavbarContent>
  
		<NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="end">
		  <NavbarItem className="hidden sm:flex gap-2">
			<Link isExternal href={siteConfig.links.twitter} aria-label="Twitter">
			  <FaTelegram size='20' className="text-default-500" />
			</Link>
			<ThemeSwitch />
		  </NavbarItem>
		  <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
		  <NavbarItem className="hidden md:flex">
		  </NavbarItem>
		</NavbarContent>
  
		<NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
		  <Link isExternal href={siteConfig.links.github} aria-label="Github">
		  <FaTelegram className="text-default-500" />
		  </Link>
		  <ThemeSwitch />
		  <NavbarMenuToggle />
		</NavbarContent>
  
		{/* Mobile NavBar: */}
		<NavbarMenu>
		  {searchInput}
		  <div className="mx-4 mt-2 flex flex-col gap-2">
			{siteConfig.navMenuItems.map((item, index) => (
			  <NavbarMenuItem key={`${item}-${index}`}>
				<Link
				  color={"foreground"}
				  size="lg"
				  href={item.href}
				  onClick={() => setIsMobileMenuOpen(false)}
				>
				  {item.label}
				</Link>
			  </NavbarMenuItem>
			))}
		  </div>
		</NavbarMenu>
	  </NextUINavbar>
	);
  };