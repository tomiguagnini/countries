import React, { useEffect } from "react";
import CountriesList from "../../Components/CountriesList";
import * as actions from "../../redux/actions";
import * as style from "./index.module.css";
import { useDispatch, useSelector } from "react-redux";
import SearchInput from "../../Components/SearchInput";

function Dashboard() {
    const countries = useSelector(state => {
        return [ ...state.countries ];
     });
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.getAllCountries());
    }, [dispatch]);
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.search.value;
        dispatch(actions.getCountriesByName(name));
    };

    const handleOrder = (e) => {
        const select = e.target.selectedIndex;
        const option = e.target.options[select].value;
        if (option === "alfabetico") {
            dispatch(actions.orderByName());
        } else {
            if (option === "poblacion") {
                dispatch(actions.orderByPopulation());
            }
        }
    };

    return (
        <div className={style.bg}>
            <div className={style.container}>
                <SearchInput handleSubmit={handleSubmit}/>
                <div className={style.filters}>
                    <label>Orden: </label>
                    <select name="order" onChange={handleOrder}>
                        <option value="default" disabled></option>
                        <option value="alfabetico">Alfabetico A..Z </option>
                        <option value="poblacion">Poblacion A..z </option>
                    </select>
                </div>
                <CountriesList countries={countries} />
            </div>
        </div>
    );
}

export default Dashboard;
