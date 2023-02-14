import React, { useEffect, useState } from "react";
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
    const countriesFiltered = useSelector(state =>{
        return [...state.countriesFiltered]
    })
    const [filter,setFilter] = useState(false)
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
    const handleFilter = e =>{
        const select = e.target.selectedIndex;
        const option = e.target.options[select].value;
        dispatch(actions.filterByContinent(option))
    }
    const handleReset = () =>{
        dispatch(actions.reset());
    }

    return (
        <div className={style.bg}>
            <NavBar buttonName='Create Activity' path='/Activity'/>
            <div className={style.container}>
                <SearchInput handleSubmit={handleSubmit}/>
                <div className={style.filters}>
                    <label>Orden: </label>
                    <select name="order" onChange={handleOrder}>
                        <option value="default"></option>
                        <option value="alfabetico">Alfabetico A..Z </option>
                        <option value="poblacion">Poblacion A..z </option>
                    </select>
                    <label>Filter: </label>
                    <select name="filter" onChange={handleFilter}>
                        <option value="default"></option>
                        <option value="Americas">America</option>
                        <option value="Europe">Europa</option>
                        <option value="Asia">Asia</option>
                        <option value="Africa">Africa</option>
                        <option value="Antartic">Antartic</option>
                    </select>
                    <button onClick={handleReset}>Reset</button>
                </div>
                {countriesFiltered.length > 0?
                <CountriesList countries={countriesFiltered} />:
                <CountriesList countries={countries}/>
                }
            </div>
        </div>
    );
}

export default Dashboard;
