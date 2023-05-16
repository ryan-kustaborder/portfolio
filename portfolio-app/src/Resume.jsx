import React from "react";
import Header from "./Header";

function Resume() {
    return (
        <div id="resume">
            <Header />

            <div id="content" className="grid">
                <div className="span--5">
                    <h1>Ryan Kustaborder</h1>
                    <a href="mailto:ryan.kustaborder@gmail.com" target="_blank">
                        ryan.kustaborder@gmail.com
                    </a>
                </div>

                <h2 className="span--5">Education</h2>

                <div className="span--3">
                    <h3>Cleveland State University</h3>
                    <p>Bachelor of Science in Computer Science</p>
                    <p>Minors in Graphic Design and Mathematics</p>
                    <p>Honors:</p>
                    <ul>
                        <li>
                            Washkewicz College of Engineering Valedictorian CS
                            Nominee (Spring 2023)
                        </li>
                        <li>
                            Washkewicz College of Engineering Student
                            Achievement Award (2019)
                        </li>
                        <li>Jack Joseph & Morton Mandel Honors College</li>
                        <li>Dean's List (Fall 2019 - Fall 2022)</li>
                    </ul>
                </div>
                <p className="span--2 right-align">Aug 2019 - May 2023</p>

                <h2 className="span--5">Professional Experience</h2>

                {/* Drughelp.care */}
                <div className="span--3">
                    <h3>Drughelp.care</h3>
                    <p>Graphic Designer</p>
                    <ul>
                        <li>
                            Assessed current website for accessibility concerns
                            and UI/UX improvements
                        </li>
                        <li>
                            Developed custom solutions by coordinating
                            discussion between multiple teams
                        </li>
                        <li>
                            Expanded style guidelines to streamline development
                            process
                        </li>
                        <li>Developed material for focus groups</li>
                    </ul>
                </div>
                <p className="span--2 right-align">
                    <p>Cleveland OH</p>
                    <p>Jul 2022 - Present</p>
                </p>

                {/* Union Home Mortgage */}
                <div className="span--3">
                    <h3>Union Home Mortgage</h3>
                    <p>IT - Front-End Developer Intern</p>
                    <ul>
                        <li>
                            Developed WebAssembly/Blazor apps to connect
                            multiple third-party applications
                        </li>
                        <li>
                            Developed UI/UX Mockups for multiple production
                            projects
                        </li>
                        <li>
                            Created web application to interact with multiple
                            third-party APIs including Encompass
                        </li>
                        <li>
                            Developed and presented strategies for engaging
                            younger customers
                        </li>
                    </ul>
                </div>
                <p className="span--2 right-align">
                    <p>Cleveland OH</p>
                    <p>May 2022 - Aug 2022</p>
                </p>

                {/* LGBT Center */}
                <div className="span--3">
                    <h3>Cleveland State University LGBTQ+ Student Services</h3>
                    <p>Graphic Design and Communications Assistant</p>
                    <ul>
                        <li>
                            Managed social media accounts with 1300+ followers
                        </li>
                        <li>
                            Created graphics for individual events as well as
                            general promotional needs
                        </li>
                        <li>
                            Coordinated with local AIGA student organization to
                            spearhead projects
                        </li>
                        <li>
                            Coordinated multiple volunteers, delegated and
                            reviewed work
                        </li>
                    </ul>
                </div>
                <p className="span--2 right-align">
                    <p>Cleveland OH</p>
                    <p>Oct 2021 - Present</p>
                </p>

                {/* Remcom */}
                <div className="span--3">
                    <h3>Remcom Inc.</h3>
                    <p>Software Engineering Intern</p>
                    <ul>
                        <li>
                            Worked on multiple industry leading desktop
                            applications in C++/C#/C
                        </li>
                        <li>
                            Planned and implemented major UI overhaul across
                            multiple products
                        </li>
                        <li>
                            Developed algorithms for EM pattern interpretation
                            and conversion
                        </li>
                        <li>
                            Communicated with multiple departments to identify
                            pain points
                        </li>
                    </ul>
                </div>
                <p className="span--2 right-align">
                    <p>State College, PA</p>
                    <p>Jun 2019 - Apr 2022</p>
                </p>
            </div>
        </div>
    );
}

export default Resume;
