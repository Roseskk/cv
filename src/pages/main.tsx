import React from 'react';
import Header from "../components/header";
import About from "../components/about";
import Divider from "../components/ui/divider";
import Skills from "../components/skills";
import Projects from "../components/projects";
import Contacts from "../components/contacts";
import Footer from "../components/footer";
import {useResize} from "../hooks/useResize";

const Main: React.FC = () => {
    const {width} = useResize()
    return(
        <main className={'main'}>
            <Header />
            <About />
            {
                width <= 1024
                ? <Divider margin={'80px'} />
                : <Divider margin={'200px'} />
            }
            <Skills />
            {
                width <= 768
                    ? <Divider margin={'80px'} />
                    : null
            }
            <Projects />
            <div className={'footer-wrapper'}>
                <Contacts />
                <Divider margin={'200px'}/>
                <Footer />
            </div>
        </main>
    )
}

export default Main;