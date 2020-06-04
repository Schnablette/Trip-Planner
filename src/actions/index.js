import axios from 'axios';

export const FETCH_PARK = 'FETCH_PARK';
export const FETCH_CAMPSITE = 'FETCH_CAMPSITE';
export const FETCH_EVENTS = 'FETCH_EVENTS';

const API_KEY = 'oelQSXnAad2Y6AZ2pYuY7Vxh9r7ji2p8bcy1h8M6';
const ROOT_URL = 'https://developer.nps.gov/api/v1/'

//API pull for Park information
export function fetchParkInformation(parkCode) {
  const url = `${ROOT_URL}/parks?parkCode=${parkCode}&api_key=${API_KEY}`
  const request = axios.get(url);

  console.log('Request', request);
  //this is the action; need to call the redux store dispatch
  return {
    type: FETCH_PARK,
    payload: request
  };
}

//API pull for campsite information
export function fetchCampSiteInformation(parkCode) {
  const url = `${ROOT_URL}/campgrounds?parkCode=${parkCode}&api_key=${API_KEY}`
  const request = axios.get(url);

  console.log('Request', request);

  return {
    type: FETCH_CAMPSITE,
    payload: request
  };
}

//API pull for event information
export function fetchEVENTInformation(parkCode) {
  const url = `${ROOT_URL}/events?parkCode=${parkCode}&api_key=${API_KEY}`
  const request = axios.get(url);

  console.log('Request', request);

  return {
    type: FETCH_EVENTS,
    payload: request
  };
}