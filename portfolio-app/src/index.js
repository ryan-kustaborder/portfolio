import React from "react";
import { Route, HashRouter, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.scss";
import "./gallery.scss";
import "./noise.scss";
import App from "./App";
import Gallery from "./Gallery";
import Resume from "./Resume";
import Projects from "./Projects";
import UXCaseStudyDetails from "./projects/UXCaseStudyDetails";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <HashRouter>
            <Routes>
                <Route path="/" element={<App />}></Route>
                <Route path="/projects" element={<Projects />}></Route>
                <Route
                    path="/projects/UXCaseStudy"
                    element={<UXCaseStudyDetails />}
                ></Route>
                <Route path="/resume" element={<Resume />}></Route>
                <Route path="/gallery" element={<Gallery />}></Route>
            </Routes>
        </HashRouter>
    </React.StrictMode>
);
