'use client';

import React, {useEffect, useState} from 'react';
import {CgClose} from "react-icons/cg";
import {motion} from "framer-motion"
import {GiHamburgerMenu} from "react-icons/gi";
import Link from "next/link";

// HOOKS
import useWindowSize from "portfolio/app/hooks/useWindowSize";

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

    useEffect(() => {
        if (width < 1024) {
            setNavbarVisible(false);
        } else if (!navbarVisible) {
            setNavbarVisible(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [width]);

    return (
        <header className='flex w-full px-8 py-8 font-medium items-center justify-between fixed'>
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
                                style={{cursor: 'pointer', fontSize: '28px'}}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setResponsiveNavVisible(false);
                                }}
                            />
                        ) : (
                            <GiHamburgerMenu
                                style={{cursor: 'pointer', fontSize: '28px'}}
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
                <div className="min-w-[70vw] bg-dark/90 fixed top-1/2 py-32 rounded-lg flex items-center
                    justify-between z-30 left-1/2 -translate-x-1/2 -translate-y-1/2 backdrop-blur-md">
                    <nav className="w-full flex flex-col">
                        {sectionLinks.map(({name, link}, index) => (
                            <motion.button
                                key={name}
                                className="nav-items-list-item text-light"
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
                    </nav>
                </div>
            }

            {/* HIDE SECTION ICONS ON SMALLER SCREENS */}
            {navbarVisible &&
                <nav>
                    {sectionLinks.map(({name, link}, index) => (
                        <motion.li
                            key={name}
                            className="nav-items-list-item"
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
                        </motion.li>
                    ))}
                </nav>
            }

        </header>
    )
}

export default Navbar;


// <motion.div
//     className="brand"
//     initial={{opacity: 0}}
//     animate={{opacity: 1}}
//     transition={{
//         duration: 0.3,
//         ease: "easeInOut",
//     }}>
//     <Link href="/">
//         Logo
//     </Link>
// </motion.div>
