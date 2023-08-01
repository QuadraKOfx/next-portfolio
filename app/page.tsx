import Navbar from "portfolio/app/components/navbar";
import React, {Fragment} from "react";
import SocialIcons from "portfolio/app/components/social-icons";
import Footer from "portfolio/app/components/footer";
import Link from "next/link";

export default function Home() {
    return (
        <Fragment>

            <Navbar/>
            <SocialIcons/>

            <main className={"flex items-center text-dark w-full min-h-[85vh]"}>
                {/* CONTAINER */}
                <div className="flex items-center justify-between w-full lg:flex-col sm:px-10">
                    {/* TODO ANIMATED TEXT IMAGE COMPONENT */}
                    <div className="w-1/2">

                    </div>
                    {/* ======= IMAGE TEXT COMPONENT /END ====== */}

                    <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text">

                        {/* TODO ANIMATED TEXT COMPONENT */}
                        <div className="w-full mx-auto py-2 flex items-center justify-center
                            text-center overflow-hidden">
                            <h1 className={`inline-block w-full text-dark
                                font-bold capitalize 
                                !text-6x1 !text-left xl:!text-5x1 lg:!text-center
                                lg:!text=6x1 md:!text-5x1 sm:!text-3x1`}>
                                A passionate Web Developer in love with the craft of programming.
                            </h1>
                            {''.split(" ").map((word, index) =>
                                <span key={word + '-'+index} className="inline-block">
                                    {word}&nbsp;
                                </span>
                            )}
                        </div>
                        {/* ======= ANIMATED TEXT COMPONENT /END ====== */}

                        <p className="my-4 text-base font-medium">
                            Bringing Ideas to Life.
                        </p>

                        <div className="flex items-center selft-start mt-2 lg:self-center">
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
            </main>

            {/* FOOTER */}
            <div className="w-full footer">
                <Footer />
            </div>
        </Fragment>
    )
}
