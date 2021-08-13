import {Box, Flex} from '@chakra-ui/react'
import React from 'react'
import Text from '../Text'

const Title = ({text, color}) => {
  return (
    <Flex pl={35} flexDirection="row">
      <Box width={4} bg={color} mr={4} />
      <Text color="secondary" fontSize={40} fontWeight={700}>
        {text}
      </Text>
    </Flex>
  )
}

export default Title
