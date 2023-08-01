'use client';

import {FiGithub, FiLinkedin, FiTwitter, FiYoutube} from "react-icons/fi";
import {motion} from "framer-motion";
import Link from "next/link";

const SocialIcons = () => {
    const socialLinks = [
        {
            name: "Github",
            icon: <FiGithub/>,
            link: "https://github.com/QuadraKOfx"
        },
        {
            name: "Youtube",
            icon: <FiYoutube/>,
            link: "/",
        },
        {
            name: "LinkedIn",
            icon: <FiLinkedin/>,
            link: "https://www.linkedin.com/in/marios-constantinou11/",
        },
        // {
        //     name: "Instagram",
        //     icon: <FiInstagram />,
        //     link: "https://www.instagram.com/marios_con93/",
        // },
        {
            name: "Twitter",
            icon: <FiTwitter />,
            link: "https://twitter.com/marios540",
        },
    ];

    return (
        <motion.div
            className={"social-icons"}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{
                duration: 0.3,
                ease: 'easeInOut',
                delay: 1.95
            }}>
            <ul className="social-icons-list">
                {socialLinks.map(({name, icon, link}) => (
                    <li key={name} title={name} className="social-icons-list-item">
                        <Link
                            href={link}
                            className="social-icons-list-item-link"
                            target="_blank">
                            {icon}
                        </Link>
                    </li>
                ))}
            </ul>
        </motion.div>
    )
}

export default SocialIcons;
