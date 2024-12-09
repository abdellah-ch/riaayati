// import Image from "next/image"
import Image from "next/image"
import Nav from "./nav"
import { FaStar } from "react-icons/fa"

const Banner = () => {
    return (
        <section className="bg-black hidden md:block w-screen">
            <Nav />
            <section className="w-screen m-auto flex h-[550px] ">
                <div className="w-[10%] text-white relative animate-float">
                    {/* heart icon */}
                    <img src="/images/1x/love.svg" alt="" className=" object-cover absolute top-[20%] h-[400px]" />
                </div>

                <div className="bg-black w-[90%] relative">
                    <Image
                        src="/images/1x/banner2.png"// Replace with your image path
                        alt="Example Image"
                        layout="fill"
                        objectFit="cover" // Use "contain" if you want to keep aspect ratio
                        className="opacity-40"
                    />

                    {/* Text Content */}
                    <div className="absolute flex flex-col text-white top-[20%] left-5">
                        <div className="flex space-x-2">
                            <div className="flex mt-[2px] space-x-[1px]">
                                <FaStar className="text-[#61CE70] text-sm" />
                                <FaStar className="text-[#61CE70] text-sm" />
                                <FaStar className="text-[#61CE70] text-sm" />
                            </div>
                            <h3 className="text-sm uppercase tracking-wide text-gray-500 mb-4">
                                Raise your voice to win
                            </h3>
                        </div>

                        <h1 className="text-4xl font-bold leading-tight md:text-6xl">
                            Seniors Deserve

                        </h1>
                        <h1 className="text-4xl font-bold leading-tight md:text-6xl">
                            <span className="text-green-400">Better Life</span>
                        </h1>
                        <h1 className="text-4xl font-bold leading-tight md:text-6xl">
                            Taking Care
                            Relatives
                            <FaStar className="inline-block ml-2 text-green-400 animate-rotate" />
                        </h1>
                        <p className="text-gray-300 mt-4 text-lg">
                            We collaborate, we think, we create outside the box.
                        </p>
                        <button
                            className="mt-6 block px-7 py-3 bg-green-400 text-black font-bold rounded shadow hover:bg-green-500 transition w-fit"
                        >
                            Learn More
                        </button>
                    </div>
                </div>


            </section>

        </section>
    )
}

export default Banner