import { AppBar, Box, Container, IconButton, Toolbar } from '@mui/material'
import HomeIcon from '../../assets/icons/home-icon.svg'
import ShoppingCartIcon from '../../assets/icons/shoppingCart-icon.svg'
import NotificationIcon from '../../assets/icons/notification-icon.svg'
import ProfileIcon from '../../assets/icons/profile-icon.svg'

const NavBar = () => {
	return (
		<>
			<AppBar
				position='fixed'
				sx={{
					top: 'auto',
					bottom: 0,
					left: 'auto',
					right: 'auto',
					backgroundColor: 'custom.dark',
					maxWidth: '35rem',
				}}>
				<Toolbar sx={{ display: 'flex', justifyContent: 'space-around' }}>
					<IconButton>
						<img src={HomeIcon} />
					</IconButton>
					<IconButton>
						<img src={ShoppingCartIcon} />
					</IconButton>
					<IconButton>
						<img src={NotificationIcon} />
					</IconButton>
					<IconButton>
						<img src={ProfileIcon} />
					</IconButton>
				</Toolbar>
			</AppBar>
		</>
	)
}

export default NavBar
