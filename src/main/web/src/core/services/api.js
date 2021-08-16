import axios from 'axios'

const Api = axios.create({
  baseURL: 'https://upedevflix.herokuapp.com/api',
})

export default Api
