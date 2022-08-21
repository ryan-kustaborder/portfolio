import GithubLogo from "./images/GithubLogo";
import EmailIcon from "./images/EmailIcon";
import LinkedInIcon from "./images/LinkedInIcon";
import { Component } from "react";

export default class Gallery extends Component {
    constructor(props) {
        super(props);

        this.state = { show: false, current: "" };
    }

    onSelect(string) {
        this.setState({ show: true, current: string });
    }

    onClose() {
        this.setState({ show: false });
    }

    render() {
        let display = <div></div>;

        if (this.state.show) {
            display = (
                <div id="Display">
                    <div>
                        <div className="image">{this.state.current}</div>
                        <div className="about">
                            <div>
                                <h2>Title</h2>
                                <p>
                                    Aliquam eget elit sagittis, dapibus risus
                                    ut, imperdiet neque. Ut mattis justo et
                                    metus vehicula viverra. Fusce bibendum
                                    ultricies ligula iaculis facilisis. Fusce ac
                                    arcu neque. Ut ac ipsum sed mauris eleifend
                                    semper ac vitae tellus. Aliquam consectetur
                                    blandit lorem vel accumsan.
                                </p>
                            </div>
                            <a href="./" target="_blank" rel="noreferrer">
                                View in full resolution
                            </a>
                        </div>
                        <button onClick={this.onClose.bind(this)}>X</button>
                    </div>
                </div>
            );
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
                            onClick={() => this.onSelect(1)}
                        >
                            Click Me
                        </div>
                        <div className="preview span--1">IMAGE</div>
                        <div className="preview span--1">IMAGE</div>
                        <div className="preview span--1">IMAGE</div>
                        <div className="preview span--1">IMAGE</div>
                        <div className="preview span--1">IMAGE</div>
                        <div className="preview span--1">IMAGE</div>
                        <div className="preview span--1">IMAGE</div>
                        <div className="preview span--1">IMAGE</div>
                        <div className="preview span--1">IMAGE</div>
                    </div>
                </div>
                <div id="DesignGallery" className="section noisy">
                    <div className="content grid">
                        <h2 className="span--6">Graphic Design</h2>
                        <div className="preview span--1">IMAGE</div>
                        <div className="preview span--1">IMAGE</div>
                        <div className="preview span--1">IMAGE</div>
                        <div className="preview span--1">IMAGE</div>
                        <div className="preview span--1">IMAGE</div>
                        <div className="preview span--1">IMAGE</div>
                        <div className="preview span--1">IMAGE</div>
                        <div className="preview span--1">IMAGE</div>
                        <div className="preview span--1">IMAGE</div>
                        <div className="preview span--1">IMAGE</div>
                    </div>
                </div>
                <div id="OtherGallery" className="section noisy">
                    <div className="content grid">
                        <h2 className="span--6">Other</h2>
                        <div className="preview span--1">IMAGE</div>
                        <div className="preview span--1">IMAGE</div>
                        <div className="preview span--1">IMAGE</div>
                        <div className="preview span--1">IMAGE</div>
                        <div className="preview span--1">IMAGE</div>
                        <div className="preview span--1">IMAGE</div>
                        <div className="preview span--1">IMAGE</div>
                        <div className="preview span--1">IMAGE</div>
                        <div className="preview span--1">IMAGE</div>
                        <div className="preview span--1">IMAGE</div>
                    </div>
                </div>
            </div>
        );
    }
}
