import axios from "axios";

export const createActivity = async(activity)=>{
    return await axios.post("http://localhost:3001/activities",activity)
}