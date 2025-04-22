import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const Presentation = () => {

    type ImageProps = {
        src: string;
        name: string;
    };

    const images: ImageProps[] = [
        {
            src: '/images/ChatGPT%20Image%209%20avr.%202025,%2013_04_32.png',
            name: 'Spawn du serveur',
        },
        {
            src: '/images/vogue-merry.jpg',
            name: 'Vogue Merry',
        },
        {
            src: '/images/tour-celeste.webp',
            name: "Tour céleste (Hunter X Hunter)"
        }
    ];

    return (
        <section className={'container mx-auto my-5 grid gap-2 p-2 md:my-20 md:grid-cols-2'}>
            <div className={'flex flex-col justify-center gap-10 md:gap-0'}>
                <h1>Page d'accueil</h1>
                <p className={'flex grow items-center'}>
                    Êtes vous passionnés par les animés et Minecraft ? Alors ce serveur est fait pour vous !
                </p>
                <p className={"text-2xl font-semibold uppercase py-10"}>Tout vos univers préférés dans un seul endroit</p>
                <ul className={"list-disc list-inside"}>
                    <li>Hunter X Hunter</li>
                    <li>One piece</li>
                    <li>Made in abyss</li>
                    <li>Full metal alchemist</li>
                    <li>Dragonball</li>
                    <li>Naruto</li>
                    <li>L'attaque des titans</li>
                    <li>My hero academia</li>
                    <li>Spy X Family</li>
                    <li>Bocchi the rock</li>
                    <li>etc.</li>
                </ul>
            </div>
            <div className={'px-2 md:px-0'}>
                <Carousel className={'mx-auto w-3/4 py-30 md:py-0'}>
                    <CarouselContent>
                        {images.map((img, index) => (
                            <CarouselItem key={index}>
                                <figure className={'relative h-full'}>
                                    <img src={img.src} alt={img.name} className={'h-full w-full object-cover'} />
                                    <figcaption className={'absolute right-0 bottom-0 left-0 bg-black/75 p-5'}>{img.name}</figcaption>
                                </figure>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselNext className={'cursor-pointer text-black'} />
                    <CarouselPrevious className={'cursor-pointer text-black'} />
                </Carousel>
            </div>
        </section>
    );
};

export default Presentation;
