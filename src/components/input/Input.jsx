import React from 'react';

const Input = (props) => {
    return (
        <div class={"form__" + props.title}>
            <label for={props.title}>{props.label}</label>
            <input id={props.title} name={props.title} type="text" required />
        </div>
    );
};

export default Input;