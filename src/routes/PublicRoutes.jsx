import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import HomePage from '../pages/HomePage/HomePage'
import ProductPage from '../pages/ProductPage'
import OrderPage from '../pages/OrderPage'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: '/producto',
				element: <ProductPage />,
			},
			{
				path: '/orden',
				element: <OrderPage />,
			},
		],
	},
])

const PublicRoutes = () => {
	return <RouterProvider router={router} />
}

export default PublicRoutes
