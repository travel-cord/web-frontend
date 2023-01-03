import axios, { AxiosRequestConfig } from 'axios'

const axiosConfig: AxiosRequestConfig = {
  baseURL: process.env.NEXT_PUBLIC_API_DOMAIN
}
export const serverApi = axios.create(axiosConfig)
