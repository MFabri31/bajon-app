import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'
import Categories from '../Categories'
import Header from '../Header/Header'
import NavBar from '../NavBar'

const Layout = () => {
	return (
		<>
			<Header />
			<Categories />
			<Box component='main' paddingY='3rem'>
				<Outlet />
			</Box>
			<NavBar />
		</>
	)
}

export default Layout
