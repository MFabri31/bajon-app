import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import HomePage from '../pages/HomePage/HomePage'

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
				element: <div>Página del producto</div>,
			},
		],
	},
	{
		path: '/orden',
		element: <div>Página de la orden del producto</div>,
	},
])

const PublicRoutes = () => {
	return <RouterProvider router={router} />
}

export default PublicRoutes
