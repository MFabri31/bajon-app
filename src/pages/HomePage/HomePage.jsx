import Categories from '../../components/Categories/Categories'
import ListProduct from '../../components/ListProduct'
import SearchForm from '../../components/SearchForm'
import { useAppContext } from '../../context/AppContext'

const HomePage = () => {
	const { data, loading, error, term, handleSearchValue } = useAppContext()

	if (error) return <h3>Se ha producido un error!</h3>

	if (loading) return <h3>Cargando...</h3>

	return (
		<>
			<Categories />
			<SearchForm handleSearchValue={handleSearchValue} />
			<ListProduct products={data} term={term} />
		</>
	)
}

export default HomePage
