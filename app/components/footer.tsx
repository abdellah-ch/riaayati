import Link from "next/link"

const Footer = () => {
    return (
        <div className="p-2 mb-2 mt-20">
            <div className="sm:flex sm:items-center sm:justify-center ">
                {/* <Link href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                    <Image src="/images/logo1.svg" className="ml-2 mt-2" alt="Logo Riaayatik" width={150} height={100} />
                </Link> */}
                <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">À propos</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">Politique de confidentialité</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">Licences</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Contact</a>
                    </li>
                </ul>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto lg:my-4" />
            <span className="block text-sm text-gray-500 sm:text-center">
                © 2024 <Link href="/" className="hover:underline">رعايتك™</Link>. Tous droits réservés.
            </span>
        </div>

    )
}

export default Footer