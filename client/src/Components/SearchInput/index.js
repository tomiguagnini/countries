import React from "react";
import * as style from "./index.module.css"

function SearchInput({handleSubmit}) {
    return (
        <>
            <form onSubmit={handleSubmit} className={style.form}>
                <input name="search" type="search" placeholder="Search" />
                <button type="submit">Enviar</button>
            </form>
        </>
    );
}

export default SearchInput;
