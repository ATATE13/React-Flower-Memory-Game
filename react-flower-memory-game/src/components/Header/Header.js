import React from "react";
import "./Header.css";

const Header = props => (
    <div className="header">
        <div className="title">{props.children}</div>
        <div className="scores">
            Score: {props.score} | Highscore: {props.highscore}
        </div>
            <h6 className="instructions">Click image to begin! Only click each image once to earn points!</h6>
    </div>
);

export default Header;