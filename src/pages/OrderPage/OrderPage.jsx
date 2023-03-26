import {
	Button,
	CardActions,
	Stack,
	Box,
	Card,
	CardContent,
	CardMedia,
	Typography,
	Divider,
} from '@mui/material'
import plusIcon from '../../assets/icons/plus-icon.svg'
import minusIcon from '../../assets/icons/minus-icon.svg'

const OrderPage = () => {
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
			<Card
				sx={{
					display: 'flex',
					justifyContent: 'space-around',
					padding: '0.5em',
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
							Plato x
						</Typography>
						<Typography variant='h6' color='custom.purple' fontWeight='600'>
							$25
						</Typography>
						<Typography color='custom.dark' fontWeight='600'>
							Cantidad
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
					</CardContent>
				</Box>
			</Card>
			<Card
				sx={{
					display: 'flex',
					justifyContent: 'space-around',
					padding: '0.5em',
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
							Plato x
						</Typography>
						<Typography variant='h6' color='custom.purple' fontWeight='600'>
							$25
						</Typography>
						<Typography color='custom.dark' fontWeight='600'>
							Cantidad
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
					</CardContent>
				</Box>
			</Card>
			<Card
				sx={{
					display: 'flex',
					justifyContent: 'space-around',
					padding: '0.5em',
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
							Plato x
						</Typography>
						<Typography variant='h6' color='custom.purple' fontWeight='600'>
							$25
						</Typography>
						<Typography color='custom.dark' fontWeight='600'>
							Cantidad
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
					</CardContent>
				</Box>
			</Card>

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
						$25
					</Typography>
				</Typography>
				<Button variant='contained' sx={{ backgroundColor: 'custom.skyBlue' }}>
					Confirmar
				</Button>
			</Stack>
		</>
	)
}

export default OrderPage
