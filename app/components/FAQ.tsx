// "use client"

// import { useState } from "react";

// export default function FAQ() {
//     const faqs = [
//         {
//             question: "Quelle est la différence entre l'enseignement à domicile et les soins à domicile pour les personnes âgées ?",
//             answer:
//                 "L'enseignement à domicile se concentre sur le soutien éducatif pour les individus, tandis que les soins à domicile pour les personnes âgées impliquent une assistance dans les activités quotidiennes et les besoins de santé.",
//         },
//         {
//             question: "Comment trouver le bon enseignant ou soignant pour un proche ?",
//             answer:
//                 "Identifiez les besoins spécifiques de votre proche. Pour l'enseignement, trouvez un enseignant qualifié avec de l'expérience dans la matière concernée. Pour les soins à domicile, recherchez un soignant avec des certifications et des recommandations positives.",
//         },
//         {
//             question: "Les services d'enseignement à domicile et de soins à domicile sont-ils abordables ?",
//             answer:
//                 "Les coûts varient en fonction du type de service, de la fréquence et de votre localisation. De nombreuses agences proposent des plans personnalisés adaptés à votre budget.",
//         },
//         {
//             question: "Comment assurer la sécurité lors de l'embauche d'une personne pour des services à domicile ?",
//             answer:
//                 "Effectuez toujours des vérifications d'antécédents, demandez des références et embauchez via des agences réputées pour garantir la sécurité et le professionnalisme.",
//         },
//         {
//             question: "Une seule personne peut-elle fournir à la fois un enseignement et des soins à domicile ?",
//             answer:
//                 "Cela dépend des compétences de la personne. Certaines personnes possèdent des qualifications dans les deux domaines, mais il est souvent préférable de faire appel à des experts spécifiques pour chaque service.",
//         },
//     ];

//     const [activeIndex, setActiveIndex] = useState<number | null>(null);

//     const toggleFAQ = (index: number | null) => {
//         setActiveIndex(activeIndex === index ? null : index);
//     };

//     return (
//         <div className="xl:max-w-[1300px] lg:max-w-[1100px] mx-auto p-6 flex justify-around mt-20">
//             <h2 className="text-3xl italic text-[#07272d] mb-6 w-[30%] relative after:content-[''] after:block after:w-12 after:h-1 after:bg-[#4CAF63] after:mt-6 ">
//                 Questions Fréquemment Posées
//             </h2>
//             <div className="space-y-4 ml-20 w-[60%]">
//                 {faqs.map((faq, index) => (
//                     <div
//                         key={index}
//                         className="border-b-2 border-[#4CAF63] pb-4 cursor-pointer"
//                         onClick={() => toggleFAQ(index)}
//                     >
//                         <h3 className="text-lg italic  text-[#07272d] flex justify-between items-center">
//                             {faq.question}
//                             <span>
//                                 {activeIndex === index ? "▲" : "▼"}
//                             </span>
//                         </h3>
//                         {activeIndex === index && (
//                             <p className="mt-6 text-xl text-gray-600">{faq.answer}</p>
//                         )}
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }
"use client";

import { useState } from "react";
import { MdOutlineExpandMore } from "react-icons/md";
import { MdExpandLess } from "react-icons/md";

export default function FAQ() {
    const faqs = [
        {
            question: "Quelle est la différence entre l'enseignement à domicile et les soins à domicile pour les personnes âgées ?",
            answer:
                "L'enseignement à domicile se concentre sur le soutien éducatif pour les individus, tandis que les soins à domicile pour les personnes âgées impliquent une assistance dans les activités quotidiennes et les besoins de santé.",
        },
        {
            question: "Comment trouver le bon enseignant ou soignant pour un proche ?",
            answer:
                "Identifiez les besoins spécifiques de votre proche. Pour l'enseignement, trouvez un enseignant qualifié avec de l'expérience dans la matière concernée. Pour les soins à domicile, recherchez un soignant avec des certifications et des recommandations positives.",
        },
        {
            question: "Les services d'enseignement à domicile et de soins à domicile sont-ils abordables ?",
            answer:
                "Les coûts varient en fonction du type de service, de la fréquence et de votre localisation. De nombreuses agences proposent des plans personnalisés adaptés à votre budget.",
        },
        {
            question: "Comment assurer la sécurité lors de l'embauche d'une personne pour des services à domicile ?",
            answer:
                "Effectuez toujours des vérifications d'antécédents, demandez des références et embauchez via des agences réputées pour garantir la sécurité et le professionnalisme.",
        },
        {
            question: "Une seule personne peut-elle fournir à la fois un enseignement et des soins à domicile ?",
            answer:
                "Cela dépend des compétences de la personne. Certaines personnes possèdent des qualifications dans les deux domaines, mais il est souvent préférable de faire appel à des experts spécifiques pour chaque service.",
        },
    ];

    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number | null) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="xl:max-w-[1300px] lg:max-w-[1100px] mx-auto p-6 flex justify-around mt-20">

            <div className="space-y-4 mr-32 w-[60%]">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="border-b border-[#4CAF63] pb-4 cursor-pointer"
                        onClick={() => toggleFAQ(index)}
                    >
                        <h3 className="text-lg  text-[#00293a] flex justify-between items-center alo">
                            {faq.question}
                            <span>{activeIndex === index ? <MdExpandLess className="text-4xl text-[#4CAF63]" />
                                : <MdOutlineExpandMore className="text-4xl text-[#4CAF63]" />}</span>
                        </h3>
                        <div
                            className={`transition-all duration-300 overflow-hidden ${activeIndex === index ? "max-h-[500px]" : "max-h-0"
                                }`}
                        >
                            <p className="mt-6 text-xl text-gray-600">{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>

            <h1 className="font-bold  text-[#07272d] mb-6 w-[30%] relative after:content-[''] after:block after:w-12 after:h-1 after:bg-[#4CAF63] after:mt-6">
                Questions Fréquemment Posées
            </h1>
        </div>
    );
}
