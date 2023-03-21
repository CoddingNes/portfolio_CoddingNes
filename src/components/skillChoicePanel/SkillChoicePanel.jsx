import React, { useEffect, useState } from 'react';
import './skillChoicePanel.scss';
import Skills from '../skills/Skills';

const skills = ["HTML", "CSS", "React", "Three.JS", "Blender", "", "", "", "", "", ""];


const getRandomInt = (max) => {
    return (Math.floor(Math.random() * max));
}

let randomSkills = [];
let usedInt = [];
let randomInt = 0;

const createRandomList = () => {
    randomSkills = [];
    usedInt = [];
    randomInt = 0;
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
    console.log("create a random list");
}

const SkillChoicePanel = () => {
    const [hidden, setHidden] = useState(false);
    const [skillsAppear, setSkillsAppear] = useState(false);
    const changeView = () => {
        setHidden(true);
        setSkillsAppear(true);
    }

    useEffect(() => {
        if (!skillsAppear) {
            console.log("create a random list");
            createRandomList()
        }
    }, [window, skillsAppear])

    return (
        <>
            <div className="skills__grid">
                <div className={hidden ? 'skills__grid-mask desappear' : 'skills__grid-mask'}
                    onClick={changeView}>
                    Découvrons-les!
                </div>
                {randomSkills.map((skill, index) => (
                    <Skills
                        class={'n' + index + (skillsAppear && skill !== "" ? ' appear ' : '')}
                        skill={skill}
                        key={index}
                        setSkillsAppear={setSkillsAppear}
                    />
                ))}
            </div>
        </>
    );
};

export default SkillChoicePanel;