import React from "react";
import { HashLink } from "react-router-hash-link";
import * as Icons from "react-feather";

function Header() {
    return (
        <header>
            <HashLink to="/">Ryan Kustaborder</HashLink>
            <div className="internal-links">
                <HashLink to="/projects">Projects</HashLink>
                <HashLink to="/gallery">Gallery</HashLink>
                <HashLink to="/resume">Resume</HashLink>
            </div>

            <div className="external-links">
                <div className="feather-link">
                    <a href="mailto:ryan.kustaborder@gmail.com" target="_blank">
                        <Icons.Mail />
                    </a>
                </div>
                <div className="feather-link">
                    <a
                        href="https://github.com/ryan-kustaborder"
                        target="_blank"
                    >
                        <Icons.GitHub />
                    </a>
                </div>
                <div className="feather-link" style={{ alignItems: "center" }}>
                    <a
                        href="https://www.linkedin.com/in/ryan-kustaborder"
                        target="_blank"
                    >
                        <Icons.Linkedin />
                    </a>
                </div>
            </div>

            <div className="mobile-links">
                <button>Menu</button>
                <div className="links">
                    <HashLink to="/">Home</HashLink>
                    <HashLink to="/projects">Projects</HashLink>
                    <HashLink to="/gallery">Gallery</HashLink>
                    <HashLink to="/resume">Resume</HashLink>

                    <div className="external">
                        <a
                            href="mailto:ryan.kustaborder@gmail.com"
                            target="_blank"
                        >
                            <Icons.Mail />
                        </a>
                        <a
                            href="https://github.com/ryan-kustaborder"
                            target="_blank"
                        >
                            <Icons.GitHub />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/ryan-kustaborder"
                            target="_blank"
                        >
                            <Icons.Linkedin />
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
