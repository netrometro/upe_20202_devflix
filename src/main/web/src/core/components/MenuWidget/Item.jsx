import {MenuItem as ChakraMenuItem} from '@chakra-ui/react'
import React from 'react'
import {Constants} from 'core/utils'

const MenuItem = ({...props}) => {
  const {disabledDefaultBg} = Constants

  const {
    _hover = disabledDefaultBg,
    _focus = disabledDefaultBg,
    _active = disabledDefaultBg,
  } = props

  return (
    <ChakraMenuItem
      color="secondary"
      _hover={_hover}
      _focus={_focus}
      _active={_active}
      {...props}
    />
  )
}

export default MenuItem
