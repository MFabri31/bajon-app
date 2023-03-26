import { Box, Button, TextField } from '@mui/material'
import { useState } from 'react'

const INITIAL_STATE = {
	name: '',
	email: '',
	password: '',
	repassword: '',
}

const SignupForm = () => {
	const [form, setForm] = useState(INITIAL_STATE)

	const { name, email, password, repassword } = form

	const handleChange = evt => {
		setForm({
			...form,
			[evt.target.name]: evt.target.value,
		})
	}

	const handleSubmit = evt => {
		evt.preventDefault()
		alert('crea usuario', name, email, password)
	}

	return (
		<Box
			as='form'
			bgcolor='white'
			color='red'
			padding='2em'
			borderRadius='8px'
			onSubmit={handleSubmit}>
			<TextField
				id='outlined-basic'
				label='Usuario'
				variant='outlined'
				margin='normal'
				fullWidth
				name='name'
				value={name}
				onChange={handleChange}
			/>
			<TextField
				id='outlined-basic'
				label='Email'
				variant='outlined'
				margin='normal'
				fullWidth
				type='email'
				name='email'
				value={email}
				onChange={handleChange}
			/>
			<TextField
				id='outlined-password-input'
				label='Contraseña'
				variant='outlined'
				margin='normal'
				fullWidth
				autoComplete='current-password'
				type='password'
				name='password'
				value={password}
				onChange={handleChange}
			/>
			<TextField
				id='outlined-password-input'
				label='Confirmar Contraseña'
				variant='outlined'
				margin='normal'
				fullWidth
				autoComplete='current-password'
				type='password'
				name='repassword'
				value={repassword}
				onChange={handleChange}
			/>

			<Button
				variant='contained'
				type='submit'
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
