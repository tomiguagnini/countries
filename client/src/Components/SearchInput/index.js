import React from "react";
import * as style from "./index.module.css"
import * as actions from "../../redux/actions";
import { useDispatch } from "react-redux";

function SearchInput() {
    const dispatch = useDispatch()
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.search.value;
        dispatch(actions.getCountriesByName(name));
    };
    return (
        <>
            <form onSubmit={handleSubmit} className={style.form}>
                <input name="search" type="search" placeholder="Search" autoComplete="off"/>
                <button type="submit">Enviar</button>
            </form>
        </>
    );
}

export default SearchInput;
