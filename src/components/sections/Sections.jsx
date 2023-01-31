import React from 'react';

const Sections = (props) => {
    return (
        <section id={props.id}>
            <h2>{props.title}
                <span>{props.subtitle}</span>
            </h2>
            <div>{props.content}</div>
        </section>
    );
};

export default Sections;