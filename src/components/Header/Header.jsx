import { AppBar, Toolbar } from '@mui/material'
import { Link } from 'react-router-dom'

const Header = () => {
	return (
		<>
			<AppBar
				position='fixed'
				sx={{ backgroundColor: 'custom.dark', top: '0', left: '0', zIndex: 2 }}>
				<Toolbar>
					<Link
						to='/'
						style={{
							color: 'white',
							textDecoration: 'none',
							fontSize: '1.5rem',
						}}>
						Bajón App
					</Link>
				</Toolbar>
			</AppBar>
		</>
	)
}

export default Header
