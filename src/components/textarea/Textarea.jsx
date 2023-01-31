import React from 'react';
import Button from '../button/Button';

const Textarea = (props) => {
    return (
        <div class={"form__" + props.title}>
            <label for={props.title}>{props.label}</label>
            <textarea name={props.title} id={props.title} cols="30" rows="10"></textarea>
            <Button class="form__send-button" title="Envoyer" />
        </div>
    );
};

export default Textarea;