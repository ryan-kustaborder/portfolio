import GithubLogo from "../images/GithubLogo";
import EmailIcon from "../images/EmailIcon";
import LinkedInIcon from "../images/LinkedInIcon";
import { Component } from "react";
import DisplayWindow from "./DisplayWindow";
import Sketch from "./Sketch";

import Lukova1 from "./lukova/lukova1.png";
import Lukova2 from "./lukova/lukova2.png";
import Lukova3 from "./lukova/lukova3.png";
import Lukova4 from "./lukova/lukova4.png";
import Lukova5 from "./lukova/lukova5.png";
import SketchDisplayWindow from "./SketchDisplayWindow";

export default class Gallery extends Component {
    constructor(props) {
        super(props);

        this.state = { show: false, images: [], alts: [] };
    }

    onSelect(images, alts) {
        this.setState({ show: true, images: images, alts: alts });
    }

    onClose() {
        this.setState({ show: false });
    }

    render() {
        let display;

        /*if (this.state.show) {
            display = (
                <DisplayWindow
                    onSelect={this.onSelect.bind(this)}
                    onClose={this.onClose.bind(this)}
                    images={this.state.images}
                    alts={this.state.alts}
                />
            );
        }*/
        if (this.state.show) {
            display = <SketchDisplayWindow onClose={this.onClose.bind(this)} />;
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
                            onClick={() =>
                                this.onSelect(
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
                <div id="DesignGallery" className="section noisy">
                    <div className="content grid">
                        <h2 className="span--6">Graphic Design</h2>
                        <div
                            className="preview span--1"
                            onClick={() =>
                                this.onSelect(
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
