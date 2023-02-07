import React, { useState, useEffect } from "react";
import CountriesList from "../../Components/CountriesList";
import { getCountries, getCountriesByName } from "../../services";
import * as style from "./index.module.css";

function Dashboard() {
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
    useEffect(() => {
        getCountries().then((response) => {
            setCountries(response.data);
        });
    }, []);

    return (
        <div className={style.bg}>
            <div className={style.container}>
                <form onSubmit={handleSubmit} className={style.form}>
                    <input name="search" type="search" placeholder="Search" />
                    <button type="submit">Enviar</button>
                </form>
                <CountriesList
                    countries={countries}
                    pageSize={5}
                />
            </div>
        </div>
    );
}

export default Dashboard;
