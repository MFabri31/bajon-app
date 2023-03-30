import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Stack } from '@mui/material'
import addIcon from '../../assets/icons/add-icon.svg'
import { Link } from 'react-router-dom'
import { useAppContext } from '../../context/AppContext'

const CardProduct = ({ product }) => {
	const { name_product, description_product, price } = product

	const { addToCart } = useAppContext()

	return (
		<Card sx={{ mb: '1rem', borderRadius: '8px' }}>
			<Link to='/producto'>
				<CardMedia
					component='img'
					alt='green iguana'
					height='240'
					image='https://images.unsplash.com/photo-1513185158878-8d8c2a2a3da3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
				/>
			</Link>
			<CardContent>
				<Typography gutterBottom variant='h5' color='custom.dark'>
					{name_product}
				</Typography>
				<Typography variant='body2' color='text.secondary' my={3}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					{description_product}
				</Typography>
				<Stack
					direction='row'
					alignItems='center'
					justifyContent='space-between'>
					<Typography variant='h6' color='custom.purple' fontWeight='600'>
						${price}
					</Typography>
					<CardActions>
						<CardMedia
							component='img'
							src={addIcon}
							onClick={() => addToCart(product)}
						/>
					</CardActions>
				</Stack>
			</CardContent>
		</Card>
	)
}

export default CardProduct
