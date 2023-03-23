import React, { useEffect, useState } from 'react';
import './project.scss';
// import img from './hotTakes.png';

const Project = (props) => {
    const [flip, setFlip] = useState(false);
    const [showOne, setShowOne] = useState(false)

    const flipcard = () => {
        if (showOne) {
            props.setHideDetails(true)
            setShowOne(false);
            setFlip(true);
            setTimeout(() => { setFlip(false) }, 300);
        }
        else {
            props.setHideDetails(true)
            setShowOne(true);
            setFlip(true);
            setTimeout(() => { setFlip(false) }, 300);
        }
    }

    useEffect(() => {
    }, [showOne])

    return (
        <article className={flip ? 'flip ' : ""} onClick={flipcard} >
            <figure>
                <img src={'./' + props.img}
                    alt={props.alt} crossOrigin="anonymous" />
                <figcaption>
                    <h3 className={showOne ? 'showDetails ' : ""}>{props.title}</h3>
                </figcaption>
            </figure>
            {showOne ?
                <div className='project__details'>
                    <p className='project__details-summary'>{props.summary}</p>
                    {props.link === "" ?
                        "" :
                        <a className='project__details-link' href={props.link}>
                            <button className='project__details-button button-primaryColor'>
                                Voir plus
                            </button>
                        </a>
                    }
                </div> :
                ""
            }
        </article>
    );
};

export default Project;