"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { AiOutlinePlusCircle } from "react-icons/ai";
import {
    PiLaptopThin,
    PiUserLight,
    PiBagSimpleLight,
    PiHouseSimpleThin,
} from "react-icons/pi";
import SearchModal from "@/components/searchModal";
import FilterModal from "@/components/searchFilter";

function SubNav({ children }: { children?: React.ReactNode }) {
    const pathname = usePathname() || "";
    const [hoveredPath, setHoveredPath] = useState(pathname);


    let links = [
        { icons: <PiHouseSimpleThin />, path: "/" },
        { icons: <PiUserLight />, path: "##" },
        // Removed PiBagSimpleLight for more space
    ];

    return (
        <nav className=" w-full z-30 py-4 rounded-lg">
            <div className="lg:max-w-xl md:max-w-[740px] mx-auto max-2xl px-4 lg:px-0">
                <div className="flex items-center justify-between shadow-md bg-white dark:bg-[#212121] dark:border-neutral-700/30 border rounded-xl p-3 ">
                    <div className="flex space-x-3 items-center">
                        {links.map((item, index) => {
                            const isActive = item.path === pathname;

                            return (
                                <React.Fragment key={item.path}>

                                    <Link
                                        data-active={isActive}
                                        // key={item.path}
                                        href={item.path}
                                        onMouseOver={() => setHoveredPath(item.path)}
                                        className={`px-1 py-1 rounded-full text-sm lg:text-base relative no-underline duration-300 ease-in ${isActive ? "text-zinc-100" : "text-zinc-400"
                                            }`}
                                    >
                                        <span
                                            className={`  text-gray-400 dark:text-neutral-500 text-3xl relative z-20 ${item.path === hoveredPath &&
                                                "text-neutral-800 transition-all ease-in-out duration-500 "
                                                } `}

                                        >
                                            {item.icons}
                                        </span>

                                        {item.path === hoveredPath && (
                                            <motion.div
                                                // -z-10
                                                className="absolute bottom-0  z-10 left-0 h-full bg-stone-300 dark:bg-neutral-700  rounded-full "
                                                layoutId="navbar"
                                                aria-hidden="true"
                                                style={{
                                                    width: "100%",
                                                }}
                                                transition={{
                                                    type: "spring",
                                                    bounce: 0.25,
                                                    stiffness: 130,
                                                    damping: 9,
                                                    duration: 0.3,
                                                }}
                                            />
                                        )}
                                    </Link>
                                </React.Fragment>
                            );
                        })}
                        {/* Remove <SearchModal /> here, will be injected as children */}
                    </div>
                    <div className="flex items-center gap-x-3">
                        <Link href={"/careers/add"}>
                            <div className="bg-black dark:bg-[#373737] px-2 sm:px-3 py-1 rounded-md flex items-center gap-x-2 sm:gap-x-3">
                                <AiOutlinePlusCircle className="text-white text-xs sm:text-3xl" />
                                <span className="text-white font-semibold text-xs sm:text-base">Add Job</span>
                            </div>
                        </Link>
                        {children}
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default SubNav;