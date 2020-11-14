import axios from 'axios';


const instance = axios.create({
  baseURL: 'https://us-central1-chalenge-99d37.cloudfunctions.net/api'// THE API (cloud function) URL
})


export default instance;

//https://us-central1-chalenge-99d37.cloudfunctions.net/api
//http://localhost:5001/chalenge-99d37/us-central1/api