import { useState, useEffect, createContext, useContext } from 'react'
import { APIInstance } from '../config/axios'

const AppContext = createContext()

const { Provider } = AppContext

export const AppProvider = ({ children }) => {
	const [data, setData] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(false)
	const [cart, setCart] = useState([])
	const [token, setToken] = useState()
	const [term, setTerm] = useState('')

	const getData = async () => {
		try {
			const response = await APIInstance.get('/products')
			setData(response.data)
		} catch (error) {
			setError(true)
		}
		setLoading(false)
	}

	const addToCart = product => {
		setCart([...cart, product])
	}

	const removeProductToCart = id => {
		const cartUpdate = cart.filter(product => product.id !== id)
		setCart(cartUpdate)
	}

	const clearCart = () => {
		setCart([])
	}

	const handleSearchValue = evt => {
		setTerm(evt.target.value)
	}

	const handleGetProduct = evt => setTerm(evt.currentTarget.textContent)

	useEffect(() => {
		getData()
	}, [])

	return (
		<Provider
			value={{
				data,
				loading,
				error,
				cart,
				addToCart,
				removeProductToCart,
				clearCart,
				token,
				setToken,
				term,
				handleGetProduct,
				handleSearchValue,
			}}>
			{children}
		</Provider>
	)
}

export const useAppContext = () => {
	return useContext(AppContext)
}

export default AppProvider
