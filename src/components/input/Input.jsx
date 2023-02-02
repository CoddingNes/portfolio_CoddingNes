import React from 'react';
import './input.scss';


const Input = (props) => {
    return (
        <div className={"form__" + props.title}>
            <label htmlFor={props.title}>{props.label}</label>
            <input id={props.title} name={props.title} type="text" required />
        </div>
    );
};

export default Input;