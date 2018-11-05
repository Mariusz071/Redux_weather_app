import axios from 'axios';
const API_KEY = '246b53b783b42f06023936bf5a174848';

export const FETCH_WEATHER = 'FETCH_WEATHER';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

//getting weather data from API
export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},GB`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}