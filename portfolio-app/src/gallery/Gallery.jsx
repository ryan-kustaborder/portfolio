import GithubLogo from "../images/GithubLogo";
import EmailIcon from "../images/EmailIcon";
import LinkedInIcon from "../images/LinkedInIcon";
import { Component } from "react";
import DisplayWindow from "./DisplayWindow";

import HSBCircle from "./sketches/HSBCircle";
import Reaction from "./sketches/Reaction";

import Lukova1 from "./lukova/lukova1.png";
import Lukova2 from "./lukova/lukova2.png";
import Lukova3 from "./lukova/lukova3.png";
import Lukova4 from "./lukova/lukova4.png";
import Lukova5 from "./lukova/lukova5.png";
import SketchDisplayWindow from "./SketchDisplayWindow";

export default class Gallery extends Component {
    constructor(props) {
        super(props);

        this.state = { images: [], alts: [] };
    }

    selectSketch(sketch) {
        this.setState({
            current: (
                <SketchDisplayWindow
                    sketch={sketch}
                    onClose={this.onClose.bind(this)}
                />
            ),
        });
    }

    selectImage(images, alts) {
        this.setState({
            current: (
                <DisplayWindow
                    onClose={this.onClose.bind(this)}
                    images={images}
                    alts={alts}
                />
            ),
        });
    }

    onClose() {
        this.setState({ current: null });
    }

    render() {
        let display;

        if (this.state.current) {
            display = this.state.current;
        }

        return (
            <div className="App noisy">
                <div id="links">
                    <GithubLogo />
                    <EmailIcon />
                    <LinkedInIcon />
                </div>

                {display}

                <div id="Header">
                    <div className="content grid">
                        <div className="span--5">
                            <h1>The Gallery</h1>
                            <div className="underline"></div>
                            <a href="./">Return to Main Page</a>
                        </div>
                    </div>
                </div>

                <div id="GenerativeGallery" className="section noisy">
                    <div className="content grid">
                        <h2 className="span--6">Generative Art</h2>
                        <div
                            className="preview span--1"
                            onClick={() => this.selectSketch(HSBCircle)}
                        >
                            <img src={Lukova1} alt="Luba Lukova"></img>
                            <h4>HSB Circle</h4>
                        </div>

                        <div
                            className="preview span--1"
                            onClick={() => this.selectSketch(Reaction)}
                        >
                            <img
                                src={Reaction.thumbnail}
                                alt="Luba Lukova"
                            ></img>
                            <h4>{Reaction.title}</h4>
                        </div>
                    </div>
                </div>
                <div id="DesignGallery" className="section noisy">
                    <div className="content grid">
                        <h2 className="span--6">Graphic Design</h2>
                        <div
                            className="preview span--1"
                            onClick={() =>
                                this.selectImage(
                                    [
                                        Lukova1,
                                        Lukova2,
                                        Lukova3,
                                        Lukova4,
                                        Lukova5,
                                    ],
                                    [
                                        "Front Cover",
                                        "Spread 1",
                                        "Spread 2",
                                        "Spread 3",
                                        "Back Cover",
                                    ]
                                )
                            }
                        >
                            <img src={Lukova1} alt="Luba Lukova"></img>
                            <h4>Luba Lukova Booklet</h4>
                        </div>
                    </div>
                </div>
                <div id="OtherGallery" className="section noisy">
                    <div className="content grid">
                        <h2 className="span--6">Other</h2>
                    </div>
                </div>
            </div>
        );
    }
}
