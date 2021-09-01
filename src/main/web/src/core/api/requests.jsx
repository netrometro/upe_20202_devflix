import { default as axios } from 'axios'

const API_BASE_URL = "https://upedevflix.herokuapp.com/api/v1";

export function get(url, params, bearer, response){
  axios.get(API_BASE_URL + url, { 
    params: params || {},
    headers: {
      'Authorization': 'Bearer ' + bearer || ''
    }
  }).then((res) => response(res.data, res.status))
  .catch((err) => response(err.response?.data, err.response?.status));
}

export function post(url, params, body, bearer, response){
  axios.post(API_BASE_URL + url, { 
    params: params || {},
    data: body || {},
    headers: {
      'Authorization': 'Bearer ' + bearer || ''
    }
  }).then((res) => response(res.data, res.status))
  .catch((err) => response(err.response?.data, err.response.status));
}

export function put(url, params, body, bearer, response){
  axios.put(API_BASE_URL + url, { 
    params: params || {},
    data: body || {},
    headers: {
      'Authorization': 'Bearer ' + bearer || ''
    }
  }).then((res) => response(res.data, res.status))
  .catch((err) => response(err.response?.data, err.response.status));
}

export function del(url, params, bearer, response){
  axios.delete(API_BASE_URL + url, { 
    params: params || {},
    headers: {
      'Authorization': 'Bearer ' + bearer || ''
    }
  }).then((res) => response(res.data, res.status))
  .catch((err) => response(err.response?.data, err.response.status));
}