import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material'
import HomeIcon from '../../assets/icons/home-icon.svg'
import ShoppingCartIcon from '../../assets/icons/shoppingCart-icon.svg'
import NotificationIcon from '../../assets/icons/notification-icon.svg'
import ProfileIcon from '../../assets/icons/profile-icon.svg'
import { Link } from 'react-router-dom'
import { useAppContext } from '../../context/AppContext'

const NavBar = () => {
	const { cart } = useAppContext()

	return (
		<>
			<Box padding='1rem 0'>
				<AppBar
					position='fixed'
					sx={{
						top: 'auto',
						bottom: 0,
						backgroundColor: 'custom.dark',
					}}>
					<Toolbar sx={{ display: 'flex', justifyContent: 'space-around' }}>
						<IconButton>
							<Link to='/'>
								<img src={HomeIcon} />
							</Link>
						</IconButton>
						<IconButton>
							<Link to='/orden'>
								<img src={ShoppingCartIcon} />
							</Link>
							<Typography color='white' ml='1em'>
								{cart.length}
							</Typography>
						</IconButton>
						<IconButton>
							<img src={NotificationIcon} />
						</IconButton>
						<IconButton>
							<Link to='/login'>
								<img src={ProfileIcon} />
							</Link>
						</IconButton>
					</Toolbar>
				</AppBar>
			</Box>
		</>
	)
}

export default NavBar
