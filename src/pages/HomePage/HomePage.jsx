import { useState } from 'react'
import ListProduct from '../../components/ListProduct'
import SearchForm from '../../components/SearchForm'
import { useAppContext } from '../../context/AppContext'

const HomePage = () => {
	const [term, setTerm] = useState('')

	const { data, loading, error } = useAppContext()

	const handleSearchValue = evt => {
		setTerm(evt.target.value)
	}

	if (error) return <h3>Se ha producido un error!</h3>

	if (loading) return <h3>Cargando...</h3>

	return (
		<>
			<SearchForm handleSearchValue={handleSearchValue} />
			<ListProduct products={data} term={term} />
		</>
	)
}

export default HomePage
