import {Box} from '@chakra-ui/react'
import React from 'react'
import Text from '../Text'
import {useTheme} from 'core/hooks'

const Title = ({text, color}) => {
  const {colors} = useTheme()
  return (
    <Box display="flex" pl={35} flexDirection="row">
      <Box width={4} bg={color} mr={4} />
      <Text color={colors.secondary} fontSize={40} fontWeight={700}>
        {text}
      </Text>
    </Box>
  )
}

export default Title
