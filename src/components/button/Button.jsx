import React from 'react';
import './button.scss';


const Button = (props) => {
    return (
        <>
            <button className={"button-primaryColor " + props.class}>{props.title}</button>
        </>
    );
};

export default Button;