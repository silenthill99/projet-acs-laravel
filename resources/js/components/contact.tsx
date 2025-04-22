import React from 'react';
import ContactForm from '@/components/contact-form';

const Contact = () => {
    return (
        <section id={'contact'} className={'bg-white px-2 text-black shadow-2xl shadow-black md:px-0'}>
            <div className={'container mx-auto'}>
                <h1>Nous contacter</h1>
                <ContactForm />
            </div>
        </section>
    );
};

export default Contact;
