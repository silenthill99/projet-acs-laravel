import { Button } from '@/components/ui/button';
import { SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import Boutique from '@/components/boutique';
import Equipe from '@/components/equipe';
import Contact from '@/components/contact';
import Jouer from '@/components/jouer';
import Presentation from '@/components/Presentation';

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

    return (
        <>
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
                        <Link href={route('dashboard')} className={'hidden hover:underline lg:block'}>
                            Tableau de bord
                        </Link>
                    ) : (
                        <div className={'hidden lg:block'}>
                            <Link href={route('login')} className={'hover:underline'}>
                                Se connecter
                            </Link>
                            <span className={'px-2'}>/</span>
                            <Link href={route('register')} className={'hover:underline'}>
                                Créer un compte
                            </Link>
                        </div>
                    )}

                    <ul className={'hidden gap-3 text-xl lg:flex'}>
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
                        <li>
                            <a href={'#boutique'} className={'hover:underline'}>
                                Boutique
                            </a>
                        </li>
                    </ul>

                    {/*Menu mobile*/}
                    <button className={'p-5 lg:hidden'} onClick={openMenu}>
                        <img src={'/images/burger-bar.svg'} alt={'Burger Bar'} className={'h-6.25'} />
                    </button>
                    <ul
                        className={`${!showMenu && 'hidden'} fixed top-0 right-0 bottom-0 left-0 z-10 flex flex-col justify-center bg-white text-center md:hidden`}
                    >
                        <Button className={'absolute top-5 right-5 bg-gray-300 active:bg-gray-400'} onClick={closeMenu}>
                            <img src={'/images/croix.svg'} alt={'croix'} className={'w-6.25'} />
                        </Button>
                        <li className={'p-1.5 active:bg-gray-300'}>
                            <a href={'#equipe'} onClick={closeMenu}>
                                Notre équipe
                            </a>
                        </li>
                        <li className={'p-1.5 active:bg-gray-300'}>
                            <a href={'#contact'} onClick={closeMenu}>
                                Nous contacter
                            </a>
                        </li>
                        <li className={'p-1.5 active:bg-gray-300'}>
                            <a href={'#jouer'} onClick={closeMenu}>
                                Comment jouer
                            </a>
                        </li>
                        <li className={'p-1.5 active:bg-gray-300'}>
                            <a href={'#boutique'} onClick={closeMenu}>
                                Boutique
                            </a>
                        </li>
                        <li className={'absolute right-2 bottom-2 left-2 flex justify-center text-sm'}>
                            {auth.user ? (
                                <Link href={route('dashboard')}>Profil</Link>
                            ) : (
                                <div className={'flex gap-2'}>
                                    <Link href={route('login')}>Se connecter</Link>
                                    <Link href={route('register')}>Créer un compte</Link>
                                </div>
                            )}
                        </li>
                    </ul>
                </nav>
            </header>
            <main className={'flex grow flex-col text-white md:block'}>
                <Presentation />
                <Equipe />
                <Contact />
                <Jouer />
                <Boutique />
            </main>

            {/*Bouton de retour au début*/}
            <Button
                onClick={() => window.scrollTo({ top: 0 })}
                className={`fixed right-3 bottom-3 w-min cursor-pointer border bg-white text-black transition-opacity duration-300 hover:text-white ${visible ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
            >
                Retour au menu
            </Button>
        </>
    );
}
