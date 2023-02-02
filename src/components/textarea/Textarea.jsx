import React from 'react';
import Button from '../button/Button';
import './textarea.scss';


const Textarea = (props) => {
    return (
        <div className={"form__" + props.title}>
            <label htmlFor={props.title}>{props.label}</label>
            <textarea name={props.title} id={props.title} cols="30" rows="10"></textarea>
            <Button className="form__send-button" title="Envoyer" />
        </div>
    );
};

export default Textarea;