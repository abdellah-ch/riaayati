// "use client"
// import React from 'react';
// import Navsec from '../components/Navsec';

// const Profile = () => {

//     return (
//         <>
//             <Navsec />
//             <section className="p-6 bg-background rounded-lg shadow-md max-w-[700px] mx-auto mt-10 mb-10">
//                 <h2 className="text-2xl font-semibold text-foreground mb-4">Profil de عبدالله</h2>
//                 <div className="flex items-center space-x-4">
//                     <img className="w-32 h-32 rounded-full" src="/images/firmiere1.jpg" alt="عبدالله" />
//                     <div className='flex justify-between w-full'>
//                         <div>
//                             <p className="text-xl font-bold">عبدالله.</p>
//                             <p className="text-muted-foreground">Aide-soignant senior à El Jadida</p>
//                             <p className="mt-2 text-yellow-500">⭐⭐⭐⭐⭐</p>
//                         </div>
//                         <button className='mb-10 px-7 py-3 bg-green-400 text-black font-bold rounded shadow hover:bg-green-500 transition w-fit'>
//                             Contacter
//                         </button>
//                     </div>
//                 </div>
//                 <div className="mt-6">
//                     <h3 className="text-lg font-semibold">À propos de عبدالله</h3>
//                     <p className="mt-2">
//                         Avec plus de 10 ans d&apos;expérience en soins aux personnes âgées, عبدالله est connu pour son
//                         professionnalisme et sa bienveillance. Il a travaillé avec plusieurs familles à El Jadida et est
//                         spécialisé dans les soins à domicile.
//                     </p>
//                 </div>
//                 <div className="mt-6">
//                     <h3 className="text-lg font-semibold">Commentaires des clients</h3>
//                     <div className="mt-4 space-y-4">
//                         <div className="p-4 bg-muted rounded-lg shadow-sm">
//                             <p className="font-bold">Fatima Z.</p>
//                             <p>
//                                 عبدالله est très attentionné et a aidé ma mère pendant 15 jours. Je recommande vivement ses services.
//                             </p>
//                         </div>
//                         <div className="p-4 bg-muted rounded-lg shadow-sm">
//                             <p className="font-bold">Mohammed L.</p>
//                             <p>
//                                 Un excellent aide-soignant, toujours ponctuel et respectueux. Merci pour votre dévouement.
//                             </p>
//                         </div>
//                         <div className="p-4 bg-muted rounded-lg shadow-sm">
//                             <p className="font-bold">Latifa R.</p>
//                             <p>
//                                 Très satisfait de son travail, ma famille est en confiance avec عبدالله. Merci pour tout !
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="mt-4">
//                     <div className="h-1 bg-primary rounded-full w-1/2 mx-auto"></div>
//                 </div>
//             </section>
//         </>
//     );
// };

// export default Profile;

'use client';
import React, { useState } from 'react';
import Navsec from '../components/Navsec';

