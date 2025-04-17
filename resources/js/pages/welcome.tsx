import ContactForm from '@/components/contact-form';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';

type ImageProps = {
    src: string;
    name: string;
};

type PlayerProps = {
    pseudo: string;
    role: string;
};

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    const [showMenu, setShowMenu] = useState(false);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);

        return function() {
            window.removeEventListener('scroll', handleScroll);
        }
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
                    {auth.user ? (
                        <Link href={route('dashboard')} className={'hidden hover:underline md:block'}>
                            Tableau de bord
                        </Link>
                    ) : (
                        <div className={'hidden md:block'}>
                            <Link href={route('login')} className={'hover:underline'}>
                                Se connecter
                            </Link>
                            <span className={'px-2'}>/</span>
                            <Link href={route('register')} className={'hover:underline'}>
                                Créer un compte
                            </Link>
                        </div>
                    )}

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
                        <li>
                            <a href={'#jouer'} className={'hover:underline'}>
                                Comment jouer ?
                            </a>
                        </li>
                    </ul>

                    {/*Menu mobile*/}
                    <button className={'p-5 md:hidden'} onClick={openMenu}>
                        <img src={'/images/burger-bar.svg'} alt={'Burger Bar'} className={'h-6.25'} />
                    </button>
                    <ul
                        className={`${!showMenu && 'hidden'} fixed top-0 right-0 bottom-0 left-0 z-10 flex flex-col
                        justify-center bg-white text-center md:hidden`}
                    >
                        <Button className={'absolute top-5 right-5 bg-gray-300 active:bg-gray-400'} onClick={closeMenu}>
                            <img src={'/images/croix.svg'} alt={'croix'} className={'w-6.25'} />
                        </Button>
                        <li className={'active:bg-gray-300 p-1.5'}>
                            <a href={'#equipe'} onClick={closeMenu}>
                                Notre équipe
                            </a>
                        </li>
                        <li className={'active:bg-gray-300 p-1.5'}>
                            <a href={'#contact'} onClick={closeMenu}>
                                Nous contacter
                            </a>
                        </li>
                        <li className={'active:bg-gray-300 p-1.5'}>
                            <a href={'#jouer'} onClick={closeMenu}>
                                Comment jouer
                            </a>
                        </li>
                        <li className={"text-sm absolute bottom-2 left-2 right-2 flex justify-center"}>
                            {auth.user ? (
                                <Link href={route('dashboard')}>Profil</Link>
                            ) : (
                                <div className={"flex gap-2"}>
                                    <Link href={route('login')}>Se connecter</Link>
                                    <Link href={route('register')}>Créer un compte</Link>
                                </div>
                            )}
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
                <section id={'contact'} className={'bg-white px-2 text-black shadow-2xl shadow-black md:px-0'}>
                    <div className={'container mx-auto'}>
                        <h1>Nous contacter</h1>
                        <ContactForm />
                    </div>
                </section>
                <section id={'jouer'} className={'relative container mx-auto min-h-80 px-2'}>
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
            </main>

            {/*Bouton de retour au début*/}
            <Button
                onClick={() => window.scrollTo({ top: 0 })}
                className={`fixed right-3 bottom-3 w-min cursor-pointer border bg-white text-black transition-opacity duration-300 hover:text-white ${visible ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
            >
                Retour au menu
            </Button>
        </section>
    );
}
