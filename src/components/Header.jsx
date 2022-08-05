import React from "react";
import logo from "../assets/planet.svg"

export default function Header() {
    return (
        <React.Fragment>
            <header className="travel-jornal-header">
                <img src={logo} alt="logo" />
                <p>my travel jornal</p>
            </header>
        </React.Fragment>
    );
}