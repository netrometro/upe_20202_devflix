import React, {useState} from 'react'
import {Box} from '@chakra-ui/react'

import DefaultNavbar from './DefaultNavbar'
import SearchBar from './SearchBar'
import BackBar from './BackBar'

const Navbar = () => {
  const [defaultNavbar, setDefaultNavbar] = useState("default")

  const onClickSwitchNavbar = (type) =>
    setDefaultNavbar(type)

  const ActualNavbar = { 
    "default": DefaultNavbar,
    "search": SearchBar,
    "back": BackBar
  }[defaultNavbar]

  return (
    <Box bg="black" px={4}>
      <ActualNavbar onClickSwitchNavbar={onClickSwitchNavbar} />
    </Box>
  )
}
export default Navbar
