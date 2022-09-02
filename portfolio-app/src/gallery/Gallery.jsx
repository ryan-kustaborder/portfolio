import GithubLogo from "../images/GithubLogo";
import EmailIcon from "../images/EmailIcon";
import LinkedInIcon from "../images/LinkedInIcon";
import { Component } from "react";
import DisplayWindow from "./DisplayWindow";

import HSBCircle from "./sketches/HSBCircle";
import Reaction from "./sketches/Reaction";

import designs from "./design/galleryDesigns";

import SketchDisplayWindow from "./SketchDisplayWindow";

export default class Gallery extends Component {
    constructor(props) {
        super(props);

        this.sketches = [HSBCircle, Reaction];

        this.designs = designs;

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

    selectImage(images, alts, design) {
        this.setState({
            current: (
                <DisplayWindow
                    design={design}
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

    getSketches() {
        return this.sketches.map((sketch) => {
            return (
                <div
                    className="preview span--1"
                    onClick={() => this.selectSketch(sketch)}
                >
                    <img src={sketch.thumbnail} alt={sketch.title}></img>
                    <h4>{sketch.title}</h4>
                </div>
            );
        });
    }

    getDesigns() {
        return this.designs.map((design) => {
            return (
                <div
                    className="preview span--1"
                    onClick={() =>
                        this.selectImage(design.images, design.alts, design)
                    }
                >
                    <img src={design.images[0]} alt={design.title}></img>
                    <h4>{design.title}</h4>
                </div>
            );
        });
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

                        {this.getSketches()}
                    </div>
                </div>
                <div id="DesignGallery" className="section noisy">
                    <div className="content grid">
                        <h2 className="span--6">Graphic Design</h2>
                        {this.getDesigns()}
                    </div>
                </div>
            </div>
        );
    }
}
