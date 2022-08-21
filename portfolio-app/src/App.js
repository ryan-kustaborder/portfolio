import ProjectLink from "./ProjectLink";

import ACC_MAT from "./images/accMat.png";

export default function App() {
    return (
        <div className="App noisy">
            <div id="Welcome" className="section">
                <div className="content grid">
                    <h1 className="span--9">Welcome</h1>
                    <div className="span--5">
                        <h3>I am Ryan Kustaborder</h3>
                        <p>
                            and I am a front-end developer who emphasizes
                            <span className="underline">accessibility</span>and
                            <span className="underline">usability.</span>
                        </p>
                    </div>
                </div>
            </div>

            <div id="Projects" className="section">
                <div className="content grid">
                    <h2 className="span--9">Projects</h2>
                    <ProjectLink
                        src={ACC_MAT}
                        title="Accessibility Matters"
                        desc="This is a project I did for ART 347 at Cleveland State University"
                    />
                    <ProjectLink />
                    <ProjectLink />
                </div>
            </div>
        </div>
    );
}
