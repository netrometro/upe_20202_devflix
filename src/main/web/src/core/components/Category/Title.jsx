import {Box, Flex, HStack, useDisclosure} from '@chakra-ui/react'
import React from 'react'
import Text from '../Text'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import {ModalEditCategory} from 'core/modals'

const Title = ({text, color, deleteIcon, editIcon}) => {
  const { isOpen: isEditCategoryOpen , onOpen: onEditCategoryOpen, onClose: onEditCategoryClose } = useDisclosure()
  return (
    <Flex pl={35} flexDirection="row">
      <Box width={4} bg={color} mr={4} />
      <Text color="secondary" fontSize={40} fontWeight={700}>
        {text}
      </Text>
      <HStack>
        <Box mt="1" ml="3">
          {deleteIcon && <DeleteIcon style={{ color: "#BDBDBD", marginRight: "3", fontSize: "38px"}}></DeleteIcon>}
          <ModalEditCategory isOpen={isEditCategoryOpen} onClose={onEditCategoryClose}></ModalEditCategory>
          {editIcon && <EditIcon onClick={onEditCategoryOpen} style={{ color: "#BDBDBD", marginLeft: "3", fontSize: "38px"}}></EditIcon>}
        </Box>
      </HStack>
    </Flex>
  )
}

export default Title
