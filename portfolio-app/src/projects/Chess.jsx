import React from "react";
import * as Icons from "react-feather";

import Board from "../images/Chess/board.png";

function Chess() {
    return (
        <>
            <div className="project-description span--2">
                <h3>In-Browser Chess App</h3>

                <p>
                    This project consisted of designing an implementing a chess
                    game. The game lets two users play against each other
                    locally or one player against a computer player. The chess
                    bot uses a modified version of the Minimax algorithm with
                    alpha beta pruning.
                </p>
                <div className="icon-link">
                    <Icons.Link />
                    <a
                        href="https://ryan-kustaborder.github.io/cis434s22g5/"
                        target="_blank"
                    >
                        Visit the Site
                    </a>
                </div>
            </div>
            <img className="span--3" src={Board} />
        </>
    );
}

export default Chess;
