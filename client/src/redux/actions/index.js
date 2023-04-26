/* 3️⃣ ***ACTIONS*** 3️⃣ */

//📢 Puedes utilizar axios si lo deseas, sólo debes importarlo 📢
import axios from "../../libs/axios";

export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES";
export const GET_COUNTRIES_BY_NAME = "GET_COUNTRIES_BY_NAME";
export const CREATE_ACTIVITY = "CREATE_ACTIVITY";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const ORDER_BY_NAME_DESC = "ORDER_BY_NAME_DESC"
export const ORDER_BY_POPULATION = "ORDER_BY_POPULATION";
export const ORDER_BY_POPULATION_DESC = "ORDER_BY_POPULATION_DESC";
export const COUNTRY_DETAIL = "COUNTRY_DETAIL";
export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT";
export const FILTER_BY_ACTIVITY = "FILTER_BY_ACTIVITY";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const RESET = "RESET";

export const getAllCountries = () => {
    return async function (dispatch) {
        try {
            let response = await axios.get("/countries");
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
                `/countries?name=${name}`
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

export const createActivity = (activity) => {
    return async function (dispatch) {
        try {
            await axios.post("/activities", activity);
            return dispatch({
                type: CREATE_ACTIVITY,
            });
        } catch (error) {
            console.log(error);
        }
    };
};

export const getCountry = (id) => {
    return async function (dispatch) {
        try {
            let response = await axios.get(
                `/countries/${id}`
            );
            return dispatch({
                type: COUNTRY_DETAIL,
                payload: response.data,
            });
        } catch (error) {
            console.log(error);
        }
    };
};
export const getActivities = ()=>{
    return async function (dispatch) {
        try {
            let response = await axios.get("/activities");
            return dispatch({
                type: GET_ACTIVITIES,
                payload: response.data,
            });
        } catch (error) {
            console.log(error);
        }
    };
}
export const filterByContinent = (continent) => {
    return {
        type: FILTER_BY_CONTINENT,
        payload: continent
    };
};

export const filterByActivity = (id) =>{
    return {
        type: FILTER_BY_ACTIVITY,
        payload: id
    }
}

export const orderByName = (type = 'ASC') => {
    if ( type === "DESC"){
        return{ type: ORDER_BY_NAME_DESC }
    }else{
        return { type: ORDER_BY_NAME }
    }
};

export const orderByPopulation = (type = 'ASC') => {
    if ( type === "DESC"){
        return{ type: ORDER_BY_POPULATION_DESC}
    }else{
        return { type: ORDER_BY_POPULATION }
    }
};

export const reset =() =>{
    return async function (dispatch) {
        try {
            let response = await axios.get("/countries");
            return dispatch({
                type: RESET,
                payload: response.data,
            });
        } catch (error) {
            console.log(error);
        }
    };
}