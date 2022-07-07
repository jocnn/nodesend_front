import axios from 'axios'

const clientAxios = axios.create({
	baseURL: process.env.NEXT_PUBLIC_DEVELOPMENT_ENV_HOSTBACKEND,
})

export default clientAxios