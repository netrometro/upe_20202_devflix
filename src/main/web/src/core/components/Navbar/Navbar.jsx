import React, {useState} from 'react'
import {Box} from '@chakra-ui/react'

import DefaultNavbar from './DefaultNavbar'
import SearchBar from './SearchBar'
import BackBar from './BackBar'

const Navbar = () => {
  const [isDefaultNavbar, setIsDefaultNavbar] = useState(true)

  const onClickSwitchNavbar = () =>
    setIsDefaultNavbar((prevNavbar) => !prevNavbar)

  const ActualNavbar = isDefaultNavbar ? DefaultNavbar : SearchBar

  return (
    <Box bg="black" px={4}>
      <ActualNavbar onClickSwitchNavbar={onClickSwitchNavbar} />
    </Box>
  )
}

Navbar.BackBar = BackBar
export default Navbar
