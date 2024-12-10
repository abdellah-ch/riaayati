"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const Page = () => {

    const router = useRouter()
    return (
        <>
            <nav className="hidden md:flex items-center justify-between p-4 bg-white dark:bg-zinc-800">
                <button className="text-primary" onClick={() => router.push('/')}>
                    <Image width={150} height={70} alt="logo" src="/images/logo1.svg" />
                </button>

            </nav>
            <section className="p-6 bg-background rounded-lg shadow-md max-w-[700px] mx-auto mt-10">
                <h2 className="text-xl font-semibold text-foreground">Recherche d&apos;aides-soignants seniors à El Jadida</h2>
                <div className="flex items-center mt-2">
                    <span className="text-muted-foreground mr-2">
                        💡 Saviez-vous que <strong>100%</strong> des aides-soignants que vous voyez sur Riaayati sont vérifiés par des antécédents ?
                    </span>
                </div>
                <div className="flex justify-center space-x-4 mt-20">
                    <div className="flex flex-col items-center space-y-2 cursor-pointer">
                        <img className="w-24 h-24 " src="/images/firmiere.jpg" alt="سعاد ب." />
                        <span className="font-bold">
                            سعاد. <span className="text-muted-foreground">🔵</span>
                        </span>
                        <span className="text-yellow-500">⭐⭐⭐⭐</span>
                    </div>
                    <Link href="/profile">
                        <div className="flex flex-col items-center space-y-2 cursor-pointer">
                            <img className="w-24 h-24 " src="/images/firmiere1.jpg" alt="ليلى ن." />
                            <span className="font-bold">
                                عبدالله. <span className="text-muted-foreground">🔵</span>
                            </span>
                            <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                        </div>
                    </Link>
                    <div className="flex flex-col items-center space-y-2 cursor-pointer">
                        <img className="w-24 h-24" src="/images/firmiere2.jpg" alt="أمل ع." />
                        <span className="font-bold">
                            كمال. <span className="text-muted-foreground">🔵</span>
                        </span>
                        <span className="text-yellow-500">⭐⭐⭐</span>
                    </div>
                </div>
                <div className="mt-4">
                    <div className="h-1 bg-primary rounded-full w-1/2 mx-auto"></div>
                </div>
            </section>
        </>
    );
};

export default Page;
