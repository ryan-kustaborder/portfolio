import React, { Component } from "react";

export default class LinkedInIcon extends Component {
    render() {
        return (
            <a
                href="https://www.linkedin.com/in/ryan-kustaborder/"
                target="_blank"
                rel="noreferrer"
            >
                <svg viewBox="0 0 350 350">
                    <circle cx="175" cy="175" r="175" />
                    <g style={{ fill: "white" }}>
                        <path
                            d="M81.3,79.1c0-13.3,10.6-22.8,25.2-22.8c14.6,0,25.2,9.4,25.2,22.8c0,13.2-10.6,22.8-25.2,22.8
                C91.9,101.9,81.3,92.4,81.3,79.1z M84.7,123.4h43.5v146.9H84.7V123.4z"
                        />
                        <path
                            d="M149.4,123.4h35.5L188,142h1.1c12.4-11.9,27.2-22.2,47.2-22.2c31.9,0,45.6,22.5,45.6,59.3v91.2h-43.5v-85.6
                c0-21.1-5.7-27.8-18.2-27.8c-10.9,0-17.6,5.1-27.2,14.3v99.1h-43.5V123.4z"
                        />
                    </g>
                </svg>
            </a>
        );
    }
}
