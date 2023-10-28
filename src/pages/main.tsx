import React from 'react';
import Header from "../components/header";
import About from "../components/about";
import Divider from "../components/ui/divider";
import Skills from "../components/skills";
import Projects from "../components/projects";
import Contacts from "../components/contacts";
import Footer from "../components/footer";

const Main: React.FC = () => {
    return(
        <main className={'main'}>
            <Header />
            <About />
            <Divider margin={'200px'} />
            <Skills />
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