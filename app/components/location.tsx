import Link from "next/link"

const Location = () => {
    return (
        <div className="max-w-[1000px] mx-auto text-center p-6 mt-4">
            <h1 className="text-4xl font-bold text-primary">
                Trouvez des Services de Soins à Domicile de Qualité
            </h1>
            {/* <p className="text-muted-foreground my-4">
                Que ce soit pour une aide quelques jours par semaine ou un soutien 24h/24 pour des besoins plus complexes, nous avons une solution adaptée pour vous.
            </p> */}
            <div className="flex justify-center space-x-0 mt-10">
                <input
                    type="text"
                    placeholder="Code Postal"
                    className="border border-border rounded-l-md p-2 px-4 focus:outline-none "
                />
                <Link
                    href="/vertical"
                    className="bg-[#61CE70] text-black hover:bg-[#4CAF63] rounded-r-md p-2 focus:outline-none focus:border-none px-6 font-bold">
                    Rechercher
                </Link>
            </div>


            <div className="w-full h-96 mt-10">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3376.293600744869!2d-8.508712724847138!3d33.25451327630333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda92a8f21e82f47%3A0x443dc56ebc0115da!2sEl%20Jadida%2C%20Maroc!5e0!3m2!1sfr!2sma!4v1697034160981!5m2!1sfr!2sma"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>




        </div>

    )
}

export default Location