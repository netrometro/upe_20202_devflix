import {Box, Flex, HStack, useDisclosure, IconButton} from '@chakra-ui/react'
import React, {useEffect} from 'react'
import Text from '../Text'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import {ModalEditCategory} from 'core/modals'
import usePostRequest from '../../hooks/usePostRequest'
import { useRouter } from "next/router";

const Title = ({text, color, canUseDeleteOrEdit, id}) => {
  const {isOpen: isEditCategoryOpen , onOpen: onEditCategoryOpen, onClose: onEditCategoryClose } = useDisclosure()

  const {mutate: deleteCategory, data: response, isSuccess} = usePostRequest(`/v1/category/${id}/delete`);
  const router = useRouter();

  const onClickDeleteCategory = () => deleteCategory();

  useEffect(() => {
    if (isSuccess && response) {
      return router.reload()
    }
  }, [isSuccess, response, router])

  return (
    <Flex pl={35} flexDirection="row">
      <Box width={4} bg={"#" + color} mr={4} />
      <Text color="secondary" fontSize={40} fontWeight={700}>
        {text}
      </Text>
      <HStack>
        <Box mt="1" ml="3">
          {canUseDeleteOrEdit && 
            <IconButton
              _hover="background"
              bg="background"
              icon={<DeleteIcon style={{ color: "#BDBDBD", marginLeft: "3", fontSize: "38px"}}
              onClick={onClickDeleteCategory}/>}
            />}
          <ModalEditCategory id={id} isOpen={isEditCategoryOpen} onClose={onEditCategoryClose}></ModalEditCategory>
          {canUseDeleteOrEdit && 
            <IconButton
              
              _hover="background"
              bg="background"
              icon={<EditIcon style={{ color: "#BDBDBD", marginLeft: "3", fontSize: "38px"}}/>}
              onClick={onEditCategoryOpen}
            />}
        </Box>
      </HStack>
    </Flex>
  )
}

export default Title
