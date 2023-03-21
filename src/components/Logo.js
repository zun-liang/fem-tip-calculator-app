import React from "react";
import LogoIcon from "../images/logo.svg";

function Logo() {
    return (
        <div className="logo">
            <img src={LogoIcon} alt="logo icon" className="logo--icon"/>
        </div>
    )
}

export default Logo;