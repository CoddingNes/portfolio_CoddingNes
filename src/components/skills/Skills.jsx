import React, { useState } from 'react';
import './skills.scss';
import SkillView from '../skillView/SkillView';


const Skills = (props) => {
    const [showSkill, setShowSkill] = useState(false);
    const isActive = () => setShowSkill(true);

    return (
        <>
            <div
                className={'skills__grid-item ' + props.class}
                key={props.key}
                onClick={isActive}>{props.skill}
            </div>
            {showSkill ?
                <SkillView
                    class={showSkill ? 'viewSkill' : ''}
                    src={props.skill}
                    title={props.skill}
                    autoPlay={true}
                    loop={true}
                    muted={true}
                /> : ''
            }
        </>
    );
};

export default Skills;