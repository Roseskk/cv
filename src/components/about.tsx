import React from 'react';
import Button from "./ui/button";
import {useResize} from "../hooks/useResize";

const About: React.FC = () => {
    const {width} = useResize()
    const handleBtn = () => {
        const contacts = document.getElementById('contacts')
        if (contacts) contacts.scrollIntoView({behavior: 'smooth'})
    }
    return(
        <section className={'section-about'}>
            <div className={'about-left'}>
                <h1 className={'about-title'}>
                    Nice to meet you!<br />
                    I'm <span className={'underline'}>Oleg Borisov.</span>
                </h1>
                <p className={'about-content'}>Based in the Russia, I’m a front-end developer<br /> passionate about building accessible web apps<br /> that users love.</p>
                {
                    width <=768
                    ? <Button align={'center'} handleClick={handleBtn} text={'CONTACT ME'} />
                    : <Button handleClick={handleBtn} text={'CONTACT ME'} />
                }
            </div>
            <div className={'about-right'}>

            </div>
        </section>
    )
}

export default About;