import React, { useState } from 'react';
import './skills.scss';
import SkillView from '../skillView/SkillView';


const Skills = (props) => {
    const [showSkillView, setShowSkillView] = useState(false);
    const changeView = () => {
        setShowSkillView(true);
        props.setSkillsAppear(false);
    }

    return (
        <>
            <div
                className={'skills__grid-item ' + props.class}
                key={props.key}
                onClick={changeView}>{props.skill}
            </div>
            <SkillView
                class={showSkillView ? 'showSkillView' : ''}
                setShowSkillView={setShowSkillView}
                setSkillsAppear={props.setSkillsAppear}
                src={props.skill}
                title={props.skill}
                autoPlay={true}
                loop={true}
                muted={true}
            />
        </>
    );
};

export default Skills;