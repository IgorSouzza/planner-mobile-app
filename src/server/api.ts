import axios from 'axios'

export const api = axios.create({
  baseURL: '192.168.15.64:3333',
})
