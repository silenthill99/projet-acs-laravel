import React from 'react';
import { Button } from '@/components/ui/button';

type Props = {
    name: string,
    values: string[],
    price: number,
    className?: string
}

const CardFormule = (props: Props) => {
    return (
        <div className={`rounded-xl bg-white flex flex-col p-2 shadow-xl min-h-96 ${props.className}`}>
            <div className={"grow text-black"}>
                <h2 className={"text-center"}>{props.name}</h2>
                <ul className={"list-disc list-inside"}>
                    {props.values.map((value, index) => (
                        <li key={index}>{value}</li>
                    ))}
                </ul>
            </div>
            <Button className={"self-center cursor-pointer max-w-full h-20 md:h-auto"}>
                <span className={"w-full text-wrap"}>Choisir cette formule ({props.price}€ / mois)</span>
            </Button>
        </div>
    );
};

export default CardFormule;
