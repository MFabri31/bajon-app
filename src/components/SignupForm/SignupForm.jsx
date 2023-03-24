import { Box, Button, FormControlLabel, Link, Radio } from '@mui/material'
import styled from '@emotion/styled'

const SignupForm = () => {
	const Input = styled('input')({
		width: '100%',
		padding: '1.3em',
		borderRadius: '8px',
		background: 'white',
		outline: '0',
		marginBottom: '1rem',
		border: '2px solid gray',
		fontSize: '1rem',
	})

	return (
		<Box as='form' bgcolor='white' padding='2em' borderRadius='8px'>
			<Input type='text' placeholder='Usuario' />
			<Input type='password' placeholder='Contraseña' />
			<Input type='password' placeholder='Confirmar contraseña' />
			<Button
				variant='contained'
				sx={theme => ({
					background: theme.palette.custom.blue,
					'&:hover': { background: theme.palette.custom.blue },
					width: '100%',
					marginY: '1rem',
					fontSize: '1rem',
				})}>
				Registrarte
			</Button>
		</Box>
	)
}

export default SignupForm
