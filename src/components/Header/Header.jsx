import { AppBar, Toolbar } from '@mui/material'
import { Link } from 'react-router-dom'

const Header = () => {
	return (
		<>
			<AppBar position='static' sx={{ backgroundColor: 'custom.dark' }}>
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
