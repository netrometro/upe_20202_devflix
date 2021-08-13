import React from 'react'
import {MenuButton as ChakraMenuButton} from '@chakra-ui/react'

import {Constants} from 'core/utils'

const MenuButton = (props) => {
  const {disabledDefaultBg} = Constants

  return (
    <ChakraMenuButton
      {...{
        _hover: disabledDefaultBg,
        _focus: disabledDefaultBg,
        _active: disabledDefaultBg,
        borderWidth: 0,
      }}
      {...props}
    />
  )
}

export default MenuButton
