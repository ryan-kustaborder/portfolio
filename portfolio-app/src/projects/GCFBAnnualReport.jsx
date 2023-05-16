import React from "react";
import * as Icons from "react-feather";

import Landing from "../images/AnnualReport.png";
import Full from "../images/AnnualReportFull.pdf";

function GCFBAnnualReport() {
    return (
        <>
            <img className="span--3" src={Landing} />
            <div className="project-description span--2">
                <h3>Annual Report</h3>

                <p>
                    2023 Mock Annual Report for the Greater Cleveland Food Bank.
                </p>
                <div className="icon-link">
                    <Icons.File />
                    <a href={Full} target="_blank">
                        View the Annual Report
                    </a>
                </div>
            </div>
        </>
    );
}

export default GCFBAnnualReport;
