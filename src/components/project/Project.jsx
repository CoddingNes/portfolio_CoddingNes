import React from 'react';
import './project.scss';

const Project = (props) => {
    return (
        <a className='projet' href={props.link}>
            <article className='hover'>
                <figure>
                    <img src={'./' + props.img}
                        alt={props.alt} crossOrigin="anonymous" />
                    <figcaption>
                        <h3>{props.title}</h3>
                    </figcaption>
                </figure>
            </article>
        </a>
    );
};

export default Project;