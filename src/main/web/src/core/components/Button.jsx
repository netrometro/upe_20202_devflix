import React from 'react'
import {Button as ChakraButton, ButtonGroup} from '@chakra-ui/react'
import {Constants} from 'core/utils'

const Button = ({children, ...props}) => {
  const {disabledDefaultBg} = Constants

  const {
    _hover = disabledDefaultBg,
    _focus = disabledDefaultBg,
    _active = disabledDefaultBg,
  } = props

  return (
    <ChakraButton {...props} _hover={_hover} _focus={_focus} _active={_active}>
      {children}
    </ChakraButton>
  )
}

Button.Group = ButtonGroup

export default Button
