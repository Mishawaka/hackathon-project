import React from 'react';

import './ProjectBlock.scss';
import line_text from '../../../img/line3.svg';

const ProjectBlock = () => (
    <div className="project-block">
        <div className="project-line-top" />
        <div className="title-block">
            <h2>Проекты в вашем городе</h2>
            <img src={line_text} alt=""/>
        </div>
        <div className="project-line-bottom" />
    </div>
)

export default ProjectBlock;