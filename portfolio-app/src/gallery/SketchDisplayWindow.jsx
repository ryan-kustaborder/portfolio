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
            this.canvas.onSetAppState = this.onSetAppState.bind(this);
        }
    }

    shouldComponentUpdate() {
        this.canvas.props = this.state;
        return false;
    }

    render() {
        return (
            <div id="Display" className="sketchDisplay">
                <div>
                    <div className="image">
                        <div ref={this.ref}></div>
                    </div>
                    <div className="about">
                        <div>
                            <h2>{this.props.sketch.title}</h2>
                            <p>{this.props.sketch.desc}</p>
                            <details>
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
