import React from 'react';
import Blender from './Blender.webm'

const Video = () => {
    return (
        <div>
            <video className='skills__skillView-view' src={Blender} autoPlay={true} loop={true} muted={true} ></video>
        </div>
    );
};

export default Video;