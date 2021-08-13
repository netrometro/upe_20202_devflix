import React from 'react'
import {Text as ChakraText} from '@chakra-ui/react'

const Text = ({children, ...props}) => {
  return <ChakraText {...props}>{children}</ChakraText>
}

export default Text
