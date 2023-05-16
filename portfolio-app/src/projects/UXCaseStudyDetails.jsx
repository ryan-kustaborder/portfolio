import React from "react";
import Header from "../Header";
import { HashLink } from "react-router-hash-link";
import * as Icons from "react-feather";

import AffinityMap from "../images/UXCaseStudy/Affinity Map.png";
import JouneyMap from "../images/UXCaseStudy/Journey Map.png";
import Wireflow from "../images/UXCaseStudy/wireflow.png";
import FinalDesign from "../images/UXCaseStudy/Home Screen.png";

import ProcessBook from "../images/UXCaseStudy/process.pdf";

function UXCaseStudyDetails() {
    return (
        <div id="UXCaseStudyDetails">
            <Header />

            <div className="icon-link return-to-projects">
                <Icons.ArrowLeft />
                <HashLink smooth to="/projects">
                    Back To Projects
                </HashLink>
            </div>

            <div id="content" className="writeup grid">
                <h1 className="span--5">
                    UX Case Study: Simplifying the Voter Registration Process
                </h1>

                <div className="grid span--5">
                    <p className="span--5">
                        In this project I was part of a team tasked with
                        examining the current state of the online voter
                        registration process, identifying any pain points or
                        barriers to access, and propose a revised process for
                        online registration. The project was broken into design
                        sprints, which encouraged rapid ideation and allowed us
                        to come up with many ideas that we could then test out
                        and determine which was best.
                    </p>

                    <div className="icon-link span--5">
                        <Icons.File />
                        <a target="_blank" href={ProcessBook}>
                            View Full Process Book
                        </a>
                    </div>

                    <div className="image-right span--3">
                        <img className="span--3" src={AffinityMap} />
                    </div>
                    <div className="project-description span--2">
                        <h3>Affinity Map</h3>

                        <p>
                            To identify the patterns in our thoughts and
                            observations while going through the current
                            registration process, we developed an affinity map.
                            This map grouped the common thoughts and helped us
                            identify and categorize issues that needed to be
                            addressed.
                        </p>
                    </div>
                    <div className="project-description span--2">
                        <h3>Journey Map</h3>

                        <p>
                            Next, we identified the points in the process where
                            a person might get stuck or even give up by creating
                            a journey map. We created two personas to focus the
                            scope of our research. The first was Matthew, a
                            first-time voter who has some privacy concerns. The
                            second was Elena, a newly awarded US citizen who’s
                            native language is Tagalog
                        </p>
                    </div>
                    <div className="image-left span--3">
                        <img className="span--3" src={JouneyMap} />
                    </div>
                    <div className="image-right span--3">
                        <img className="span--3" src={Wireflow} />
                    </div>
                    <div className="project-description span--2">
                        <h3>Low Fidelity Prototypes and Wireflow</h3>

                        <p>
                            After prototyping, we created a wireflow which
                            showed the different paths that users could take
                            through our proposed process. This allowed us to get
                            feedback from user testing on our prototypes early
                            in the process, saving time with having to change a
                            higher fidelity mockup.
                        </p>
                    </div>
                    <div className="project-description span--2">
                        <h3>Final Design</h3>

                        <p>
                            After multiple rounds of testing and user feedback,
                            we finalized the design and created our final
                            mockups. The result was a simple and user-friendly
                            voter registration site which could help more people
                            participate in our country’s democracy.
                        </p>
                    </div>
                    <div className="image-left span--3">
                        <img className="span--3" src={FinalDesign} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UXCaseStudyDetails;
