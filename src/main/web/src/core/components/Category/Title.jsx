import {Box, Flex, HStack, useDisclosure, IconButton, AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogBody, AlertDialogFooter, Button} from '@chakra-ui/react'
import React, {useEffect} from 'react'
import Text from '../Text'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import {ModalEditCategory} from 'core/modals'
import usePostRequest from '../../hooks/usePostRequest'
import { useRouter } from "next/router";

const Title = ({text, color, canUseDeleteOrEdit, id}) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const onClose = () => setIsOpen(false)
  const cancelRef = React.useRef()

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
              onClick={() => setIsOpen(true)}
              />}
            />}
              <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
                <AlertDialogOverlay>
                  <AlertDialogContent>
                    <AlertDialogHeader fontSize="lg" fontWeight="bold">
                    Deletar Categoria
                    </AlertDialogHeader>

                    <AlertDialogBody>
                      Você realmente deseja deletar esta categoria?
                    </AlertDialogBody>

                    <AlertDialogFooter>
                      <Button ref={cancelRef} onClick={onClose}>
                        Cancelar
                      </Button>
                      <Button colorScheme="red" onClick={onClickDeleteCategory} ml={3}>
                        Deletar
                      </Button>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
          <ModalEditCategory id={id} isOpen={isEditCategoryOpen} onClose={onEditCategoryClose}></ModalEditCategory>
          {canUseDeleteOrEdit && 
            <IconButton
              
              _hover="background"
              bg="background"
              icon={<EditIcon style={{ color: "#BDBDBD", marginLeft: "10", fontSize: "38px"}}/>}
              onClick={onEditCategoryOpen}
            />}
        </Box>
      </HStack>
    </Flex>
  )
}

export default Title
