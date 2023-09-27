import "./style.scss";
import Intro from "../Layout/Intro";
import AboutMe from "../Layout/AboutMe";
import Skills from "../Layout/Skills";
import Experience from "../Layout/Experience";
import Work from "../Layout/Work";
import Testimonials from "../Layout/Testimonials";
import GetInTouch from "../Layout/GetInTouch";

const index = () => {
    return (
        <>
            <Intro />
            <AboutMe />
            <Skills />
            <Experience />
            <Work />
            <Testimonials />
            <GetInTouch />
        </>
    );
};

export default index;
