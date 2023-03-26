import { Box, Typography } from '@mui/material'
import LoginForm from '../../components/LoginForm'

const LoginPage = () => {
	return (
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
				Iniciar Sesión
			</Typography>
			<LoginForm />
		</Box>
	)
}

export default LoginPage
