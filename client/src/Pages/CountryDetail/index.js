import React, { useEffect } from 'react';
import * as style from "./index.module.css"
import * as actions from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import {useParams} from "react-router-dom"
function CountryDetail() {
    const {id} = useParams()
    const dispatch = useDispatch()
    const country = useSelector(state => {
        return { ...state.countryDetail };
     });
    console.log(country) 
    useEffect(()=>{
        dispatch(actions.getCountry(id))
    },[dispatch,id])
    return (
        <div className={style.bg}>
            <div className={style.container}>
                {country.name}
            </div>
               
        </div>
    );
}

export default CountryDetail;