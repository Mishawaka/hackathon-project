import React from 'react';
import ProjectContainer from './ProjectContainer/ProjectContainer';

import './ProjectBlock.scss';
import line_text from '../../../img/line3.svg';

const ProjectBlock = () => (
    <div className="project-block">
        <div className="project-line-top" />
        <div className="title-block">
            <h2>Проекты в вашем городе</h2>
            <img src={line_text} alt=""/>
        </div>
        <ProjectContainer />
        <h4>Посмотреть все</h4>
        <div className="project-line-bottom" />
    </div>
)

export default ProjectBlock;