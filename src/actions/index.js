import axios from 'axios';

const API_KEY = 'oelQSXnAad2Y6AZ2pYuY7Vxh9r7ji2p8bcy1h8M6';
const ROOT_URL = `https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us&units=imperial`;
  const request = axios.get(url);

  console.log('Request', request);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}