import React, { useEffect } from "react";
import CountriesList from "../../Components/CountriesList";
import * as actions from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import * as style from "./index.module.css";
import SearchInput from "../../Components/SearchInput";
import NavBar from "../../Components/NavBar";

function Dashboard() {
    const countries = useSelector(state => {
        return [ ...state.countries ];
     });
    const dispatch = useDispatch();
     console.log(countries)
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
            <NavBar/>
            <div className={style.container}>
                <SearchInput handleSubmit={handleSubmit}/>
                <div className={style.filters}>
                    <label>Orden: </label>
                    <select name="order" onChange={handleOrder}>
                        <option value="default"> default</option>
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
