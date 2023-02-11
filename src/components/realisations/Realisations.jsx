import React, { useEffect, useState } from 'react';
import Button from '../button/Button';
import Project from '../project/Project';
import './realisations.scss';



let technos = ["React", "Blender", "Three.JS", "JavaScript"];

const Realisations = () => {
    const [filter, setFilter] = useState("Tout");
    const [projects, setProjects] = useState([]);

    const getData = (filter) => {
        fetch('./data.json')
            .then(response => {
                return response.json();
            })
            .then(data => {
                const projectList = [];
                for (let i = 0; i < data.length; i++) {
                    if (filter === "Tout" || data[i].technos.includes(filter)) {
                        projectList.push(data[i]);
                    }
                }
                setProjects(projectList);
            })
    };

    useEffect(() => {
        getData(filter)
    }, [filter]);


    return (
        <>
            <div className='realisations__buttons'>
                <Button class={"realisations__buttons-button All"} title="Tout" setFilter={setFilter} />

                {technos.map((techno, index) => (
                    <Button class={"realisations__buttons-button " + techno} title={techno} key={index} setFilter={setFilter} />
                ))}
            </div>
            <div>
                {projects.map((projet, index) => (
                    < Project title={projet.title} img={projet.img} alt={projet.alt} link={projet.link} key={index} />
                ))}
            </div>
        </>
    );
};

export default Realisations;