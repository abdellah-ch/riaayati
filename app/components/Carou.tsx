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
                " ساعدات والدي الكبير فالعمر باش يبقى مرتاح وتعلمو أشياء جديدة يوميا. خدماتها كانت ممتازة بزاف.",
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
                            <Card className="rounded-3xl relative w-full h-[300px]">
                                <div className=" w-full h-[60%]">
                                    <img src={item.image} alt="hello" className="object-cover rounded-t-3xl w-full h-full" />
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