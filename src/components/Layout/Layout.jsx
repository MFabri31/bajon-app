import { Box } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Categories from '../Categories'
import NavBar from '../NavBar'

const Layout = () => {
	return (
		<>
			<Categories />
			<Outlet />
			<NavBar />
		</>
	)
}

export default Layout
