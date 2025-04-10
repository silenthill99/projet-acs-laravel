import { Head, Link } from '@inertiajs/react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

type ImageProps = {
    src: string,
    name: string,
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
            name: 'Spawn du serveur'
        }, {
            src: '/images/vogue-merry.jpg',
            name: 'Vogue Merry'
        }
    ];

    return (
        <section className={'min-h-screen flex flex-col font-roboto bg-amber-950'}>
            <Head title="MineAnime">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <header className={'min-h-12.5 bg-gray-300'}>
                {/*Menu de navigation*/}
                <nav className={'container mx-auto flex items-center justify-between'}>
                    <h1 className={'text-center ps-2'}>MineAnime</h1>

                    {/*Menu classique*/}
                    <ul className={'hidden md:flex gap-3 text-xl'}>
                        <li><Link href={route('home')}
                                  className={`hover:underline`}>Accueil</Link>
                        </li>
                    </ul>

                    {/*Menu mobile*/}
                    <button className={'md:hidden p-5'} onClick={openMenu}>
                        <img src={'/images/burger-bar.svg'} alt={'Burger Bar'} className={'h-6.25'} />
                    </button>
                    <ul className={`${!showMenu && 'hidden'} md:hidden bg-white fixed top-0 right-0 bottom-0 left-0 flex flex-col
                        justify-center items-center z-10`} onClick={closeMenu}>
                        <Button className={'bg-gray-300 active:bg-gray-400 absolute top-5 right-5'}>
                            <img src={'/images/croix.svg'} alt={'croix'} className={'w-6.25'} />
                        </Button>
                        <Link href={route('home')}>Page d'accueil</Link>
                    </ul>
                </nav>
            </header>
            <main className={'grow container mx-auto text-white p-2 md:p-0 flex flex-col md:block gap-2'}>
                <h1>Page d'accueil</h1>
                <section className={'grid md:grid-cols-2 gap-2'}>
                    <p>Êtes vous passionnés par les animés et Minecraft ? Alors ce serveur est fait pour vous !</p>
                    <Carousel className={'w-3/4 mx-auto'}>
                        <CarouselContent>
                            {images.map((img, index) => (
                                <CarouselItem key={index}>
                                    <figure className={'relative h-full'}>
                                        <img src={img.src} alt={img.name} className={'w-full h-full object-cover'}/>
                                        <figcaption className={'absolute bottom-0 left-0 right-0 bg-black/75 p-5'}>
                                            {img.name}
                                        </figcaption>
                                    </figure>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselNext className={'text-black cursor-pointer'} />
                        <CarouselPrevious className={'text-black cursor-pointer'} />
                    </Carousel>
                </section>
            </main>
        </section>
    );
}
