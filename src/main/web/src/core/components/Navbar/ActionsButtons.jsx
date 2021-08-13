import React from 'react'
import {Flex, HStack} from '@chakra-ui/react'

const ActionsButtons = ({children}) => {
  return (
    <Flex h={16} alignItems="center" justifyContent="flex-end">
      <HStack spacing={8} alignItems="center">
        <HStack spacing={4}>{children}</HStack>
      </HStack>
    </Flex>
  )
}

export default ActionsButtons
