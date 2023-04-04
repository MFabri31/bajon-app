import { useState, useEffect } from 'react'
import { Box, Typography, Button } from '@mui/material'
import { useAppContext } from '../../context/AppContext'
import { APIInstance } from '../../config/axios'

const UserProfile = () => {
	const [userName, setUserName] = useState('')
	const [userEmail, setUserEmail] = useState('')

	const { token, setToken } = useAppContext()

	const sesionClose = () => {
		localStorage.removeItem('token')
		setToken('')
	}

	useEffect(() => {
		if (token) {
			APIInstance.get(`http://localhost:3100/user`, {
				headers: {
					token: token,
				},
			})
				.then(({ data }) => {
					setUserName(data.name)
					setUserEmail(data.email)
				})
				.catch(error => console.error(error))
		}
	})

	return (
		<Box
			sx={{
				display: 'flex',
				color: 'white',
				flexDirection: 'column',
				padding: 2,
				minHeight: '100vh',
			}}>
			<Box>
				<svg
					width='100'
					height='100'
					fill='currentColor'
					viewBox='0 0 24 24'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						fill-rule='evenodd'
						d='M16 8c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4ZM4 18c0-2.66 5.33-4 8-4s8 1.34 8 4v2H4v-2Z'
						clip-rule='evenodd'></path>
				</svg>
			</Box>
			<Typography variant='h3' mb='1rem'>
				Bienvenido:{' '}
				<span style={{ color: 'red', fontSize: 'px' }}>{userName}</span>
			</Typography>
			<Typography variant='p'>
				Usuario:{' '}
				<span style={{ color: 'red', fontSize: '19px' }}>{userName}</span>
			</Typography>
			<Typography variant='p'>
				Email:{' '}
				<span style={{ color: 'red', fontSize: '19px' }}>{userEmail}</span>
			</Typography>
			<Button
				onClick={sesionClose}
				variant='contained'
				sx={{
					backgroundColor: 'custom.skyBlue',
					marginTop: '2rem',
					maxWidth: '30%',
				}}>
				Cerrar Sesión
			</Button>
		</Box>
	)
}

export default UserProfile
