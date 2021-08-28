import {Box, Flex} from '@chakra-ui/react'
import React from 'react'
import Text from '../Text'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const Title = ({text, color, deleteIcon, editIcon}) => {
  return (
    <Flex pl={35} flexDirection="row">
      <Box width={4} bg={color} mr={4} />
      <Text color="secondary" fontSize={40} fontWeight={700}>
        {text}
      </Text>
      {deleteIcon && <DeleteIcon></DeleteIcon>}
      {editIcon && <EditIcon></EditIcon>}
    </Flex>
  )
}

export default Title
