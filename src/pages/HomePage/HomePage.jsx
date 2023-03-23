import ListProduct from '../../components/ListProduct'
import SearchForm from '../../components/SearchForm'
import { useAppContext } from '../../context/AppContext'

const HomePage = () => {
	const { data, loading, error } = useAppContext()

	if (error) return <h3>Se ha producido un error!</h3>

	if (loading) return <h3>Cargando...</h3>

	return (
		<>
			<SearchForm />
			<ListProduct products={data} />
		</>
	)
}

export default HomePage
