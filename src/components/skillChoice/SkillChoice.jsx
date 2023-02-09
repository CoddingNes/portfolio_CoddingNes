import React, { useState } from 'react';
// import SkillView from '../skillView/SkillView';
import './skillChoice.scss';
// import Blender from './blender.webm';
import Skills from '../skills/Skills';

const skills = ["HTML", "CSS", "React.JS", "Three.JS", "Blender", "", "", "", "", "", ""];


let getRandomInt = (max) => {
    return (Math.floor(Math.random() * max));
}

let randomSkills = [];
let usedInt = [];
let randomInt = 0;

for (let i = 0; i < skills.length; i++) {
    randomInt = getRandomInt(skills.length)
    if (usedInt.includes(randomInt)) {
        randomInt = getRandomInt(skills.length);
        i--;
    } else {
        randomSkills.push(skills[randomInt]);
        usedInt.push(randomInt);
    }
}


const SkillChoice = () => {
    const [hidden, setHidden] = useState(false);
    const [skillsAppear, setSkillsAppear] = useState(false);
    const changeView = () => {
        setHidden(true);
        setSkillsAppear(true);
    }

    return (
        <>
            <div className="skills__grid">
                <div className={hidden ? 'skills__grid-mask desappear' : 'skills__grid-mask'}
                    onClick={changeView}>
                    Découvrons-les!
                </div>
                {randomSkills.map((skill, index) => (
                    <Skills class={skillsAppear && skill !== "" ? 'appear ' : ''}
                        skill={skill}
                        key={index}
                        setSkillsAppear={setSkillsAppear}
                    />
                ))}
            </div>
        </>
    );
};

export default SkillChoice;