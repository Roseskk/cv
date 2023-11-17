import React, {useEffect, useState} from 'react';
import Button from "./ui/button";

import postamatImage from '../assets/img/mospstmt.png';
import marshrutImage from '../assets/img/marshruti.png';
import audiophile from '../assets/img/audiophile.jpg';
import dssImage from '../assets/img/dss.png';
import MyLoader from "./ui/imagePreloader";

interface IProjectsItems {
    id: number,
    imgSource: string;
    title: string;
    skills: string[],
    link: string,
    github: string,
    text: string
}

interface IProjectProps {
    title: string;
    text: string;
    photo: string; // или другой тип, если фото представлено как-то иначе
    link: string;
}

const projectsItems: IProjectsItems[] = [
    {id: 1, imgSource: audiophile,
        text: 'Audiophile',
        title: 'Audiophile', github: 'https://github.com/Roseskk/audio-shop',link: 'https://audio-shop-zeta.vercel.app', skills:['Next.js','SCSS','TypeScript','Redux','WordPress']},
    {id: 2, imgSource: marshrutImage,
        text: 'Проект Маршрут построен посвящен туризму и краеведению, прежде всего для образовательных организаций. Он предлагает различные мероприятия и проекты, например, "Маршрут построен", который ориентирован на студентов и педагогов. Сайт также устраивает встречи с известными путешественниками и предлагает различные маршруты для пеших прогулок и экскурсий. Основная аудитория — учащиеся с 7 по 11 класс, студенты колледжей и педагогические работники.',
        title: 'Маршрут построен', github: 'https://github.com/Roseskk/travel_school',link: 'http://31.129.100.33/', skills: ['HTML','CSS','Redux','React','RTK QUERY']},
    {id: 3, imgSource: dssImage,
        text: 'Сайт DSSystem — это веб-студия полного цикла, специализирующаяся на разработке и продвижении digital-проектов. Они предлагают широкий спектр услуг, включая дизайн, создание сайтов и приложений, доработку, маркетинг и администрирование. Студия работает как с небольшими частными, так и с крупными корпоративными проектами. Они также предлагают услуги в области SEO, CRM-систем и контент-менеджмента.',
        title: 'DSSYSTEM', github: 'https://github.com/Roseskk/dss',link: 'https://dss-vert.vercel.app/home', skills: ['HTML','SCSS','React','Context API']},
    {id: 4, imgSource: '',
        text: 'Сайт Shoppy Bara представляет собой ресурс для выбора магазинов. Здесь можно найти различные варианты магазинов, от одежды до электроники, чтобы сделать свои покупки удобными и выгодными. Сайт нацелен на то, чтобы предложить пользователям качественный шопинг.',
        title: 'Capishop', github: 'https://github.com/Shoppy-Bara/frontend',link: 'https://shoppy-bara.bigtows.org/', skills: ['HTML','SCSS','Next.js']},
    {id: 5, imgSource: '',
        text: 'Образцовый хореографический ансамбль "Сирин" — это лауреат множества Международных и Всероссийских фестивалей с активной концертной и гастрольной деятельностью. Здесь обучают основам танцевальных знаний, пластике, выразительности и другим навыкам. Выпускники ансамбля успешно продолжают свою карьеру в хореографии, многие даже открывают свои студии.',
        title: 'Sirin', github: 'https://github.com/Roseskk/mySirin',link: 'https://my-sirin.vercel.app/index.html', skills:['HTML','CSS','JS']},
    {id: 6, imgSource: postamatImage,
        text: 'Основной задачей проекта является отслеживание и направление негативных комментариев связанных с работой цепи сервиса внешним службам решения инцидентов. Система осуществляет автоматический сбор негативных отзывов, включая их в систему инцидентов. Задача пользователя - проверить и направить обращение к соответствующим службам для быстрого решения проблем. За обработку и определение категорий проблемы отзывов в нашей системе отвечает нейронная сеть.',
        title: 'Московский постамат', github: 'https://github.com/Roseskk/frontend', link: '', skills: ['HTML','CSS','Redux','React','RTK QUERY']},
]

// https://audio-shop-zeta.vercel.app/
const Projects: React.FC = () => {
    const [open, setOpen] = useState(false)
    const [content, setContent] = useState<{title: string; text: string; photo: string; link: string} | null>(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (open) {
            document.body.style.overflowY = 'hidden'
        }
        return () => {document.body.style.overflowY = 'scroll' }
    }, [open]);
    const handleBtn = () => {
        const contacts = document.getElementById('contacts')
        if (contacts) contacts.scrollIntoView({behavior: 'smooth'})
    }

    const handleBtnCode = (link: string) => {
        window.open(`${link}`,"_blank")
    }

    const handleBtnProject = ({title,text,photo,link}: IProjectProps) => {
        if (!!link) {
            setContent({
                title: title,
                text: text,
                photo: photo,
                link: link
            })
            setOpen(true)
        } else {
            alert('Данный проект закрыт :(')
        }

    }
    return(
        <>
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
                                                ? (
                                                    <>
                                                        {isLoading && <MyLoader />}
                                                        <img
                                                            src={project.imgSource}
                                                            alt={'project'}
                                                            onLoad={() => setIsLoading(false)}
                                                            style={{ display: isLoading ? 'none' : 'block' }}
                                                            className={'project-bottom-img'}
                                                        />
                                                    </>
                                                )
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
                                        <div className={'projects-buttons'}>
                                            <Button handleClick={() => handleBtnProject({title: project.title, text: project.text, link: project.link, photo: project.imgSource})} text={'VIEW DESCRIPTION'}/>
                                            <Button handleClick={() => handleBtnCode(project.github)} text={'VIEW CODE'}/>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </section>
            <div className={`modal-container ${open ? 'modal-visible' : ''}`}>
                {
                    !!content?.photo
                    ? <img className={'modal-left'} src={content?.photo} alt={'project'}/>
                    : <div className={'modal-left-placeholder'}>{content?.title}</div>
                }
                <div className={'modal-right'}>
                    <h2 className={'modal-title'}>{content?.title}</h2>
                    <p className={'modal-content'}>{content?.text}</p>
                    <Button handleClick={() => window.open(`${content?.link}`,'_blank')} margin={'0'} text={'VIEW PROJECT'} />
                </div>
            </div>
            <div onClick={() => setOpen(false)} className={`modal-background ${open ? 'modal-back-visible' : ''}`}></div>
        </>
    )
}

export default Projects;