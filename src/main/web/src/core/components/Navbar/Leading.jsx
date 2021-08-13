import React from 'react'
import {Flex} from '@chakra-ui/react'

const Leading = ({children}) => {
  return (
    <Flex alignItems="center" justifyContent="flex-start">
      {children}
    </Flex>
  )
}

export default Leading
