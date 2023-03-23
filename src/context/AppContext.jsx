import { useState, useEffect, createContext, useContext } from 'react'
import { APIInstance } from '../config/axios'

const AppContext = createContext()

const { Provider } = AppContext

export const AppProvider = ({ children }) => {
	const [data, setData] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(false)

	const getData = async () => {
		try {
			const response = await APIInstance.get('/products')
			setData(response.data)
		} catch (error) {
			setError(true)
		}
		setLoading(false)
	}

	useEffect(() => {
		getData()
	}, [])

	return <Provider value={{ data, loading, error }}>{children}</Provider>
}

export const useAppContext = () => {
	return useContext(AppContext)
}

export default AppProvider
