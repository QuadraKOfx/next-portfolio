import Link from "next/link";

const Footer = () => {
    return (
        <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg
            dark:text-light dark:border-light bottom-0 sm:text-base">
            <div className="py-8 flex items-center justify-between lg:flex-col lg:py-6 min_md:justify-around">
                <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
                <div className="flex items-center">
                    Build with <span className="text-primary dark:text-red-500 text-2x1 px-1">&#9825;</span>
                    by&nbsp;
                    <Link href="https://github.com/QuadraKOfx"
                          className="underline underline-offset-2"
                          target={"_blank"}>
                        QuadDev
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
