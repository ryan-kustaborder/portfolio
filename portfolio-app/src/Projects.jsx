import React from "react";
import Header from "./Header";

import AccessibilityMatters from "./projects/AccessibilityMatters";
import Chess from "./projects/Chess";
import Lukova from "./projects/Lukova";
import ModularInfographic from "./projects/ModularInfographic";
import UXCaseStudy from "./projects/UXCaseStudy";
import GCFBAnnualReport from "./projects/GCFBAnnualReport";

function Projects() {
    return (
        <div id="projects">
            <Header />

            <div id="content" className="grid">
                <h1 className="span--5">Projects</h1>
                <GCFBAnnualReport />
                <ModularInfographic />
                <UXCaseStudy />
                <Chess />
                <AccessibilityMatters />
                <Lukova />
            </div>
        </div>
    );
}

export default Projects;
