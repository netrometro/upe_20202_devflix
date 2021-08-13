import React from 'react'
import {
  Input as ChakraInput,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react'

import {useTheme} from 'core/hooks'

const TextInput = (props) => {
  const {colors} = useTheme()

  return (
    <ChakraInput
      {...{
        variant: 'unstyled',
        color: 'secondary',
        focusBorderColor: 'primary',
        _placeholder: {color: colors.secondary},
      }}
      {...props}
    />
  )
}

TextInput.Group = InputGroup
TextInput.LeftElement = InputLeftElement

export default TextInput
