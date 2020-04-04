import axios from 'axios';

const API_KEY = "76f368860a23724a83074b4fd09ddc2b";
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},ir`;
    const request = axios.get(url);
    return {
        type: FETCH_WEATHER,
        payload: request,
    };
}