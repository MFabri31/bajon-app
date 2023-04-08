import styled from '@emotion/styled'
import { Box, TextField } from '@mui/material'
import searchIcon from '../../assets/icons/search-icon.svg'

const SearchForm = ({ handleSearchValue }) => {
	const SearchIcon = styled('img')({
		position: 'absolute',
		right: '2rem',
		top: '0.8rem',
	})

	return (
		<Box
			as='form'
			flexDirection
			alignItems='center'
			justifyContent='space-between'
			position='relative'>
			<TextField
				variant='filled'
				label='Buscar'
				fullWidth
				sx={{ background: 'white' }}
				onChange={handleSearchValue}
			/>
			<SearchIcon src={searchIcon} alt='icono de búsqueda' />
		</Box>
	)
}

export default SearchForm
