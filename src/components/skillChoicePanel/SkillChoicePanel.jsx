import React, { useEffect, useState } from 'react';
import './skillChoicePanel.scss';
import '../skills/skills.scss';
import Skills from '../skills/Skills';

const skills = ["HTML", "CSS", "React", "Three.JS", "Blender"];


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
    for (let i = 0; i < 16; i++) {
        randomInt = getRandomInt(16)
        if (usedInt.includes(randomInt)) {
            randomInt = getRandomInt(skills.length);
            i--;
        } else {
            randomSkills.push(skills[randomInt]);
            usedInt.push(randomInt);
        }
    }
    console.log(randomSkills);
}

createRandomList()

const SkillChoicePanel = () => {
    const [hidden, setHidden] = useState(false);
    const [skillsAppear, setSkillsAppear] = useState(false);
    const changeView = () => {
        setHidden(true);
        setSkillsAppear(true);
    }

    useEffect(() => {
        if (!skillsAppear && window.innerWidth < 426) {
            createRandomList()
        }
    }, [skillsAppear])

    return (
        <>
            <div className="skills__grid">
                {hidden ? "" :
                    <div className='skills__grid-mask'
                        onClick={changeView}>
                        Découvrons-les!
                    </div>
                }
                {hidden ? randomSkills.map((skill, index) => (skill ? (<Skills
                    class={'n' + index + (skillsAppear ? ' appear ' : '')}
                    skill={skill}
                    key={index}
                    setSkillsAppear={setSkillsAppear}
                />)
                    : "")
                ) : ""}
            </div>
        </>
    );
};

export default SkillChoicePanel;