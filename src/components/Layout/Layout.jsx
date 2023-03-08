import { Outlet } from 'react-router-dom'
import Categories from '../Categories'
import Header from '../Header/Header'
import NavBar from '../NavBar'

const Layout = () => {
	return (
		<>
			<Header />
			<Categories />
			<Outlet />
			<NavBar />
		</>
	)
}

export default Layout
