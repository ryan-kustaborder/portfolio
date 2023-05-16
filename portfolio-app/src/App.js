import Header from "./Header";
import * as Icons from "react-feather";
import { HashLink } from "react-router-hash-link";

import AccessibilityMatters from "./projects/AccessibilityMatters";
import ModularInfographic from "./projects/ModularInfographic";
import UXCaseStudy from "./projects/UXCaseStudy";

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

                <div className="span--5">
                    <h2>Featured Projects</h2>
                    <div className="icon-link">
                        <HashLink smooth to="/projects">
                            View All
                        </HashLink>
                    </div>
                </div>

                <UXCaseStudy />
                <ModularInfographic />
                <AccessibilityMatters />
            </div>
        </div>
    );
}
