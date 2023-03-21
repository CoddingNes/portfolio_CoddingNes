import React from 'react';
import './skillView.scss';
// import Blender from './blender.webm';


const SkillView = (props) => {
    // const [closeView, setCloseView] = useState(false);
    // const close = () => setCloseView(true);
    const changeView = () => {
        props.setShowSkillView(false);
        props.setSkillsAppear(true);
    }

    return (
        // <div className={closeView ? 'skills__skillView ' : 'skills__skillView ' + props.class}>
        <div className={'skills__skillView ' + props.class}>
            <video className='skills__skillView-view' src={'./' + props.src + '.webm'} autoPlay={props.autoPlay} loop={props.loop} muted={props.muted} ></video>
            <h3 className='skills__skillView-title'>{props.title}</h3>
            <i className="skills__skillView-close fa-regular fa-rectangle-xmark" onClick={changeView}></i>
        </div>
    );
};

export default SkillView;