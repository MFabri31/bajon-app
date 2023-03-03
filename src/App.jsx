import { Container } from '@mui/material'
import Categories from './components/Categories'
import SearchForm from './components/SearchForm/SearchForm'

const App = () => {
	return (
		<>
			<Container maxWidth='sm'>
				<SearchForm />
				<Categories />
			</Container>
		</>
	)
}

export default App
