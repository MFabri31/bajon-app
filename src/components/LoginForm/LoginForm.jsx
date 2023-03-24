import { Box, FormControlLabel, Radio, Button } from '@mui/material'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

const LoginForm = () => {
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
			<FormControlLabel
				value='a'
				name='radio'
				control={<Radio />}
				inputProps={{ 'aria-label': 'A' }}
				label='Mantener conectado'
				labelPlacement='End'
				sx={theme => ({
					color: theme.palette.custom.dark,
				})}
			/>
			<Link href='#' color='purple'>
				Recuperar contraseña
			</Link>
			<Button
				variant='contained'
				sx={theme => ({
					background: theme.palette.custom.blue,
					'&:hover': { background: theme.palette.custom.blue },
					width: '100%',
					marginY: '1rem',
					fontSize: '1rem',
				})}>
				Iniciar Sesión
			</Button>
		</Box>
	)
}

export default LoginForm
