import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

type ImageProps = {
    src: string;
    name: string;
};

type PlayerProps = {
    pseudo: string;
    role: string;
}

export default function Welcome() {
    const [showMenu, setShowMenu] = useState(false);

    function closeMenu() {
        return setShowMenu(false);
    }

    function openMenu() {
        return setShowMenu(true);
    }

    const images: ImageProps[] = [
        {
            src: '/images/ChatGPT%20Image%209%20avr.%202025,%2013_04_32.png',
            name: 'Spawn du serveur',
        },
        {
            src: '/images/vogue-merry.jpg',
            name: 'Vogue Merry',
        },
    ];

    const players: PlayerProps[] = [
        {
            pseudo: "Florian002",
            role: "Fondateur"
        }
    ]

    return (
        <section className={'font-roboto flex min-h-screen flex-col bg-amber-950'}>
            <Head title="MineAnime">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <header className={'min-h-12.5 bg-gray-300'}>
                {/*Menu de navigation*/}
                <nav className={'container mx-auto flex items-center justify-between'}>
                    <h1 className={'ps-2 text-center'}>MineAnime</h1>

                    {/*Menu classique*/}
                    <ul className={'hidden gap-3 text-xl md:flex'}>
                        <li>
                            <a href={'#equipe'} className={'hover:underline'}>
                                Notre équipe
                            </a>
                        </li>
                    </ul>

                    {/*Menu mobile*/}
                    <button className={'p-5 md:hidden'} onClick={openMenu}>
                        <img src={'/images/burger-bar.svg'} alt={'Burger Bar'} className={'h-6.25'} />
                    </button>
                    <ul
                        className={`${!showMenu && 'hidden'} fixed top-0 right-0 bottom-0 left-0 z-10 flex flex-col items-center justify-center bg-white md:hidden`}
                        onClick={closeMenu}
                    >
                        <Button className={'absolute top-5 right-5 bg-gray-300 active:bg-gray-400'}>
                            <img src={'/images/croix.svg'} alt={'croix'} className={'w-6.25'} />
                        </Button>
                        <li>
                            <a href={'#equipe'}>Notre équipe</a>
                        </li>
                    </ul>
                </nav>
            </header>
            <main className={'flex grow flex-col gap-2 text-white md:block'}>
                <section className={'container mx-auto my-5 grid gap-2 p-2 md:my-20 md:grid-cols-2 md:p-0'}>
                    <div className={'flex flex-col justify-center gap-10 md:gap-0'}>
                        <h1 className="p-4">Page d'accueil</h1>
                        <p className={'flex grow items-center'}>
                            Êtes vous passionnés par les animés et Minecraft ? Alors ce serveur est fait pour vous !
                        </p>
                    </div>
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
                </section>
                <section id={'equipe'} className={'bg-white text-black'}>
                    <div className="container mx-auto pb-5">
                        <h1>Notre équipe</h1>
                        <div className={'mx-auto w-3/4 divide-y rounded-xl border text-center md:w-1/2'}>
                            {players.map((p, index) => (
                                <div key={index} className={'grid grid-cols-2 divide-x'}>
                                    <div className={'flex items-center justify-between p-5'}>
                                        <img src={'https://mineskin.eu/helm/' + p.pseudo} className={'overflow-hidden'} alt={p.pseudo} width={100} />
                                        <p>{p.pseudo}</p>
                                    </div>
                                    <p className={'flex items-center justify-center'}>{p.role}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </section>
    );
}
