import axios from "axios";
const URL='https://api.openweathermap.org/data/2.5/weather';
const API_KEY='7201b66ea0915bcf4fbaf2702e880370';

export const fetchWeather=async(query)=>{
    const {data}=await axios.get(URL,{
        params:{
            q:query,
            units:'metric',
            APPID:API_KEY,
        }
    });
    return data;
}