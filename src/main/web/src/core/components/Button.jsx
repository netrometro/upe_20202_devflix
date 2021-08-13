import React from 'react'
import {Button as ChakraButton} from '@chakra-ui/react'

const Button = ({children, ...props}) => {
  return <ChakraButton {...props}>{children}</ChakraButton>
}

export default Button
