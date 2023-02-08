import React from 'react';
import Button from '../button/Button';
import Project from '../project/Project';
import './realisations.scss';



let technos = ["React", "Blender", "Three.JS", "JavaScript"];
let realisations = [{
    title: "Kasa - location de logements",
    img: "Kasa.png",
    alt: "Fiche de présentation d'un logement du site kasa",
    link: "https://github.com/",
    technos: ["HTML", "CSS", "React", "JS"]
},
{
    title: "Kasa - location de logements",
    img: "Kasa.png",
    alt: "Fiche de présentation d'un logement du site kasa",
    link: "https://github.com/",
    technos: ["HTML", "CSS", "React", "JS"]
}];



const Realisations = () => {
    return (
        <>
            <div className='realisations__buttons'>
                <Button class={"realisations__buttons-button All"} title="Tout" />

                {technos.map((techno, index) => (
                    <Button class={"realisations__buttons-button " + techno} title={techno} key={index} />
                ))}
            </div>
            <div>
                {realisations.map((projet, index) => (
                    <Project title={projet.title} img={projet.img} alt={projet.alt} link={projet.link} key={index} />
                ))}
            </div>
        </>
    );
};

export default Realisations;