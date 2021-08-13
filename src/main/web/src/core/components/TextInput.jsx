import React from 'react'
import {Input as ChakraInput} from '@chakra-ui/react'

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

export default TextInput
