import React, { Component } from "react";
import p5 from "p5";

import HSBCircle from "./sketches/HSBCircle";

export default class SketchDisplayWindow extends Component {
    constructor(props) {
        super(props);

        this.state = HSBCircle.initState;

        this.ref = React.createRef();
    }

    onSetAppState = (newState, cb) => {
        console.log("onSetApp");
        this.setState(newState, cb);
    };

    componentDidMount() {
        if (!this.myP5) {
            this.myP5 = new p5(HSBCircle.sketch, this.ref.current);
            this.myP5.props = this.state;
            this.myP5.onSetAppState = this.onSetAppState.bind(this);
        }
    }

    shouldComponentUpdate(nextProps) {
        this.myP5.props = this.state;
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
                            <h2>Title</h2>
                            <p>
                                Aliquam eget elit sagittis, dapibus risus ut,
                                imperdiet neque. Ut mattis justo et metus
                                vehicula viverra. Fusce bibendum ultricies
                                ligula iaculis facilisis.
                            </p>
                            <details>
                                <summary>Controls</summary>
                                {HSBCircle.getInputs(this)}
                            </details>
                        </div>
                    </div>
                    <button onClick={this.props.onClose}>X</button>
                </div>
            </div>
        );
    }
}
