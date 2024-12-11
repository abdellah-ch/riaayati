
// const Teaching = () => {
//     return (
//         <section className="flex flex-wrap justify-around items-center gap-8 p-8 bg-white mt-20">
//             {/* Contenu gauche */}
//             <div className="flex flex-col gap-4 max-w-md">
//                 <h2 className="text-4xl font-bold text-blue-900">
//                     Personnalisez vos soins pour{" "}
//                     <span className="bg-blue-100 p-1 rounded">respecter votre budget</span>
//                 </h2>
//                 <p className="text-lg text-gray-700">
//                     Choisissez un plan d'adhésion pour trouver des soins à temps plein, à temps partiel ou occasionnel.
//                 </p>
//             </div>

//             {/* Image droite */}
//             <div className="rounded-3xl overflow-hidden w-full max-w-lg shadow-lg">
//                 <img
//                     src="/images/teach.jpg"
//                     alt="Famille qui s'organise"
//                     className="w-full h-full object-cover"
//                 />
//             </div>
//         </section>
//     )
// }

// export default Teaching

import React from "react";

const Teaching = () => {
    return (
        <div className="xl:max-w-[1300px] lg:max-w-[1100px] mx-auto my-6">
            <section className="flex flex-col md:flex-row items-center justify-between p-6 bg-white text-[#172c42]">
                {/* Left Content */}
                <div className="md:w-1/2 mt-8">
                    <h1 className="text-4xl font-bold ">
                        Personnalisez vos soins pour
                        respecter votre budget
                    </h1>
                    <p className="text-gray-700 mb-6 text-lg w-[70%] mt-10">
                        Choisissez un plan d&apos;adhésion pour trouver des soins à temps plein, à temps partiel ou occasionnel.
                    </p>

                </div>
                {/* Right Content */}
                <div className="md:w-[40%] flex items-center justify-end ml-10 mt-4">
                    <div className="rounded-3xl overflow-hidden w-full shadow-lg">
                        <img
                            src="/images/teach.jpg"
                            alt="Famille qui s'organise"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Teaching;
