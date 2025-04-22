import React from 'react';

type PlayerProps = {
    pseudo: string;
    role: string;
};

const players: PlayerProps[] = [
    {
        pseudo: 'Florian002',
        role: 'Fondateur',
    },
    {
        pseudo: 'Elikill58',
        role: 'Développeur',
    },
];

const Equipe = () => {
    return (
        <section id={'equipe'} className={'bg-white px-2 text-black md:px-0'}>
            <div className="container mx-auto py-5">
                <h1>Notre équipe</h1>
                <div className={'mx-auto my-20 w-3/4 divide-y rounded-xl border text-center md:w-1/2'}>
                    {players.map((p, index) => (
                        <div key={index} className={'grid grid-cols-2 divide-x'}>
                            <div className={'flex items-center justify-between gap-2 p-5'}>
                                <img src={'https://mineskin.eu/helm/' + p.pseudo} className={'w-1/4'} alt={p.pseudo} />
                                <p>{p.pseudo}</p>
                            </div>
                            <p className={'flex items-center justify-center'}>{p.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Equipe;
