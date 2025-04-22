import React from 'react';

const Jouer = () => {
    return (
        <section id={'jouer'} className={'relative container mx-auto min-h-80 px-2 md:px-0'}>
            <h1>Comment jouer ?</h1>
            <div className={'absolute top-1/2 -translate-y-1/2 md:text-xl'}>
                <p>Pour jouer au serveur, il faut : </p>
                <ul className={'list-inside list-disc'}>
                    <li className={'py-2'}>Minecraft 1.21 crack ON</li>
                    {/*L'adresse IP est fictive*/}
                    <li>Adresse IP : 12.34.56.7889</li>
                </ul>
            </div>
        </section>
    );
};

export default Jouer;
