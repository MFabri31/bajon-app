import { Box, Grid, Typography } from '@mui/material'
import CardProduct from '../CardProduct'

const ListProduct = ({ products }) => {
	return (
		<>
			<Box mt='3rem' color='white'>
				<Typography my='1rem'>Recomendados</Typography>
				<Grid container spacing={2}>
					{products?.map(product => (
						<Grid item xs={12} md={6}>
							<CardProduct key={product.id} product={product} />
						</Grid>
					))}
				</Grid>
			</Box>
		</>
	)
}

export default ListProduct
