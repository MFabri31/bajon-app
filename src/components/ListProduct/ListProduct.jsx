import { Box, Grid, Typography } from '@mui/material'
import ProductCard from '../CardProduct'

const ListProduct = ({ products }) => {
	return (
		<>
			<Box mt='3rem'>
				<Typography my='1rem'>Recomendados</Typography>
				<Grid container spacing={2}>
					{products?.map(product => (
						<Grid item xs={12} md={6}>
							<ProductCard key={product.id} {...product} />
						</Grid>
					))}
				</Grid>
			</Box>
		</>
	)
}

export default ListProduct
