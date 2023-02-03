import React, { useState } from "react";
import CountriesList from "../../Components/CountriesList";
import { getCountriesByName } from "../../services";
import * as style from "./index.module.css";

function Dashboard(props) {
    const [countries, setCountries] = useState([]);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.search.value
        getCountriesByName(name)
        .then(
            (res) => {
                setCountries(res.data);
            },
            (err) => console.log(err.message)
        )
    }

    return (
        <div className={style.bg}>
            <div className={style.container}>
                <form onSubmit={handleSubmit} className={style.form}>
                    <input name="search" type="search" placeholder="Search" />
                    <button type="submit">Enviar</button>
                </form>
                <CountriesList
                    countries={countries}
                    setCountries={setCountries}
                />
            </div>
        </div>
    );
}

export default Dashboard;
