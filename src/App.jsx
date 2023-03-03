import { Container } from '@mui/material'
import Categories from './components/Categories'
import ListProduct from './components/ListProduct'
import SearchForm from './components/SearchForm'

const App = () => {
	return (
		<>
			<Container maxWidth='sm'>
				<SearchForm />
				<Categories />
				<ListProduct />
			</Container>
		</>
	)
}

export default App
