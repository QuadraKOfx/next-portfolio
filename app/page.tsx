import Navbar from "portfolio/app/components/navbar";
import React, {Fragment} from "react";
import SocialIcons from "portfolio/app/components/social-icons";
import Footer from "portfolio/app/components/footer";
import Link from "next/link";
import Image from "next/image";
import ProfilePicture from "../public/happines.jpg";

export default function Home() {
    return (
        <Fragment>

            <Navbar/>
            <SocialIcons/>

            <main className={"flex items-center text-dark w-full min-h-[85vh]"}>
                {/* CONTAINER */}
                <div className="z-0 inline-block h-full w-full p-28 dark:bg-dark xl:p-24 lg:p-16
                    md:p-12 sm:p-8 !pt-0 md:!pt-16 sm:!pt-16">
                    <div className="flex items-center justify-between w-full lg:flex-col sm:px-8 md:flex-col">
                        {/* TODO ANIMATED TEXT IMAGE COMPONENT */}
                        <div className={`w-1/2 md:inline-block md:w-full`}>
                            <Image src={ProfilePicture} alt={'Quad-Devs'} className={`w-full h-auto avatar-image`}
                                   priority/>
                        </div>
                        {/* ======= IMAGE TEXT COMPONENT /END ====== */}

                        <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center mt-5">

                            {/* TODO ANIMATED TEXT COMPONENT */}
                            <div className="w-full mx-auto py-2 flex items-center justify-center
                            text-center overflow-hidden sm:py-0">
                                <h1 className={`inline-block w-full text-dark font-bold capitalize !text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text=6xl md:!text-5xl sm:!text-3xl`}>
                                    {'A passionate Web Developer in love with the craft of programming.'.split(" ").map((word, index) =>
                                            <span key={word + '-' + index} className="inline-block">
                                    {word}&nbsp;
                                </span>
                                    )}
                                </h1>
                            </div>
                            {/* ======= ANIMATED TEXT COMPONENT /END ====== */}

                            <p className="my-4 text-base font-medium md:text-sm sm:!text-x min-w-full">
                                Bringing Ideas to Life.
                            </p>

                            <div className="flex items-center selft-start mt-2 lg:self-center min-w-full">
                                <Link href={"/dummy.pdf"} target={"_blank"}
                                      className="flex items-center bg-dark text-light hover:text-dark
                                    border-2 border-solid rounded-lg text-lg font-semibold hover:bg-light
                                    p-2.5 px-6 border-transparent hover:border-dark focus:bg-dark
                                    focus:text-light"
                                      download={true}>
                                    Resume
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>

            </main>

            {/* FOOTER */}
            <div className="w-full footer bottom-0 absolute">
                <Footer/>
            </div>
        </Fragment>
    )
}
