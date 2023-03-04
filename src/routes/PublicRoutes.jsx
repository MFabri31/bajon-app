import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
	{
		path: '/inicio',
		element: <div>Página de inicio</div>,
	},
	{
		path: '/producto',
		element: <div>Página del producto</div>,
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
