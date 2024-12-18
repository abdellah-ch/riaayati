"use client"
import { useState } from "react";

const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="flex items-center justify-center mt-10">
            <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-center text-gray-800">
                    {isLogin ? "Connexion" : "Inscription"}
                </h2>
                <p className="mt-2 text-center text-gray-600">
                    {isLogin
                        ? "Connectez-vous pour accéder à nos services."
                        : "Créez un compte pour rejoindre notre communauté."}
                </p>
                <form className="mt-6 space-y-5">
                    {!isLogin && (
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Nom complet
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="w-full px-4 py-2 text-sm border rounded-md focus:ring-2 focus:ring-[#61CE70] focus:outline-none"
                                placeholder="Entrez votre nom complet"
                            />
                        </div>
                    )}
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Adresse e-mail
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 text-sm border rounded-md focus:ring-2 focus:ring-[#61CE70] focus:outline-none"
                            placeholder="Entrez votre adresse e-mail"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Mot de passe
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-4 py-2 text-sm border rounded-md focus:ring-2 focus:ring-[#61CE70] focus:outline-none"
                            placeholder="Entrez votre mot de passe"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-sm font-medium text-white bg-[#61CE70] rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-600"
                    >
                        {isLogin ? "Se connecter" : "Créer un compte"}
                    </button>
                </form>
                <div className="mt-6 text-sm text-center text-gray-600">
                    {isLogin ? "Pas encore inscrit ?" : "Déjà un compte ?"}{" "}
                    <button
                        type="button"
                        className="font-medium text-[#61CE70] hover:underline"
                        onClick={() => setIsLogin(!isLogin)}
                    >
                        {isLogin ? "Créer un compte" : "Se connecter"}
                    </button>
                </div>
                <div className="mt-4 text-sm text-center text-gray-500">
                    <p>
                        En vous inscrivant, vous acceptez nos{" "}
                        <a
                            href="#"
                            className="text-[#61CE70] hover:underline"
                        >
                            Conditions d&apos;utilisation
                        </a>{" "}
                        et notre{" "}
                        <a
                            href="#"
                            className="text-[#61CE70] hover:underline"
                        >
                            Politique de confidentialité
                        </a>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AuthForm;

