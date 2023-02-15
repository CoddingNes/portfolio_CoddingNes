import React from 'react';
import './textarea.scss';


const Textarea = (props) => {
    return (
        <div className={"form__" + props.title}>
            <label htmlFor={props.title}>{props.label}</label>
            <textarea className='form__message-input' name={props.title} id={props.title} cols="30" rows="10" required></textarea>
            <input className="form__send-button button-primaryColor" type="submit" value="Envoyer" />
        </div>
    );
};

export default Textarea;