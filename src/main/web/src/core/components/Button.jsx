import React from 'react'
import {Button as ChakraButton, ButtonGroup} from '@chakra-ui/react'

const Button = ({children, ...props}) => {
  const disabledBgDefault = {bg: null}

  const {
    _hover = disabledBgDefault,
    _focus = disabledBgDefault,
    _active = disabledBgDefault,
  } = props

  return (
    <ChakraButton {...props} _hover={_hover} _focus={_focus} _active={_active}>
      {children}
    </ChakraButton>
  )
}

Button.Group = ButtonGroup

export default Button
