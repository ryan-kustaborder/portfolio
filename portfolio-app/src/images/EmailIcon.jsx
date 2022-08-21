import React, { Component } from "react";

export default class EmailIcon extends Component {
    render() {
        return (
            <a
                href="mailto:ryan.kustaborder@gmail.com"
                target="_blank"
                rel="noreferrer"
            >
                <svg viewBox="0 0 350 350">
                    <circle cx="175" cy="175" r="175" />
                    <path
                        style={{ fill: "white" }}
                        d="M144.4,173.6l30.6,30.6l31-31l4.1-4.1l64.9-64.9H75l65.2,65.2L144.4,173.6z M176.5,217.1l-1.5,1.5l-36.3-36.3
		l-63.3,63.3h199.9L211.6,182L176.5,217.1z M218.9,174.8l63.3,63.3V111.5L218.9,174.8z M67.8,111.5l0,127.4l63.7-63.7L67.8,111.5z"
                    />
                </svg>{" "}
            </a>
        );
    }
}
