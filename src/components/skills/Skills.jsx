import React from 'react';

let skills = ["HTML", "CSS", "React.JS", "Three.JS", "Blender", "", "", "", "", "", ""];


function getRandomInt(max) {
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

const Skills = () => {
    return (
        <div className="skills__grid">
            {randomSkills.map((skill, index) => (
                <div className="skills__grid-item" key={index}>{skill}</div>
            ))}
        </div>
    );
};

export default Skills;