const Info = () => {
    return (
        <div className="w-screen mx-auto my-10  rounded-b-[80px] overflow-hidden bg-white ">
            <section className="w-full flex flex-col md:flex-row bg-background text-[#172c42]">
                {/* Left Side - Image */}
                <div className="w-[50%] relative mb-6 md:mb-0 bg-red-600 rounded-b-full">
                    <img
                        src="/images/banner1.jpg" // Replace with the path to your image
                        alt="Caregiver helping a child"
                        className="absolute inset-0 w-full h-full object-cover "
                    />
                </div>

                <div className="w-[50%] flex flex-col justify-center p-10 bg-[#faf7f7]">
                    <h1 className="text-4xl font-bold mb-4">
                        Trouver tranquillité d'esprit avec des ressources de sécurité
                    </h1>
                    <p className="text-muted-foreground text-lg mb-6">
                        Notre engagement en matière de sécurité signifie que nous nous consacrons à vous et à votre sécurité.
                    </p>

                    {/* Features List */}
                    <ul className="space-y-4 text-lg">
                        <li className="flex items-start space-x-4">
                            <span className="text-primary">
                                ✓
                            </span>
                            <p>
                                Tous les soignants que vous pouvez embaucher font l'objet d'une vérification des antécédents.
                            </p>
                        </li>
                        <li className="flex items-start space-x-4">
                            <span className="text-primary">
                                ✓
                            </span>
                            <p>
                                Rapports de vérification des antécédents supplémentaires disponibles à l'achat.
                            </p>
                        </li>
                        <li className="flex items-start space-x-4">
                            <span className="text-primary">
                                ✓
                            </span>
                            <p>
                                Une équipe de sécurité dédiée examine tous les postes vacants et les profils des soignants.
                            </p>
                        </li>
                        <li className="flex items-start space-x-4">
                            <span className="text-primary">
                                ✓
                            </span>
                            <p>
                                Apprenez-en davantage avec des dizaines d'articles et de ressources dans notre <a href="#" className="text-blue-600 underline">centre de confiance et de sécurité</a>.
                            </p>
                        </li>
                    </ul>


                </div>
            </section>
        </div>

    )
}

export default Info