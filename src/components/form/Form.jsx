import React from 'react';
import Input from '../input/Input';
import Textarea from '../textarea/Textarea';


const Form = () => {
    return (
        <form className='form'>
            <Input title="name" label="Nom :" />
            <Input title="email" label="Email :" />
            <Textarea title="message" label="Message :" />
        </form>
    );
};

export default Form;