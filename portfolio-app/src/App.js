import ProjectLink from "./ProjectLink";

import ACC_MAT from "./images/accMat.png";
import HEADSHOT from "./images/Headshot.png";

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
                <a href="#Design">Gallery</a>
            </nav>

            <MobileNav />

            <div id="Welcome" className="section">
                <div className="content grid">
                    <div className="span--5">
                        <h1>Welcome</h1>
                        <div>
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
                                Morbi posuere purus dolor, nec cursus lacus
                                semper nec. Etiam venenatis elit sem. Praesent
                                facilisis lectus sed feugiat venenatis.
                            </p>
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
                        src={ACC_MAT}
                        title="Accessibility Matters."
                        alt="Screenshot of my Accessibility Matters Project"
                        desc="This is a project I did for ART 347 at Cleveland State University"
                        href="http://eecs.csuohio.edu/~rykustab/project1/index.html"
                    />
                    <ProjectLink
                        src={ACC_MAT}
                        title="Accessibility Matters."
                        alt="Screenshot of my Accessibility Matters Project"
                        desc="This is a project I did for ART 347 at Cleveland State University"
                        href="http://eecs.csuohio.edu/~rykustab/project1/index.html"
                    />
                </div>
            </div>

            <div id="Generative" className="section noisy">
                <div className="content grid">
                    <h2 className="span--9">Generative Art</h2>
                    <div className="section-description span--5">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Maecenas ornare vehicula malesuada. Quisque
                            blandit condimentum nunc, eget aliquam nulla. Sed
                            vitae turpis non magna ullamcorper dapibus ut
                            sodales nunc. Aenean pretium maximus ipsum nec
                            euismod. Duis mattis, dui eu molestie convallis,
                            nunc nulla malesuada ex, id egestas lorem purus ac
                            quam. Aliquam molestie efficitur mi, et blandit odio
                            vulputate sed. Quisque consectetur mi sed imperdiet
                            varius. Donec auctor et erat a porta. Phasellus in
                            erat varius, tincidunt mauris vel, pellentesque
                            velit.
                        </p>
                        <a href="./">Visit the Gallery</a>
                    </div>
                    <div className="generative-gallery span--4">
                        <div></div>
                    </div>
                </div>
            </div>

            <div id="Design" className="section noisy">
                <div className="content grid">
                    <h2 className="span--9">Graphic Design</h2>
                    <div className="section-description span--5">
                        <p className="span--5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Maecenas ornare vehicula malesuada. Quisque
                            blandit condimentum nunc, eget aliquam nulla. Sed
                            vitae turpis non magna ullamcorper dapibus ut
                            sodales nunc. Aenean pretium maximus ipsum nec
                            euismod. Duis mattis, dui eu molestie convallis,
                            nunc nulla malesuada ex, id egestas lorem purus ac
                            quam. Aliquam molestie efficitur mi, et blandit odio
                            vulputate sed. Quisque consectetur mi sed imperdiet
                            varius. Donec auctor et erat a porta. Phasellus in
                            erat varius, tincidunt mauris vel, pellentesque
                            velit.
                        </p>
                        <a href="./">Visit the Gallery</a>
                    </div>
                    <div className="design-gallery span--4">
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
