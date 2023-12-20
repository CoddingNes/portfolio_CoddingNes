import React, { useEffect, useState } from 'react';
import Button from '../button/Button';
import Project from '../project/Project';
import './realisations.scss';



let technos = ["React", "Blender", "Three.JS", "JavaScript"];

const Realisations = () => {
    const [filter, setFilter] = useState("Tout");
    const [projects, setProjects] = useState([]);

    const getData = (filter) => {
        fetch('data.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(response => {
                return response.json();
            })
            .then(data => {
                const projectList = [];
                for (let i = 0; i < data.length; i++) {
                    if (filter === "Tout" || data[i].details.technos.includes(filter)) {
                        projectList.push(data[i]);
                    }
                }
                setProjects(projectList);
            })
    };

    console.log(projects);

    useEffect(() => {
        getData(filter)
    }, [filter]);

    // const [showDetails, setShowDetails] = useState(false);
    // const [flip, setFlip] = useState(false);
    const [hideDetails, setHideDetails] = useState(false);

    return (
        <>
            <div className='realisations__buttons'>
                <Button class={"realisations__buttons-button All"} title="Tout" setFilter={setFilter} />

                {technos.map((techno, index) => (
                    <Button class={"realisations__buttons-button " + techno} title={techno} key={index} setFilter={setFilter} />
                ))}
            </div>
            <div className='realisations__project-list'>
                {projects.map((projet, index) => (
                    <Project
                        hideDetails={hideDetails}
                        setHideDetails={setHideDetails}
                        title={projet.title}
                        img={projet.img}
                        alt={projet.alt}
                        summary={projet.details.summary}
                        link={projet.link} key={index} />
                ))}
            </div>
        </>
    );
};

export default Realisations;