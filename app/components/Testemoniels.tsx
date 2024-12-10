
import Carou from "./Carou";
import { LuShieldCheck } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { LuMessageCircleHeart } from "react-icons/lu";

const Temoignages = () => {
    return (
        <div className="xl:max-w-[1300px] lg:max-w-[1100px] mx-auto my-6">
            <section className="flex flex-col md:flex-row justify-between p-6 bg-background text-[#172c42]">
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <h1 className="text-4xl font-bold mb-4">Ne vous fiez pas uniquement à une seule recommandation</h1>
                    <p className="text-muted-foreground mb-6 text-lg">Découvrez une plateforme incontournable dédiée aux soins pour seniors et à l&apos;accompagnement éducatif à domicile.</p>
                    <div className="flex flex-col space-y-6 text-lg w-full">
                        <div className="flex space-x-6">
                            <LuShieldCheck className="text-[60px]" />
                            <p className="w-[80%]">
                                100 % des soignants sont vérifiés avant que vous puissiez les engager
                            </p>
                        </div>
                        <div className="flex space-x-6">
                            <CgProfile className="text-[60px]" />
                            <p className="w-[80%]">
                                Profils transparents, notes et avis accessibles
                            </p>
                        </div>
                        <div className="flex items-center space-x-6">
                            <LuMessageCircleHeart className="text-[60px]" />
                            <p className="w-[80%]">
                                Équipes d&apos;assistance et de sécurité dédiées
                            </p>
                        </div>
                    </div>
                    <button className="mt-6 bg-[#172c42] text-white hover:bg-primary/80 p-4 px-8 rounded-full">Commencez maintenant</button>
                </div>
                <div className="md:w-[40%] flex items-center justify-end ml-10  mt-4">
                    <Carou />
                </div>
            </section>
        </div>
    );
};

export default Temoignages;
