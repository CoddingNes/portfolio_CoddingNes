import React, { useRef } from 'react';
import Input from '../input/Input';
import Textarea from '../textarea/Textarea';
import emailjs from '@emailjs/browser';
import './form.scss';



const Form = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_d5jz5bl', 'template_uzjrtr8', form.current, 'XiNbf4nHndikDxCBL')
            .then((result) => {
                console.log(result.text);
                document.querySelector('.form__send-button').value = "J'ai bien reçu votre message, merci !";
                setTimeout(() => {
                    document.querySelector('.form__user-name-input').value = '';
                    document.querySelector('.form__user-email-input').value = '';
                    document.querySelector('.form__message-input').value = '';
                    document.querySelector('.form__send-button').value = "Envoyer";
                }, 3000
                )

            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <form className='form' ref={form} onSubmit={sendEmail}>
            <Input title="user-name" label="Nom :" type="text" />
            <Input title="user-email" label="Email :" type="email" />
            <Textarea title="message" label="Message :" />
        </form>
    );
};

export default Form;