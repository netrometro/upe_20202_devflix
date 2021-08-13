import {MenuList as ChakraMenuList} from '@chakra-ui/react'
import React from 'react'

const MenuList = (props) => {
  return <ChakraMenuList bg="background" borderWidth={0} {...props} />
}

export default MenuList
