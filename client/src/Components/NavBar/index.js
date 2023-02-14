import React from "react";
import { Link } from "react-router-dom";
import * as style from "./index.module.css";

function NavBar({buttonName,path}) {
    return (
        <div className={style.nav}>
            <h2>Countries</h2>
            <button>
                <Link to={path} className={style.link}>{buttonName}</Link>
            </button>
        </div>
    );
}

export default NavBar;
