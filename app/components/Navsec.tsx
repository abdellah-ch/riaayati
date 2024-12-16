"use client"

import Image from 'next/image'
import { useRouter } from 'next/navigation';
const Navsec = () => {

  const router = useRouter();
  return (
    <nav className="hidden md:flex items-center justify-between p-4 bg-white dark:bg-zinc-800 shadow-md">
      <button className="text-primary" onClick={() => router.push("/")}>
        <Image
          width={150}
          height={70}
          alt="logo"
          src="/images/logo1.svg"
        />
      </button>
    </nav>
  )
}

export default Navsec