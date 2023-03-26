import { Box, FormControlLabel, Radio, Button, TextField } from '@mui/material'
import { Link } from 'react-router-dom'

const LoginForm = () => {
	return (
		<Box as='form' bgcolor='white' padding='2em' borderRadius='8px'>
			<TextField
				id='outlined-basic'
				label='Usuario'
				variant='outlined'
				margin='normal'
				fullWidth
			/>
			<TextField
				id='outlined-password-input'
				label='Contraseña'
				variant='outlined'
				margin='normal'
				fullWidth
				autoComplete='current-password'
			/>
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
