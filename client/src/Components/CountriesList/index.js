import React, { useEffect } from "react";
import { getCountries } from "../../services";
import * as style from "./index.module.css";

function CountriesList({countries, setCountries}) {
    

    useEffect(() => {
        getCountries().then((response) => {
            setCountries(response.data.slice(0, 10));
        });
    }, []);

    return (
        <div>
            
            {countries.map((c) => {
                return (
                    <div className={style.card} key={c.id}>
                        <img
                            className={style.img}
                            src={c.flag.split(",")[0]}
                            alt={c.name}
                        />
                        <h3>{c.name}</h3>
                        <h4>{c.continent}</h4>
                    </div>
                );
            })}
        </div>
    );
}

export default CountriesList;
