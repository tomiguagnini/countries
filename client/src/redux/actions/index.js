/* 3️⃣ ***ACTIONS*** 3️⃣ */

//📢 Puedes utilizar axios si lo deseas, sólo debes importarlo 📢
import axios from "axios";

export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES";
export const GET_COUNTRIES_BY_NAME = "GET_COUNTRIES_BY_NAME";
export const CREATE_ACTIVITY = "CREATE_ACTIVITY";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const ORDER_BY_POPULATION = "ORDER_BY_POPULATION";
export const COUNTRY_DETAIL = "COUNTRY_DETAIL";




export const getAllCountries = () => {
    return async function (dispatch) {
        try {
            let response = await axios.get("http://localhost:3001/countries");
            return dispatch({
                type: GET_ALL_COUNTRIES,
                payload: response.data,
            });
        } catch (error) {
            console.log(error);
        }
    };
};


export const getCountriesByName = (name) => {
    return async function (dispatch) {
        try {
            let response = await axios.get(
              `http://localhost:3001/countries?name=${name}`
            );
            return dispatch({
                type: GET_COUNTRIES_BY_NAME,
                payload: response.data,
            });
        } catch (error) {
            console.log(error);
        }
    };
};

export const createActivity = (activity)=>{
    return async function (dispatch){
        try{
            await axios.post("http://localhost:3001/activities",activity)
            return dispatch({
                type: CREATE_ACTIVITY
            })
        }catch (error){
            console.log(error)
        }
    }
}

export const getCountry = (id)=>{
    return async function (dispatch) {
        try {
            let response = await axios.get(
              `http://localhost:3001/countries/${id}`
            )
            return dispatch({
                type: COUNTRY_DETAIL,
                payload: response.data,
            });
        } catch (error) {
            console.log(error);
        }
    };
}

export const orderByName = ()=>{
    return {
        type : ORDER_BY_NAME
    }
}

export const orderByPopulation = ()=>{
    return {
        type : ORDER_BY_POPULATION
    }
}




