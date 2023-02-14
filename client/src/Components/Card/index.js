import React from "react";
import * as style from "./index.module.css";
function Card({ id, flag, name, continent }) {
    return (
        <div className={style.card} key={id}>
            <img
                className={style.img}
                src={flag.split(",")[1]}
                alt={name}
            />
            <div className={style.info}>
                <h3>{name.slice(0, 15)}</h3>
                <h4>{continent}</h4>
            </div>
        </div>
    );
}

export default Card;
