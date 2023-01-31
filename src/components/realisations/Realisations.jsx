import React from 'react';
import Button from '../button/Button';
import Project from '../project/Project';



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
                {technos.map((techno) => (
                    <Button title={techno} />
                ))}
            </div>
            <div>
                {realisations.map((projet) => (
                    <Project title={projet.title} img={projet.img} alt={projet.alt} link={projet.link} />
                ))}
            </div>
        </>
    );
};

export default Realisations;