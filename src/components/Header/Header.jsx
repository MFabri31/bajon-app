import { AppBar, Toolbar } from '@mui/material'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/logo.png'

const Header = () => {
	return (
		<AppBar
			position='fixed'
			sx={{
				display: 'flex',
				justifyContent: 'space-around',
				backgroundColor: 'custom.dark',
				zIndex: 2,
			}}>
			<Toolbar
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					paddingLeft: 8,
					paddingRight: 8,
				}}>
				<img src={Logo} alt='Logo' style={{ height: '60px' }} />
				<Link
					to='/'
					style={{
						color: 'white',
						textDecoration: 'none',
						fontSize: '1.5rem',
						fontFamily: 'Poppins',
					}}>
					Bajón App
				</Link>
			</Toolbar>
		</AppBar>
	)
}

export default Header
