import { Box, Typography } from '@mui/material'
import SignupForm from '../../components/SignupForm'

const SignupPage = () => {
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
				Crea una cuenta
			</Typography>
			<SignupForm />
		</Box>
	)
}
export default SignupPage
