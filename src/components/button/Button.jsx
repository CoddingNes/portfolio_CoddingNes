import React from 'react';

const Button = (props) => {
    return (
        <>
            <button class={props.class}>{props.title}</button>
        </>
    );
};

export default Button;