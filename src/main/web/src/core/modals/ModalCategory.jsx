import {React, useState} from 'react'
import {Button, Text, Input, HStack, useDisclosure} from "@chakra-ui/react"
import {Modal, Select} from "core/components"
import {ModalMyCategories} from 'core/modals'
import { addCategory } from 'core/api/categories'
import { useForm, usePostRequest } from 'core/hooks'
import Alert from 'core/components/Alert'

const INITIAL_STATE = {
  title: "",
  color: ""
}

const OPTIONS_VISIBILITY = [
  { label: "Público", value: 1 },
  { label: "Privado", value: 2 },
];

const ModalCategory = ({...props}) => {
  const { isOpen: isMyCategoriesOpen , onOpen: onMyCategoriesOpen, onClose: onMyCategoriesClose } = useDisclosure()
  const [{fields}, {updateField, getFieldProperties, cleanUp}] = useForm(INITIAL_STATE);
  const {title, color} = fields;
  const {mutate: createCategory, data: response, isLoading, isError, isSuccess} = usePostRequest("/v1/category");

  const header = ({title, ...props}) => {
    return(
      <Text {...props} color="whiteLight" fontSize="32px">{title}</Text>
    )
  }

  const renderAlert = () => {
    const error = {
      status: 'error',
      body: 'Eita! Ocorreu um erro ao criar sua categoria.',
    }
    const success = {
      status: 'success',
      body: 'Categoria criada com sucesso!',
    }
    const buildMessage = () => {
      return isError ? error : success
    }
    const {status, body} = buildMessage()
    return (isError || isSuccess) && <Alert status={status} message={body} />
  }

  const [visibility, setVisibility] = useState('');

  const onRegisterClick = () => {
    createCategory({title, color, visibility})
  }

  console.log(response?.data)

  return(
    <Modal 
      header={header({title : "Cadastro de Categoria"})}
      scrollBehavior="inside" 
      {...props}
      >
      <Input w="65%" ml="5px" mt="10px" variant="flushed" color="whiteLight" _placeholder={{ color: 'whiteLight' }} borderColor="primary" focusBorderColor="primary" placeholder="Título" {...getFieldProperties("title")}/>
      <Input w="65%" ml="5px" mt="10px" variant="flushed" color="whiteLight" _placeholder={{ color: 'whiteLight' }} borderColor="primary" focusBorderColor="primary" placeholder="Cor" {...getFieldProperties("color")}/>
      <Select w="65%" ml="5px" mt="10px" variant="flushed" color="whiteLight" _placeholder={{ color: 'whiteLight' }} borderColor="primary" focusBorderColor="primary" placeholder="Selecione a Visibilidade" items={OPTIONS_VISIBILITY}
      onChange={(event) => setVisibility(event.target.value)}/>
      {renderAlert()}
      <HStack
      mt="5%"
      spacing="5%"> 
        <Button
          size="lg"
          onClick = {onRegisterClick}
          isLoading = {isLoading}
          >
            Cadastrar
        </Button>
        <ModalMyCategories isOpen={isMyCategoriesOpen} onClose={onMyCategoriesClose}></ModalMyCategories>
        <Button
          onClick={onMyCategoriesOpen}
          _hover={{ bg: "#EC00254F" }}
          color="primary"
          borderColor="primary"
          variant="outline"
          size="lg">
          Minhas Categorias
        </Button>
      </HStack>
      
    </Modal>
  )
}

export default ModalCategory