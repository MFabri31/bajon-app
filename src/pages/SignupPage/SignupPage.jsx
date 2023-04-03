import { Box, Typography } from '@mui/material'
import { useEffect } from 'react'
import SignupForm from '../../components/SignupForm'
import { useAppContext } from '../../context/AppContext'

const SignupPage = () => {
	const { token, setToken } = useAppContext()

	useEffect(
		token => {
			setToken(localStorage.getItem('token'))
		},
		[token]
	)

	return token ? (
		<div>Profile component</div>
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
			<Typography fontSize='2rem' marginY='1rem' color='white'>
				Crea una cuenta
			</Typography>
			<SignupForm />
		</Box>
	)
}
export default SignupPage
