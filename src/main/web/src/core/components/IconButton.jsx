import React from 'react'
import {IconButton as ChakraIconButton} from '@chakra-ui/react'
import {Constants} from 'core/utils'

const IconButton = (props) => {
  const {disabledDefaultBg} = Constants

  const {
    _hover = disabledDefaultBg,
    _focus = disabledDefaultBg,
    _active = disabledDefaultBg,
  } = props

  return (
    <ChakraIconButton
      _hover={_hover}
      _focus={_focus}
      _active={_active}
      {...props}
    />
  )
}

export default IconButton
