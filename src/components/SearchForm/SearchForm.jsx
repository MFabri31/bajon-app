import styled from '@emotion/styled'
import { Box } from '@mui/material'
import searchIcon from '../../assets/icons/search-icon.svg'

const SearchForm = () => {
	const Form = styled('form')({
		marginTop: '3rem',
	})

	const Input = styled('input')({
		width: '100%',
		padding: '1.5em',
		borderRadius: '8px',
		background: '#fff',
		color: '#444',
		outline: '0',
	})

	const SearchIcon = styled('img')({
		position: 'absolute',
		right: '2rem',
		top: '0.8rem',
	})

	return (
		<Form>
			<Box
				flexDirection
				alignItems='center'
				justifyContent='space-between'
				position='relative'>
				<Input type='text' placeholder='Buscar' />
				<SearchIcon src={searchIcon} alt='icono de búsqueda' />
			</Box>
		</Form>
	)
}

export default SearchForm
