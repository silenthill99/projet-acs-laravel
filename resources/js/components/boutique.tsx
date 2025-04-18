import React from 'react';
import { Button } from '@/components/ui/button';

const Boutique = () => {
    return (
        <section id={"boutique"} className={"container mx-auto px-2 md:px-0"}>
            <h1>Boutique</h1>
            <div className={"grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-5 mb-20"}>
                <div className={"rounded-xl min-h-96 bg-white md:col-start-2 flex flex-col p-2 shadow-xl"}>
                    <div className={"grow text-black"}>
                        <h2 className={"text-center"}>VIP</h2>
                        <ul className={"list-disc list-inside"}>
                            <li>Accès au fly</li>
                            <li>Pseudos en couleur dans le tchat et le tab</li>
                        </ul>
                    </div>
                    <Button className={"self-center cursor-pointer max-w-full h-20 md:h-auto"}>
                        <span className={"w-full text-wrap"}>Choisir cette formule (5€ / mois)</span>
                    </Button>
                </div>
                <div className={"rounded-xl bg-white flex flex-col p-2 shadow-xl"}>
                    <div className={"grow text-black"}>
                        <h2 className={"text-center"}>VIP +</h2>
                        <ul className={"list-disc list-inside"}>
                            <li>Avantages VIP</li>
                            <li>Accès au /gamemode</li>
                            <li>Prioritaire sur les tickets Discord</li>
                        </ul>
                    </div>
                    <Button className={"self-center cursor-pointer max-w-full h-20 md:h-auto"}>
                        <span className={"w-full text-wrap"}>Choisir cette formule (10€ / mois)</span>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Boutique;
