import React from 'react';

const Project = (props) => {
    return (
        <a href={props.link}>
            <article className='hover'>
                <figure>
                    <img src={props.img}
                        alt={props.alt} />
                    <figcaption>
                        <h3>{props.title}</h3>
                    </figcaption>
                </figure>
            </article>
        </a>
    );
};

export default Project;