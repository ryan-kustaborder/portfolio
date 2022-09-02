import React, { Component } from "react";

export default class DisplayWindow extends Component {
    constructor(props) {
        super(props);

        this.state = { current: 0 };
    }

    setCurrent(val) {
        this.setState({ current: val });
    }

    render() {
        const legendImages = this.props.images.map((image, i) => {
            return (
                <img
                    key={image}
                    onClick={() => this.setCurrent(i)}
                    src={image}
                    alt={this.props.alts[i]}
                />
            );
        });

        return (
            <div id="Display">
                <div>
                    <div className="image">
                        <img
                            src={this.props.images[this.state.current]}
                            alt={this.props.alts[this.state.current]}
                        ></img>
                    </div>
                    <div className="legend">{legendImages}</div>
                    <div className="about">
                        <div>
                            <h3>{this.props.design.title}</h3>
                            <p>{this.props.design.desc}</p>
                        </div>
                        <a
                            href={this.props.design.external}
                            target="_blank"
                            rel="noreferrer"
                        >
                            View more
                        </a>
                    </div>
                    <button onClick={this.props.onClose}>X</button>
                </div>
            </div>
        );
    }
}
