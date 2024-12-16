"use client"

import Navsec from "../components/navsec"

const page = () => {
    return (
        <>
            <Navsec />
            <div className="p-8 bg-white rounded-lg shadow-lg max-w-3xl mx-auto mt-10 mb-10">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Postuler pour un poste</h2>
                <form className="space-y-6">
                    {/* Personal Information Section */}
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nom complet</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-[#61CE70] focus:outline-none focus:border-[#61CE70] text-gray-900 p-3"
                                placeholder="Entrez votre nom complet"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Adresse e-mail</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-[#61CE70] focus:outline-none focus:border-[#61CE70] text-gray-900 p-3"
                                placeholder="Entrez votre adresse e-mail"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Numéro de téléphone</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-[#61CE70] focus:outline-none focus:border-[#61CE70] text-gray-900 p-3"
                                placeholder="Entrez votre numéro de téléphone"
                                required
                            />
                        </div>
                    </div>

                    {/* Job Type Selection */}
                    <div>
                        <label htmlFor="jobType" className="block text-sm font-medium text-gray-700">Type de poste</label>
                        <select
                            id="jobType"
                            name="jobType"
                            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-[#61CE70] focus:outline-none focus:border-[#61CE70] text-gray-900 p-3"
                            required
                        >
                            <option value="" disabled>Sélectionnez une option</option>
                            <option value="soins">Soins aux personnes âgées</option>
                            <option value="cours">Cours supplémentaire</option>
                        </select>
                    </div>

                    {/* Experience Section */}
                    <div>
                        <label htmlFor="experience" className="block text-sm font-medium text-gray-700">Expérience professionnelle</label>
                        <textarea
                            id="experience"
                            name="experience"
                            rows={4}
                            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-[#61CE70] focus:outline-none focus:border-[#61CE70] text-gray-900 p-3"
                            placeholder="Décrivez brièvement votre expérience professionnelle"
                            required
                        ></textarea>
                    </div>

                    {/* File Upload Section */}
                    <div>
                        <label htmlFor="resume" className="block text-sm font-medium text-gray-700">Téléchargez votre CV</label>
                        <input
                            type="file"
                            id="resume"
                            name="resume"
                            className="mt-2 block w-full text-sm text-gray-900 border border-gray-300 rounded-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#61CE70] focus:border-[#61CE70]"
                            accept=".pdf,.doc,.docx"
                            required
                        />
                        <p className="mt-1 text-sm text-gray-500">Formats acceptés: PDF, DOC, DOCX.</p>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="px-6 py-3 text-white bg-[#61CE70] font-semibold rounded-md shadow-sm hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-[#61CE70] transition"
                        >
                            Envoyer la candidature
                        </button>
                    </div>
                </form>
            </div>

        </>
    )
}

export default page