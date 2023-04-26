import axios from "../libs/axios";

export const createActivity = async(activity)=>{
    return await axios.post("/activities",activity)
}