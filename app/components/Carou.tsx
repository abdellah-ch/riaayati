"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card } from "./Card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "./carousel"
import { FaShieldAlt, FaStar } from 'react-icons/fa';

const Carou = () => {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )
    const testimonials = [
        {
            name: "karim B.",
            location: "Casablanca, Maroc",
            rating: 5,
            reviews: 14,
            image: "/images/test1.jpg",
            feedback:
                "ساعد والدي الكبير فالعمر باش يبقى مرتاح. خدمتو كانت ممتازة بزاف.",
            reviewer: "Khadija R.",
        },
        {
            name: "Amal M.",
            location: "Rabat, Maroc",
            rating: 4,
            reviews: 10,
            image: "/images/test2.jpg",
            feedback:
                " كان صبور بزاف مع والدي الكبير. عطاه الوقت اللي محتاج وتعاملو كان محترف. شكرا بزاف على الخدمة.",
            reviewer: "Ahmed K.",
        },
        {
            name: "Fatima Z.",
            location: "Marrakech, Maroc",
            rating: 5,
            reviews: 18,
            image: "/images/test3.png",
            feedback:
                " ساعدات ولادي فالدروس ديالهم وخلاهم يحققو تقدم كبير فالتعليم. خدماتها كانت فوق المستوى.",
            reviewer: "Salma H.",
        },
    ];


    return (
        <Carousel
            plugins={[plugin.current]}
            className="w-full "
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent>
                {testimonials.map((item, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1">
                            <Card className="rounded-3xl relative w-full h-[350px]">
                                <div className="relative w-full h-[60%]">
                                    <img src={item.image} alt="hello" className="object-cover rounded-t-3xl w-full h-full" />
                                    <div className="absolute right-4 bottom-2 bg-white rounded-lg shadow-lg  text-center w-auto py-2 px-7">
                                        <h2 className="flex justify-center items-center gap-2 text-lg font-semibold">
                                            {item.name} <FaShieldAlt className="text-blue-500" />
                                        </h2>
                                        <p className="text-gray-500 text-sm">{item.location}</p>
                                        <div className="flex justify-center items-center gap-1 mt-2">
                                            {[...Array(5)].map((_, index) => (
                                                <FaStar key={index} className="text-yellow-400" />
                                            ))}
                                            <span className="text-gray-500 text-sm">({item.reviews})</span>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-center text-sm mt-[1px] p-4">
                                    &quot;{item.feedback}&quot;
                                </p>
                                <p className="font-bold ml-4 text-sm">
                                    {item.reviewer}
                                </p>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}

export default Carou