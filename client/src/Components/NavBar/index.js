import React from "react";
import { Link } from "react-router-dom";
import * as style from "./index.module.css";

function NavBar(props) {
    return (
        <div className={style.nav}>
            <h2>Countries</h2>
            <button>
                <Link to="/activity" className={style.link}>Create Activity</Link>
            </button>
        </div>
    );
}

export default NavBar;
