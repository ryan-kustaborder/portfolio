import Header from "./Header";
import * as Icons from "react-feather";
import { HashLink } from "react-router-hash-link";

import ModularInfographicImage from "./images/ModularInfographic.png";
import AccessibilityMattersImage from "./images/accmat.png";
import UXCaseStudyImage from "./images/UXCaseStudy/wireflow.png";

export default function App() {
    return (
        <div id="home">
            <Header></Header>

            <div id="content" className="grid">
                <h1 className="span--5">Hello!</h1>
                <p className="span--3">
                    I am a front end developer and UX/UI designer who focuses on
                    <i> accessibility, simplicity, and usability</i>. Check out
                    some of my projects below or head to the Projects and
                    Gallery pages to see more!
                </p>

                <h2 className="span--4">Projects</h2>

                <HashLink className="span--2 img-link" smooth to="/projects">
                    <div>Modular Infographic</div>
                    <img src={ModularInfographicImage}></img>
                </HashLink>

                <HashLink className="span--2 img-link" smooth to="/projects">
                    <div>Accessibility Matters.</div>
                    <img src={AccessibilityMattersImage}></img>
                </HashLink>

                <HashLink className="span--2 img-link" smooth to="/projects">
                    <div>UX Case Study</div>
                    <img src={UXCaseStudyImage}></img>
                </HashLink>
            </div>
        </div>
    );
}