const Profile = () => {
    const [isContacted, setIsContacted] = useState(false);

    // Function to handle the "Contacter" button click event
    const handleContactClick = () => {
        setIsContacted(true); // Update state to disable the button and change its label to "Demande envoyée"
    };

    return (
        <>
            {/* Navigation Section - Contains the navigation bar of the website */}
            <Navsec />

            {/* Profile Section - Contains the user profile information */}
            <section className="p-6 bg-background rounded-lg shadow-md max-w-[700px] mx-auto mt-10 mb-10">

                {/* Profile Header - Displays the profile title */}
                <h2 className="text-2xl font-semibold text-foreground mb-4">Profil de عبدالله</h2>

                {/* Profile Information - Displays the profile picture, name, position, and rating */}
                <div className="flex items-center space-x-4">
                    {/* Profile Picture - Displays the user's image */}
                    <img
                        className="w-32 h-32 rounded-full"
                        src="/images/firmiere1.jpg"
                        alt="عبدالله"
                    />

                    {/* Name and Details - Displays the user's name, profession, and rating */}
                    <div className="flex justify-between w-full">
                        <div>
                            <p className="text-xl font-bold">عبدالله.</p>
                            <p className="text-muted-foreground">Aide-soignant senior à El Jadida</p>
                            <p className="mt-2 text-yellow-500">⭐⭐⭐⭐⭐</p>
                        </div>

                        {/* Contact Button - Allows users to contact the person */}
                        <button
                            onClick={handleContactClick}
                            disabled={isContacted} // Disables the button after it's clicked to prevent multiple clicks
                            className={`mb-10 px-7 py-3 font-bold rounded shadow transition w-fit ${isContacted
                                ? 'bg-gray-400 text-white cursor-not-allowed' // Inactive state when button is clicked
                                : 'bg-green-400 text-black hover:bg-green-500' // Active state for the button
                                }`}
                        >
                            {isContacted ? 'Demande envoyée' : 'Demander'} {/* Button text changes based on state */}
                        </button>
                    </div>
                </div>

                {/* About Section - Provides information about the user */}
                <div className="mt-6">
                    <h3 className="text-lg font-semibold">À propos de عبدالله</h3>
                    <p className="mt-2">
                        Avec plus de 10 ans d&apos;expérience en soins aux personnes âgées, عبدالله est connu pour son
                        professionnalisme et sa bienveillance. Il a travaillé avec plusieurs familles à El Jadida et est
                        spécialisé dans les soins à domicile.
                    </p>
                </div>

                {/* Client Feedback Section - Displays feedback from clients */}
                <div className="mt-6">
                    <h3 className="text-lg font-semibold">Commentaires des clients</h3>
                    <div className="mt-4 space-y-6">

                        {/* Single Comment - Each client feedback is shown in a card format */}
                        <div className="p-6 bg-white rounded-lg shadow-lg border border-gray-200">
                            <div className="flex items-center space-x-4">
                                <img
                                    className="w-12 h-12 rounded-full"
                                    src="/images/avatar1.png"
                                    alt="Fatima Z."
                                />
                                <div>
                                    <p className="font-semibold text-lg">Fatima Z.</p>
                                    <p className="text-sm text-muted-foreground">Cliente fidèle</p>
                                </div>
                            </div>
                            <p className="mt-4 text-gray-600">
                                عبدالله est très attentionné et a aidé ma mère pendant 15 jours. Je recommande vivement ses services.
                            </p>
                        </div>

                        {/* Single Comment */}
                        <div className="p-6 bg-white rounded-lg shadow-lg border border-gray-200">
                            <div className="flex items-center space-x-4">
                                <img
                                    className="w-12 h-12 rounded-full"
                                    src="/images/avatar.png"
                                    alt="Mohammed L."
                                />
                                <div>
                                    <p className="font-semibold text-lg">Mohammed L.</p>
                                    <p className="text-sm text-muted-foreground">Client satisfait</p>
                                </div>
                            </div>
                            <p className="mt-4 text-gray-600">
                                Un excellent aide-soignant, toujours ponctuel et respectueux. Merci pour votre dévouement.
                            </p>
                        </div>

                        {/* Single Comment */}
                        <div className="p-6 bg-white rounded-lg shadow-lg border border-gray-200">
                            <div className="flex items-center space-x-4">
                                <img
                                    className="w-12 h-12 rounded-full"
                                    src="/images/avatar.png"
                                    alt="Latifa R."
                                />
                                <div>
                                    <p className="font-semibold text-lg">Latifa R.</p>
                                    <p className="text-sm text-muted-foreground">Cliente fidèle</p>
                                </div>
                            </div>
                            <p className="mt-4 text-gray-600">
                                Très satisfait de son travail, ma famille est en confiance avec عبدالله. Merci pour tout !
                            </p>
                        </div>
                    </div>
                </div>

                {/* Divider - A simple line separator */}
                <div className="mt-4">
                    <div className="h-1 bg-primary rounded-full w-1/2 mx-auto"></div>
                </div>
            </section>
        </>
    );
};

export default Profile;
