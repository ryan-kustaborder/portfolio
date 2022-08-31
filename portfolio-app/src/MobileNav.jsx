import React, { Component } from "react";
import { HashLink } from "react-router-hash-link";

export default class MobileNav extends Component {
    constructor(props) {
        super(props);

        this.state = { active: false };
    }

    onToggle() {
        var cur = !this.state.active;
        this.setState({ active: cur });
    }

    render() {
        let display = this.state.active ? "flex" : "none";
        let x = this.state.active ? "x" : "";

        let svg = (
            <svg className={x} viewBox="0 0 350 350">
                <rect className="top" x="44" y="46" width="270" height="64" />
                <rect className="mid" x="44" y="143" width="270" height="64" />
                <rect className="bot" x="44" y="240" width="270" height="64" />
            </svg>
        );

        return (
            <nav className="nav-mobile" onClick={this.onToggle.bind(this)}>
                {svg}
                <div style={{ display: display }} className="nav-mobile-links">
                    <HashLink smooth to="/#Welcome">
                        Welcome
                    </HashLink>
                    <HashLink smooth to="/#Projects">
                        Projects
                    </HashLink>
                    <HashLink smooth to="/#Generative">
                        Generative Art
                    </HashLink>
                    <HashLink smooth to="/#Design">
                        Graphic Design
                    </HashLink>
                    <HashLink to="/Gallery">Gallery</HashLink>
                </div>
            </nav>
        );
    }
}
