import styled from '@emotion/styled'
import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import burgerIcon from '../../assets/icons/hamburguer-icon.svg'
import iceCreamIcon from '../../assets/icons/iceCream-icon.svg'
import hotdogIcon from '../../assets/icons/hotDog-icon.svg'
import pizzaIcon from '../../assets/icons/pizza-icon.svg'
import drinkIcon from '../../assets/icons/drink-icon.svg'

const Categories = () => {
	const IconCategorie = styled('img')()

	const getProduct = e => console.log(e.currentTarget.textContent)

	return (
		<>
			<Stack
				direction='row'
				justifyContent='space-between'
				flexWrap='wrap'
				mt='3rem'>
				<Box onClick={getProduct}>
					<IconCategorie src={pizzaIcon} />
					<Typography>Pizzas</Typography>
				</Box>
				<Box onClick={getProduct}>
					<IconCategorie src={drinkIcon} />
					<Typography>Bebidas</Typography>
				</Box>
				<Box onClick={getProduct}>
					<IconCategorie src={burgerIcon} />
					<Typography
						width='80px'
						textOverflow='ellipsis'
						overflow='hidden'
						whiteSpace='nowrap'>
						Hamburguesas
					</Typography>
				</Box>
				<Box onClick={getProduct}>
					<IconCategorie src={hotdogIcon} />
					<Typography>Panchos</Typography>
				</Box>
				<Box onClick={getProduct}>
					<IconCategorie src={iceCreamIcon} />
					<Typography>Helados</Typography>
				</Box>
			</Stack>
		</>
	)
}

export default Categories
