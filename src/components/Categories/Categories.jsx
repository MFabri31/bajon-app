import styled from '@emotion/styled'
import { Box, Stack, Typography } from '@mui/material'
import burgerIcon from '../../assets/icons/hamburguer-icon.svg'
import iceCreamIcon from '../../assets/icons/iceCream-icon.svg'
import hotdogIcon from '../../assets/icons/hotDog-icon.svg'
import pizzaIcon from '../../assets/icons/pizza-icon.svg'
import drinkIcon from '../../assets/icons/drink-icon.svg'
import { useAppContext } from '../../context/AppContext'

const Categories = () => {
	const IconCategorie = styled('img')()

	const { handleGetProduct } = useAppContext()

	return (
		<>
			<Stack
				direction='row'
				justifyContent='space-between'
				flexWrap='wrap'
				color='white'
				mt='3rem'>
				<Box onClick={handleGetProduct}>
					<IconCategorie src={pizzaIcon} />
					<Typography>Pizzas</Typography>
				</Box>
				<Box onClick={handleGetProduct}>
					<IconCategorie src={drinkIcon} />
					<Typography>Bebidas</Typography>
				</Box>
				<Box onClick={handleGetProduct}>
					<IconCategorie src={burgerIcon} />
					<Typography
						width='80px'
						textOverflow='ellipsis'
						overflow='hidden'
						whiteSpace='nowrap'>
						Hamburguesas
					</Typography>
				</Box>
				<Box onClick={handleGetProduct}>
					<IconCategorie src={hotdogIcon} />
					<Typography>Panchos</Typography>
				</Box>
				<Box onClick={handleGetProduct}>
					<IconCategorie src={iceCreamIcon} />
					<Typography>Helados</Typography>
				</Box>
			</Stack>
		</>
	)
}

export default Categories
