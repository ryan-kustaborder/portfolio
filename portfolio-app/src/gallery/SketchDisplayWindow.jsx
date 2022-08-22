import React, { Component } from "react";
import p5 from "p5";

export default class SketchDisplayWindow extends Component {
    constructor(props) {
        super(props);

        this.state = this.props.sketch.initState;

        this.ref = React.createRef();
    }

    onSetAppState = (newState, cb) => {
        this.setState(newState, cb);
    };

    componentDidMount() {
        if (!this.canvas) {
            this.canvas = new p5(this.props.sketch.sketch, this.ref.current);

            this.canvas.props = this.state;
            this.canvas.props.width = this.ref.current.offsetWidth;
            this.canvas.props.height = this.ref.current.offsetHeight;

            this.canvas.onSetAppState = this.onSetAppState.bind(this);
        }
    }

    shouldComponentUpdate() {
        this.canvas.props = this.state;
        this.canvas.props.width = this.ref.current.offsetWidth;
        this.canvas.props.height = this.ref.current.offsetHeight;
        return false;
    }

    render() {
        return (
            <div id="Display" className="sketchDisplay">
                <div>
                    <div className="image">
                        <div id="canvas-container" ref={this.ref}></div>
                    </div>
                    <div className="about">
                        <div>
                            <h2>{this.props.sketch.title}</h2>
                            <p className="description">
                                {this.props.sketch.desc}
                            </p>
                            <details open className="sketch-controls">
                                <summary>Controls</summary>
                                {this.props.sketch.getInputs(this)}
                            </details>
                        </div>
                    </div>
                    <button onClick={this.props.onClose}>X</button>
                </div>
            </div>
        );
    }
}
