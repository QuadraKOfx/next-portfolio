'use client';

import React, {useEffect, useState} from 'react';
import {CgClose} from "react-icons/cg";
import {motion} from "framer-motion"
import {GiHamburgerMenu} from "react-icons/gi";
import Link from "next/link";

// HOOKS
import useWindowSize from "portfolio/app/hooks/useWindowSize";
import useThemeToggle from "portfolio/app/hooks/useThemeToggle";
import {FiMoon, FiSun} from "react-icons/fi";
import SocialIcons from "portfolio/app/components/social-icons";

interface CustomLinkInterface {
    href: string;
    title: string;
    className: string;
}

const CustomLink = ({href, title, className}: CustomLinkInterface) => {
    return (
        <Link href={href} className={`${className}`}>
            {title}
        </Link>
    )
}

const Navbar = () => {
    const [responsiveNavVisible, setResponsiveNavVisible] = useState(false);
    const [navbarVisible, setNavbarVisible] = useState(false);

    const sectionLinks = [
        {name: "About", link: "/#about"},
        {name: "Experience", link: "/#experience"},
        {name: "Work", link: "/#work"},
        {
            name: "Contact",
            link: "/#contact",
        },
    ];

    const {width} = useWindowSize();
    const {mode, setMode} = useThemeToggle();

    useEffect(() => {
        if (width < 1024) {
            setNavbarVisible(false);
        } else if (!navbarVisible) {
            setNavbarVisible(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [width]);

    return (
        <header className='flex w-full px-8 py-8 font-medium items-center justify-between fixed z-50'>
            {/* LEFT NAVBAR FOR SECTION LINKS */}
            <div className="w-full">
                <nav>
                    <motion.div
                        className="nav-responsive-toggle"
                        initial={{opacity: 0, y: 5}}
                        animate={{opacity: 1, y: 0}}
                        transition={{
                            duration: 0.3,
                            ease: "easeInOut",
                        }}>
                        {responsiveNavVisible ? (
                            <CgClose
                                className={`${mode === 'dark' ? 'dark:text-white' : 'dark:text-dark'}`}
                                style={{cursor: 'pointer', fontSize: '28px', zIndex: 1000}}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setResponsiveNavVisible(false);
                                }}
                            />
                        ) : (
                            <GiHamburgerMenu
                                className={`${mode === 'dark' ? 'dark:text-white' : 'dark:text-dark'}`}
                                style={{cursor: 'pointer', fontSize: '28px', zIndex: 1000}}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setResponsiveNavVisible(true);
                                }}
                            />
                        )}
                    </motion.div>
                </nav>
            </div>

            {/* MIDDLE NAVBAR FOR SECTION LINKS */}
            <div className="w-full">
                <nav>

                </nav>
            </div>

            {/* MOBILE NAVBAR FOR SECTION LINKS */}
            {responsiveNavVisible &&
                <div className="dark:bg-light min-w-[80vw] bg-dark/90 fixed top-1/2 py-32 rounded-lg flex items-center
                    justify-between z-30 left-1/2 -translate-x-1/2 -translate-y-1/2 backdrop-blur-md max-h-full h-1/2">
                    <nav className="w-full flex flex-col justify-between">
                        {sectionLinks.map(({name, link}, index) => (
                            <motion.button
                                key={name}
                                className="nav-items-list-item text-light dark:text-dark h-9"
                                initial={{opacity: 0, y: -25}}
                                animate={{opacity: 1, y: 0}}
                                transition={{
                                    duration: 0.3,
                                    ease: "easeInOut",
                                    delay: 0.3 + index * 0.1,
                                }}>
                                <Link href={link} className="nav-items-list-item-link">
                                    {name}
                                </Link>
                            </motion.button>
                        ))}

                        <motion.button
                            className="nav-items-list-item text-light flex justify-center
                                dark:text-dark mt-3 text-2xl"
                            initial={{opacity: 0, y: -25}}
                            animate={{opacity: 1, y: 0}}
                            onClick={() => setMode(mode === "light" ? "dark" : "light")}
                            transition={{
                                duration: 0.3,
                                ease: "easeInOut",
                                delay: 0.3,
                            }}>
                            {mode === "dark" ? <FiSun className={"fill-dark"}/>
                                : <FiMoon className={"fill-dark"}/>}
                        </motion.button>

                        <SocialIcons/>
                    </nav>
                </div>
            }

            {/* HIDE SECTION ICONS ON SMALLER SCREENS */}
            {navbarVisible &&
                <nav>
                    {sectionLinks.map(({name, link}) => (
                        <CustomLink key={name} title={name} className='mr-4 hover:underline p-1 dark:text-light'
                                    href={link}/>
                    ))}
                </nav>
            }

        </header>
    )
}

export default Navbar;
