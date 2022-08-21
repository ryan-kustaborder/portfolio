import ProjectLink from "./ProjectLink";

import ACC_MAT from "./images/accMat.png";
import CHESS from "./images/chess.png";
import HEADSHOT from "./images/Headshot.png";

import RESUME from "./images/resume.pdf";

import GithubLogo from "./images/GithubLogo";
import EmailIcon from "./images/EmailIcon";
import LinkedInIcon from "./images/LinkedInIcon";
import MobileNav from "./MobileNav";

export default function App() {
    return (
        <div className="App noisy">
            <div id="links">
                <GithubLogo />
                <EmailIcon />
                <LinkedInIcon />
            </div>

            <nav className="nav-desktop">
                <a href="#Welcome">Welcome</a>
                <a href="#Projects">Projects</a>
                <a href="#Generative">Generative Art</a>
                <a href="#Design">Graphic Design</a>
                <a href="#/Gallery">Gallery</a>
            </nav>

            <MobileNav />

            <div id="Welcome" className="section">
                <div className="content grid">
                    <div className="span--5">
                        <h1>Welcome</h1>
                        <div className="section-description">
                            <h3>I am Ryan Kustaborder</h3>
                            <p>
                                and I am a front-end developer who emphasizes
                                <a
                                    href="http://eecs.csuohio.edu/~rykustab/project1/index.html"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    accessibility and usability.
                                </a>
                            </p>
                            <a href={RESUME} target="_blank" rel="noreferrer">
                                View my Resume
                            </a>
                        </div>
                    </div>

                    <div className="headshot span--4">
                        <img alt="My Headshot" src={HEADSHOT}></img>
                    </div>
                </div>
            </div>

            <div id="Projects" className="section noisy">
                <div className="content grid">
                    <h2 className="span--9">Projects</h2>
                    <ProjectLink
                        src={ACC_MAT}
                        title="Accessibility Matters."
                        alt="Screenshot of my Accessibility Matters Project"
                        desc="This is a project I did for ART 347 at Cleveland State University"
                        href="http://eecs.csuohio.edu/~rykustab/project1/index.html"
                    />
                    <ProjectLink
                        src={CHESS}
                        title="Chess Algorithm"
                        alt="Screenshot of my Chess Project"
                        desc="I developed an in-browser chess application that included a basic computer opponent based on the minimax algorithm."
                        href="https://ryan-kustaborder.github.io/cis434s22g5/"
                    />
                </div>
            </div>

            <div id="Generative" className="section noisy">
                <div className="content grid">
                    <div className="span--5">
                        <h2>Generative Art</h2>
                        <div className="section-description">
                            <p>
                                The ability to create complex and interesting
                                systems and designs from simple logic is
                                something that has always fascinated me, and
                                Generative Art is a shining example of this
                                phenomenon.
                            </p>
                            <a href="./">Visit the Gallery</a>
                        </div>
                    </div>
                    <div className="generative-gallery span--4">
                        <div></div>
                    </div>
                </div>
            </div>

            <div id="Design" className="section noisy">
                <div className="content grid">
                    <div className="span--5">
                        <h2 className="span--9">Graphic Design</h2>
                        <div className="section-description">
                            <p className="span--5">
                                I am also a graphic designer who was
                                particularly influenced by the Swiss
                                International Style. I try to carry these design
                                principles throughout all of my work, no matter
                                the medium.
                            </p>
                            <a href="./">Visit the Gallery</a>
                        </div>
                    </div>
                    <div className="design-gallery span--4">
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
