import CardFormule from '@/components/card-formule';

const Boutique = () => {
    return (
        <section id={'boutique'} className={'container mx-auto px-2 md:px-0'}>
            <h1>Boutique</h1>
            <div className={'mb-20 grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-5'}>
                <CardFormule
                    name={'VIP'}
                    values={['Accès au fly', 'Pseudos en couleur dans le tchat et le tab']}
                    price={5}
                    className={'md:col-start-2'}
                />
                <CardFormule name={'VIP +'} values={['Avantages VIP', 'Accès au /gamemode', 'Prioritaire sur les tickets Discord']} price={10} />
            </div>
        </section>
    );
};

export default Boutique;
