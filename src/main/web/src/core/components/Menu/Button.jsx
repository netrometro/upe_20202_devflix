import React from 'react'
import {Constants} from 'core/utils'
import {MenuButton as ChakraMenuButton} from '@chakra-ui/react'

const MenuButton = (props) => {
  const {disabledDefaultBg} = Constants

  const {
    _hover = disabledDefaultBg,
    _focus = disabledDefaultBg,
    _active = disabledDefaultBg,
    borderWidth = 0,
  } = props

  return (
    <ChakraMenuButton
      _hover={_hover}
      _focus={_focus}
      _active={_active}
      borderWidth={borderWidth}
      {...props}
    />
  )
}

export default MenuButton
