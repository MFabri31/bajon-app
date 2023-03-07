import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Stack } from '@mui/material'
import addIcon from '../../assets/icons/plus-icon.svg'
import plusIcon from '../../assets/icons/plus-icon.svg'
import minusIcon from '../../assets/icons/minus-icon.svg'

const ProductPage = () => {
	return (
		<Card sx={{ mt: '2rem', borderRadius: '8px' }}>
			<CardContent>
				<Typography gutterBottom variant='h5' color='custom.dark'>
					Plato
				</Typography>
				<Typography variant='body2' color='text.secondary' my={3}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
					dolor sit amet consectetur adipisicing elit. Corrupti, aperiam magni
					eius voluptatum facilis corporis.
				</Typography>
				<Typography
					color='custom.dark'
					fontWeight='600'
					textAlign='center'
					marginRight='4rem'>
					Cantidad
				</Typography>
				<Stack
					direction='row'
					alignItems='center'
					justifyContent='space-between'>
					<Typography variant='h6' color='custom.purple' fontWeight='600'>
						$25
					</Typography>
					<CardActions>
						<Stack direction='row' justifyContent='space-between'>
							<CardMedia
								component='img'
								src={minusIcon}
								onClick={() => console.log('restando platos...')}
							/>
							<Typography color='custom.dark' marginX='1rem'>
								3
							</Typography>
							<CardMedia
								component='img'
								src={plusIcon}
								onClick={() => console.log('agregando platos...')}
							/>
						</Stack>
					</CardActions>
					<CardActions>
						<Typography
							variant='p'
							color='custom.blue'
							mr='1rem'
							fontWeight='600'>
							Pedir
						</Typography>
						<CardMedia
							component='img'
							src={addIcon}
							onClick={() => console.log('ordenando platos...')}
						/>
					</CardActions>
				</Stack>
			</CardContent>
		</Card>
	)
}

export default ProductPage
