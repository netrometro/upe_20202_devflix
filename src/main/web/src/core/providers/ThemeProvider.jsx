import React from 'react'
import {ChakraProvider} from '@chakra-ui/react'
import {Theme} from '../theme'

const ThemeProvider = ({children}) => {
  return <ChakraProvider theme={Theme}>{children}</ChakraProvider>
}

export default ThemeProvider
