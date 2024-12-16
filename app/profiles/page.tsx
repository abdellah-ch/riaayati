// "use client"
// import Image from 'next/image';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import React from 'react';

// const Page = () => {

//     const router = useRouter()
//     return (
//         <>
//             <nav className="hidden md:flex items-center justify-between p-4 bg-white dark:bg-zinc-800">
//                 <button className="text-primary" onClick={() => router.push('/')}>
//                     <Image width={150} height={70} alt="logo" src="/images/logo1.svg" />
//                 </button>

//             </nav>
//             <section className="p-6 bg-background rounded-lg shadow-md max-w-[700px] mx-auto mt-10">
//                 <h2 className="text-xl font-semibold text-foreground">Recherche d&apos;aides-soignants seniors à El Jadida</h2>
//                 <div className="flex items-center mt-2">
//                     <span className="text-muted-foreground mr-2">
//                         💡 Saviez-vous que <strong>100%</strong> des aides-soignants que vous voyez sur Riaayati sont vérifiés par des antécédents ?
//                     </span>
//                 </div>
//                 <div className="flex justify-center space-x-4 mt-20">
//                     <div className="flex flex-col items-center space-y-2 cursor-pointer">
//                         <img className="w-24 h-24 " src="/images/firmiere.jpg" alt="سعاد ب." />
//                         <span className="font-bold">
//                             سعاد. <span className="text-muted-foreground">🔵</span>
//                         </span>
//                         <span className="text-yellow-500">⭐⭐⭐⭐</span>
//                     </div>
//                     <Link href="/profile">
//                         <div className="flex flex-col items-center space-y-2 cursor-pointer">
//                             <img className="w-24 h-24 " src="/images/firmiere1.jpg" alt="ليلى ن." />
//                             <span className="font-bold">
//                                 عبدالله. <span className="text-muted-foreground">🔵</span>
//                             </span>
//                             <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
//                         </div>
//                     </Link>
//                     <div className="flex flex-col items-center space-y-2 cursor-pointer">
//                         <img className="w-24 h-24" src="/images/firmiere2.jpg" alt="أمل ع." />
//                         <span className="font-bold">
//                             كمال. <span className="text-muted-foreground">🔵</span>
//                         </span>
//                         <span className="text-yellow-500">⭐⭐⭐</span>
//                     </div>
//                 </div>
//                 <div className="mt-4">
//                     <div className="h-1 bg-primary rounded-full w-1/2 mx-auto"></div>
//                 </div>
//             </section>
//         </>
//     );
// };

// export default Page;
"use client";

import Link from 'next/link';
import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { FaLightbulb } from "react-icons/fa";
import Navsec from '../components/navsec';

const Page = () => {

    // Sample profiles data
    const profiles = [
        { name: "سعاد.", rating: 4, img: "/images/firmiere.jpg" },
        { name: "عبدالله.", rating: 5, img: "/images/firmiere1.jpg" },
        { name: "كمال.", rating: 3, img: "/images/firmiere2.jpg" },
        { name: "أمل.", rating: 5, img: "/images/firmiere3.avif" },
        { name: "نجاة.", rating: 4, img: "/images/firmiere4.jpg" },
        { name: "ليلى.", rating: 5, img: "/images/firmiere5.jpg" },
        { name: "مراد.", rating: 4, img: "/images/firmiere6.jpg" },
        { name: "خالد.", rating: 3, img: "/images/firmiere7.jpg" },
        { name: "حنان.", rating: 4, img: "/images/firmiere8.png" },
        { name: "عادل.", rating: 5, img: "/images/firmiere9.jpg" },
    ];

    return (
        <>

            <Navsec />
            <section className="p-6 bg-background rounded-lg shadow-md max-w-[900px] mx-auto mt-10 mb-10">
                <h2 className="text-2xl font-bold text-foreground text-center mb-4">
                    Recherche d&apos;aides-soignants seniors à El Jadida
                </h2>
                <div className='flex justify-center  space-x-3'>
                    <FaLightbulb className='text-yellow-300 text-2xl' />
                    <p className="text-muted-foreground text-center mb-6">
                        Saviez-vous que <strong>100%</strong> des aides-soignants que vous voyez
                        sur Riaayati sont vérifiés par des antécédents ?
                    </p>
                </div>


                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {profiles.map((profile, index) => (
                        <Link href="/profile" key={index}>
                            <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200">
                                <img
                                    className="w-24 h-24 rounded-full object-cover"
                                    src={profile.img}
                                    alt={profile.name}
                                />
                                <h3 className="font-bold mt-3 text-foreground">{profile.name}</h3>
                                <div className="flex items-center mt-2 text-yellow-500">
                                    {Array.from({ length: 5 }).map((_, starIndex) =>
                                        starIndex < profile.rating ? (
                                            <FaStar key={starIndex} />
                                        ) : (
                                            <FaRegStar key={starIndex} />
                                        )
                                    )}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-8">
                    <div className="h-1 bg-primary rounded-full w-1/2 mx-auto"></div>
                </div>
            </section>
        </>
    );
};

export default Page;
