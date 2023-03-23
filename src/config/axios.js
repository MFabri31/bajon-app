import axios from 'axios'

export const APIInstance = axios.create({
	baseURL: 'http://localhost:3000',
})
