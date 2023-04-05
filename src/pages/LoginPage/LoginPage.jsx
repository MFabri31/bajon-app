import { useEffect } from 'react'
import LoginForm from '../../components/LoginForm'
import UserProfile from '../../components/UserProfile/UserProfile'
import { Box, Typography } from '@mui/material'
import { useAppContext } from '../../context/AppContext'
import { Link } from 'react-router-dom'
import ArrowLeft from '../../assets/icons/icon-arrow-left.svg'

const LoginPage = () => {
	const { token, setToken } = useAppContext()

	useEffect(
		token => {
			setToken(localStorage.getItem('token'))
		},
		[token]
	)

	return token ? (
		<UserProfile />
	) : (
		<Box
			sx={{
				display: 'flex',
				alignContent: 'center',
				flexDirection: 'column',
				justifyContent: 'center',
				padding: 2,
				minHeight: '100vh',
			}}>
			<Link to='/' style={{ color: 'white' }}>
				<img src={ArrowLeft} alt='arrow icon ' />
			</Link>
			<Typography fontSize='2rem' marginY='1rem' color='white'>
				Iniciar Sesión
			</Typography>

			<LoginForm />
		</Box>
	)
}

export default LoginPage
