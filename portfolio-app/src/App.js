import Header from "./Header";

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

                <h2 className="span--5">Featured Projects</h2>

                <UXCaseStudy />
            </div>
        </div>
    );
}
