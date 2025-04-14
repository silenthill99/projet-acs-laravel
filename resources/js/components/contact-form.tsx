import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@headlessui/react';
import { useForm } from '@inertiajs/react';
import { FormEvent } from 'react';

type ContactForm = {
    email: string;
    pseudo: string;
    subject: string;
    message: string;
};

const ContactForm = () => {
    const { data, setData, post, reset } = useForm<ContactForm>({
        email: '',
        pseudo: '',
        subject: '',
        message: ''
    });

    function submit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        post(route('home'), {
            onFinish: () => {
                reset();
            },
        });
    }

    return (
        <form action="" method={'post'} className={'pb-20'} onSubmit={submit}>
            <div className={'my-5 flex flex-col gap-5 md:grid md:grid-cols-2'}>
                <div>
                    <Label>Votre adresse mail</Label>
                    <Input
                        type={'email'}
                        placeholder={'Votre adresse mail'}
                        className={'rounded-none border-transparent border-b-cyan-500 px-0 shadow-none'}
                        name={'email'}
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        required
                    />
                </div>
                <div>
                    <Label>Votre pseudo en jeu</Label>
                    <Input
                        type={'text'}
                        placeholder={'Votre pseudo en jeu'}
                        className={'rounded-none border-transparent border-b-cyan-500 px-0 shadow-none'}
                        name={'pseudo'}
                        value={data.pseudo}
                        onChange={(e) => {
                            setData('pseudo', e.target.value);
                        }}
                        required
                    />
                </div>
            </div>
            <Label>Sujet de votre demande</Label>
            <Input
                type={'text'}
                placeholder={'Sujet de votre demande'}
                className={'rounded-none border-transparent border-b-cyan-500 px-0 shadow-none'}
                name={'subject'}
                value={data.subject}
                onChange={(e) => {
                    setData('subject', e.target.value);
                }}
            />{' '}
            <br />
            <Label>Votre message</Label>
            <Textarea
                className={
                    'focus-visible:border-ring focus-visible:ring-ring/50 h-50 w-full border border-cyan-500 focus-visible:ring-[3px] focus-visible:outline-none'
                }
                name={"message"}
                placeholder={'Votre message'}
                value={data.message}
                onChange={(e) => {setData("message", e.target.value)}}
                required
            ></Textarea>
            <Button type="submit" className={'cursor-pointer shadow'}>
                Envoyer
            </Button>
        </form>
    );
};

export default ContactForm;
