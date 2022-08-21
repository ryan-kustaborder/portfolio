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
                            <h2>Title</h2>
                            <p>
                                Aliquam eget elit sagittis, dapibus risus ut,
                                imperdiet neque. Ut mattis justo et metus
                                vehicula viverra. Fusce bibendum ultricies
                                ligula iaculis facilisis.
                            </p>
                        </div>
                        <a href="./" target="_blank" rel="noreferrer">
                            View in full resolution
                        </a>
                    </div>
                    <button onClick={this.props.onClose}>X</button>
                </div>
            </div>
        );
    }
}
