import {
	Button,
	CardActions,
	Stack,
	Box,
	Card,
	CardContent,
	CardMedia,
	Typography,
} from '@mui/material'
import plusIcon from '../../assets/icons/plus-icon.svg'
import minusIcon from '../../assets/icons/minus-icon.svg'
import { useAppContext } from '../../context/AppContext'
import IconTrash from '../../assets/icons/icon-trash.svg'

const OrderPage = () => {
	const { cart, removeProductToCart } = useAppContext()

	return (
		<>
			<Box mb='1rem' color='white'>
				<Typography fontWeight='600' fontSize='1.5rem'>
					Nombre de usuario:
				</Typography>
				<Typography variant='p' fontSize='1.5rem'>
					Mesa:
				</Typography>
			</Box>

			{cart.map(product => (
				<Card
					sx={{
						display: 'flex',
						justifyContent: 'space-around',
						paddingY: '1em',
						marginBottom: '3rem',
						borderRadius: '8px',
					}}>
					<CardMedia
						component='img'
						sx={{ width: 250, borderRadius: '8px' }}
						image='https://images.unsplash.com/photo-1513185158878-8d8c2a2a3da3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
						alt=''
					/>
					<Box>
						<CardContent sx={{ flex: '1 0 auto', textAlign: 'center' }}>
							<Typography variant='h5' color='text.secondary'>
								${product.name_product}
							</Typography>
							<Typography variant='h6' color='custom.purple' fontWeight='600'>
								${product.price}
							</Typography>
							<Typography color='custom.dark' fontWeight='600'>
								Cantidad
							</Typography>
							<CardActions>
								<Stack direction='row' justifyContent='space-between}}}'>
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
						</CardContent>
						<img
							src={IconTrash}
							alt='icon trash'
							style={{ width: '1.5rem', position: 'relative', left: '4rem' }}
							onClick={() => removeProductToCart(product.id)}
						/>
					</Box>
				</Card>
			))}

			<Stack
				direction='row'
				alignItems='center'
				justifyContent='space-between'
				my='3rem'>
				<Typography color='custom.white' fontWeight='600' fontSize='1.5rem'>
					Total:
					<Typography
						component='span'
						color='custom.green'
						fontSize='inherit'
						marginX='1rem'>
						$
					</Typography>
				</Typography>
			</Stack>
		</>
	)
}

export default OrderPage
