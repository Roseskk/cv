import React from 'react';
import Button from "./ui/button";

import postamatImage from '../assets/img/mospstmt.png';
import marshrutImage from '../assets/img/marshruti.png';
import dssImage from '../assets/img/dss.png';

interface IProjectsItems {
    id: number,
    imgSource: string;
    title: string;
    skills: string[]
}

const projectsItems: IProjectsItems[] = [
    {id: 1, imgSource: postamatImage, title: 'Московский постамат', skills: ['HTML','CSS','Redux','React','RTK QUERY']},
    {id: 2, imgSource: marshrutImage, title: 'Маршрут построен', skills: ['HTML','CSS','Redux','React','RTK QUERY']},
    {id: 3, imgSource: dssImage, title: 'DSSYSTEM', skills: ['HTML','SCSS','React','Context API']},
    {id: 4, imgSource: '', title: 'CapiShop', skills: ['HTML','SCSS','Next.js']},
]

const Projects: React.FC = () => {
    const handleBtn = () => {
        const contacts = document.getElementById('contacts')
        if (contacts) contacts.scrollIntoView({behavior: 'smooth'})
    }
    return(
        <section className={'section-projects'}>
            <div className={'projects-top'}>
                <h2 className={'projects-title'}>Projects</h2>
                <Button handleClick={handleBtn} text={'CONTACT ME'} />
            </div>
            <div className={'projects-bottom'}>
                <ul className={'projects-bottom-list'}>
                    {
                        projectsItems.map(project => {
                            return(
                                <li key={project.id} className={'projects-bottom-item'}>
                                    {
                                        !!project.imgSource
                                        ? <img src={project.imgSource} alt={'project'} className={'project-bottom-img'} />
                                        : <div className={'project-bottom-img-placeholder'}>{project.title}</div>
                                    }
                                    <span className={'projects-bottom-title'}>{project.title}</span>
                                    <ul className={'projects-bottom-item-list'}>
                                        {
                                            project.skills.map((skill, idx) => {
                                            return(
                                                <li key={idx}>
                                                    <span>{skill}</span>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </section>
    )
}

export default Projects;