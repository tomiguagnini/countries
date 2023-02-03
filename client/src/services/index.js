import axios from "axios";

export const getCountries = async()=>{
    return await axios.get("http://localhost:3001/countries")
}

export const getCountriesByName = async (name) => {
    return await axios.get(`http://localhost:3001/countries?name=${name}`)
}