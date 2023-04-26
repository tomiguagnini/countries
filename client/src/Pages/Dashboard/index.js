import React, { useEffect, useState } from "react";
import CountriesList from "../../Components/CountriesList";
import * as actions from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import * as style from "./index.module.css";
import SearchInput from "../../Components/SearchInput";
import NavBar from "../../Components/NavBar";
import Filter from "../../Components/Filters";

function Dashboard() {
    const countries = useSelector(state => {
        return [ ...state.countries ];
    });
    const countriesFiltered = useSelector(state =>{
        return [...state.countriesFiltered]
    })
    console.log(countries)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(actions.getAllCountries());
        dispatch(actions.getActivities())
    }, [dispatch]);
    


    return (
        <div className={style.bg}>
            <NavBar buttonName='Create Activity' path='/Activity'/>
            <div className={style.container}>
                <SearchInput />
                <Filter/>
                {countriesFiltered.length > 0?
                <CountriesList countries={countriesFiltered} />:
                <CountriesList countries={countries}/>
                }
            </div>
        </div>
    );
}

export default Dashboard;
