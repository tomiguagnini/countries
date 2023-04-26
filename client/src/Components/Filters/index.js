import React from "react";
import * as style from "./index.module.css";
import * as actions from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

function Filter(props) {
    const dispatch = useDispatch();
    const activities = useSelector((state) => {
        return [...state.activities];
    });
    const handleOrder = (e) => {
        const select = e.target.selectedIndex;
        const option = e.target.options[select].value;
        switch (option) {
            case '1':
                dispatch(actions.orderByName());
                break;
            case '2':
                dispatch(actions.orderByName('DESC'));      
                break;   
            case '3':
                dispatch(actions.orderByPopulation());      
                break;   
            case '4':
                dispatch(actions.orderByPopulation('DESC'));      
                break;   
        }
            
        
    }
    const handleFilter = (e) => {
        const select = e.target.selectedIndex;
        const option = e.target.options[select].value;
        dispatch(actions.filterByContinent(option));
    };
    const handleReset = () => {
        dispatch(actions.reset());
    };
    const handleActivity = (e) => {
        const select = e.target.selectedIndex;
        const option = e.target.options[select].value;
        dispatch(actions.filterByActivity(Number(option)));
    };
    return (
        <div>
            <div className={style.filters}>
                <div>
                <label>Orden: </label>
                <select name="order" onChange={handleOrder}>
                    <option value="default"></option>
                    <option value="1">Alfabetico A..Z </option>
                    <option value="2">Alfabetico Z..A </option>
                    <option value="3">Poblacion A..Z </option>
                    <option value="4">Poblacion Z..A </option>
                </select>
                </div>
                <div>
                <label>Continente: </label>
                <select name="filter" onChange={handleFilter}>
                    <option value="default"></option>
                    <option value="Americas">America</option>
                    <option value="Europe">Europa</option>
                    <option value="Asia">Asia</option>
                    <option value="Africa">Africa</option>
                    <option value="Antartic">Antartida</option>
                </select>
                </div>
                <div>
                <label>Actividad: </label>
                <select onChange={handleActivity}>
                    <option value=""></option>
                    {activities.map((a) => {
                        return <option value={a.id}>{a.name}</option>;
                    })}
                </select>
                </div>
                <div>
                <button onClick={handleReset}>Reset</button>
                </div>
            </div>
        </div>
    );
}

export default Filter;
