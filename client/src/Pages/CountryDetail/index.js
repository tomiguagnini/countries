import React, { useEffect } from "react";
import * as style from "./index.module.css";
import * as actions from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
function CountryDetail() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const country = useSelector((state) => {
        return { ...state.countryDetail };
    });
    console.log(id);
    console.log(country);

    useEffect(() => {
        console.log("dispatching action");
        dispatch(actions.getCountry(id));
    }, [dispatch, id]);

    // if (!country) {
    //     return <div>Cargando...</div>;
    // }
    return (
        <div className={style.bg}>
            <div className={style.container}>
                {country ? (
                    <div className={style.cardDetail}>
                        <img
                            src={country.flag?.split(",")[0]}
                            alt={country.name}
                        />
                        <h1 className={style.title}>{country.name}</h1>
                        <div className={style.info}>
                            <p>Codigo: {country.id}</p>
                            <p>Continente: {country.continent}</p>
                            <p>Capital: {country.capital}</p>
                            <p>Subregion: {country.subregion}</p>
                            <p>Area: {country.area} km2</p>
                            <p>Poblacion: {country.population}</p>
                        </div>
                        <div className={style.listActivities}>
                            <h2>Actividades</h2>
                            <ul>
                                {country.Activities?.map((a) => {
                                    return <li key={a.id}>{a.name}</li>;
                                })}
                            </ul>
                        </div>
                    </div>
                ) : (
                    <div>Cargando...</div>
                )}
            </div>
        </div>
    );
}

export default CountryDetail;
