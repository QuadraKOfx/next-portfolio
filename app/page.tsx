import Navbar from "portfolio/app/components/navbar";
import React, {Fragment} from "react";
import Footer from "portfolio/app/components/footer";
import Link from "next/link";
import Image from "next/image";
import ProfilePicture from "../public/happines.jpg";

export default function Home() {

    return (
        <Fragment>

            <Navbar/>

            {/* TODO PLACE SOCIAL ICONS */}
            {/*<SocialIcons/>*/}

            {/*max-h-[85vh]*/}
            <main className={`flex items-center text-dark w-full min-h-screen flex-col`}>
                {/* CONTAINER */}
                <div className="z-0 flex w-full dark:bg-dark pt-7 min-h-[100vh]">
                    <div className="flex items-center w-full lg:flex-col sm:px-8 md:flex-col">
                        {/* TODO ANIMATED TEXT IMAGE COMPONENT */}
                        <div className={`w-1/2 md:w-full flex justify-center min_lg:p-16`}>
                            <Image src={ProfilePicture} alt={'Quad-Devs'} className={`w-full h-auto avatar-image`}
                                   priority/>
                        </div>
                        {/* ======= IMAGE TEXT COMPONENT /END ====== */}

                        <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center mt-5">

                            <div className="w-full mx-auto py-2 flex items-center justify-center
                            text-center overflow-hidden sm:py-0">
                                <h1 className={`dark:text-white light:text-dark w-full text-dark capitalize font-bold
                                    min_md:text-3xl min_md:text-left`}>
                                    {'Marios Constantinou'.split(" ").map((word, index) =>
                                            <span key={word + '-' + index} className="inline-block">
                                    {word}&nbsp;
                                </span>
                                    )}
                                </h1>
                            </div>

                            {/* TODO ANIMATED TEXT COMPONENT */}
                            <div className="w-full mx-auto py-2 flex items-center justify-center
                            text-center overflow-hidden sm:py-0">
                                <h1 className={`dark:text-white light:text-dark inline-block w-full font-medium 
                                    text-dark capitalize !text-6xl !text-left xl:!text-5xl lg:!text-center 
                                    lg:!text=6xl md:!text-5xl sm:!text-3xl`}>
                                    {'A passionate Web Developer in love with the craft of programming.'.split(" ").map((word, index) =>
                                            <span key={word + '-' + index} className="inline-block">
                                    {word}&nbsp;
                                </span>
                                    )}
                                </h1>
                            </div>
                            {/* ======= ANIMATED TEXT COMPONENT /END ====== */}

                            <div className="flex items-center selft-start lg:self-center min-w-full
                                    mt-7 sm:justify-around">
                                <Link href={"/dummy.pdf"} target={"_blank"}
                                      className="flex items-center bg-dark text-light
                                        border-2 border-solid rounded-lg text-lg font-bold p-2.5
                                        px-6 border-transparent dark:bg-red-500 dark:text-dark"
                                      download={true}>
                                    Resume
                                </Link>

                                <Link href={"/dummy.pdf"} target={"_blank"}
                                      className="flex items-center bg-blue-400 text-light border-2 border-solid
                                      rounded-lg text-lg font-semibold p-2.5 px-6 border-transparent min_lg:ml-2
                                      dark:bg-light dark:text-dark">
                                    Contact
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>

                {/* FOOTER */}
                <div className="w-full footer bottom-0 absolute">
                    <Footer/>
                </div>
            </main>
        </Fragment>
    )
}
