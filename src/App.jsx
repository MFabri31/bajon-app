import { Container } from '@mui/material'
import Categories from './components/Categories'
import ListProduct from './components/ListProduct'
import NavBar from './components/NavBar'
import SearchForm from './components/SearchForm'

const App = () => {
	return (
		<>
			<Container maxWidth='sm'>
				<SearchForm />
				<Categories />
				<ListProduct />
				<NavBar />
			</Container>
		</>
	)
}

export default App
