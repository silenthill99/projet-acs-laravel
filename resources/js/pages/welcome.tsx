import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Head } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import ContactForm from '@/components/contact-form';

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
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
    }, []);

    function closeMenu() {
        return setShowMenu(false);
    }

    function openMenu() {
        return setShowMenu(true);
    }

    const images: ImageProps[] = [
        {
            src: '/images/ChatGPT%20Image%209%20avr.%202025,%2013_04_32.png',
            name: 'Spawn du serveur'
        },
        {
            src: '/images/vogue-merry.jpg',
            name: 'Vogue Merry'
        }
    ];

    const players: PlayerProps[] = [
        {
            pseudo: 'Florian002',
            role: 'Fondateur'
        }, {
            pseudo: 'Elikill58',
            role: 'Développeur'
        }
    ]

    return (
        <section className={'font-roboto flex min-h-screen flex-col bg-amber-950'}>
            <Head title="MineAnime">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <header id={'header'} className={'min-h-12.5 bg-gray-300 p-2'}>
                {/*Menu de navigation*/}
                <nav className={'container mx-auto flex items-center justify-between'}>
                    <h1 className={'text-center'}>MineAnime</h1>

                    {/*Menu classique*/}
                    <ul className={'hidden gap-3 text-xl md:flex'}>
                        <li>
                            <a href={'#equipe'} className={'hover:underline'}>
                                Notre équipe
                            </a>
                        </li>
                        <li>
                            <a href={'#contact'} className={'hover:underline'}>
                                Nous contacter
                            </a>
                        </li>
                    </ul>

                    {/*Menu mobile*/}
                    <button className={'p-5 md:hidden'} onClick={openMenu}>
                        <img src={'/images/burger-bar.svg'} alt={'Burger Bar'} className={'h-6.25'} />
                    </button>
                    <ul
                        className={`${!showMenu && 'hidden'} fixed top-0 right-0 bottom-0 left-0 z-10 flex flex-col
                         items-center justify-center bg-white md:hidden gap-3`}
                    >
                        <Button className={'absolute top-5 right-5 bg-gray-300 active:bg-gray-400'} onClick={closeMenu}>
                            <img src={'/images/croix.svg'} alt={'croix'} className={'w-6.25'} />
                        </Button>
                        <li>
                            <a href={'#equipe'} onClick={closeMenu}>Notre équipe</a>
                        </li>
                        <li>
                            <a href={'#contact'} onClick={closeMenu}>Nous contacter</a>
                        </li>
                    </ul>
                </nav>
            </header>
            <main className={'flex grow flex-col text-white md:block'}>
                <section className={'container mx-auto my-5 grid gap-2 p-2 md:my-20 md:grid-cols-2'}>
                    <div className={'flex flex-col justify-center gap-10 md:gap-0'}>
                        <h1>Page d'accueil</h1>
                        <p className={'flex grow items-center'}>
                            Êtes vous passionnés par les animés et Minecraft ? Alors ce serveur est fait pour vous !
                        </p>
                    </div>
                    <div className={'px-2 md:px-0'}>
                        <Carousel className={'mx-auto w-3/4 py-30 md:py-0'}>
                            <CarouselContent>
                                {images.map((img, index) => (
                                    <CarouselItem key={index}>
                                        <figure className={'relative h-full'}>
                                            <img src={img.src} alt={img.name}
                                                 className={'h-full w-full object-cover'} />
                                            <figcaption
                                                className={'absolute right-0 bottom-0 left-0 bg-black/75 p-5'}>{img.name}</figcaption>
                                        </figure>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselNext className={'cursor-pointer text-black'} />
                            <CarouselPrevious className={'cursor-pointer text-black'} />
                        </Carousel>
                    </div>
                </section>
                <section id={'equipe'} className={'px-2 text-black md:px-0 bg-white'}>
                    <div className="container mx-auto py-5">
                        <h1>Notre équipe</h1>
                        <div className={'mx-auto w-3/4 divide-y rounded-xl border text-center md:w-1/2 my-20'}>
                            {players.map((p, index) => (
                                <div key={index} className={'grid grid-cols-2 divide-x'}>
                                    <div className={'flex items-center justify-between gap-2 p-5'}>
                                        <img src={'https://mineskin.eu/helm/' + p.pseudo} className={'w-1/4'}
                                             alt={p.pseudo} />
                                        <p>{p.pseudo}</p>
                                    </div>
                                    <p className={'flex items-center justify-center'}>{p.role}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <section id={'contact'} className={"text-black bg-white shadow-2xl shadow-black px-2 md:px-0"}>
                    <div className={"container mx-auto"}>
                        <h1>Nous contacter</h1>
                        <ContactForm/>
                    </div>
                </section>
            </main>

            {/*Bouton de retour au début*/}
            <Button onClick={() => window.scrollTo({ top: 0 })}
                    className={`w-min border bg-white text-black hover:text-white fixed bottom-3 right-3 transition-opacity
                    cursor-pointer duration-300 ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            >
                Retour au menu
            </Button>
        </section>
    );
}
