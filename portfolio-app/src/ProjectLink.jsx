import React, { Component } from "react";

class ProjectLink extends Component {
    render() {
        return (
            <div className="span--3">
                <img
                    src={this.props.src}
                    alt={this.props.alt}
                    className="project-image"
                />
                <div className="project-description">
                    <h4>{this.props.title}</h4>
                    <p>{this.props.desc}</p>
                    <a
                        href="http://eecs.csuohio.edu/~rykustab/project1/index.html"
                        target="_blank"
                    >
                        View Project
                    </a>
                </div>
            </div>
        );
    }
}

export default ProjectLink;
