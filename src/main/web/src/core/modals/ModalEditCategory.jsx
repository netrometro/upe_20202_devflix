import React, {useState, useEffect} from 'react'
import {Button, Text, Input, HStack,} from "@chakra-ui/react"
import {Modal, Select} from "core/components"
import {useForm} from 'core/hooks'
import usePutRequest from 'core/hooks/usePutRequest'
import { useRouter } from "next/router";
import Alert from 'core/components/Alert'

const INITIAL_STATE = {
  title: '',
  color: '',
}

const OPTIONS_VISIBILITY = [
  {label: 'Público', value: 1},
  {label: 'Privado', value: 2},
]

const ModalEditCategory = ({id, ...props}) => {

  const [{fields}, {getFieldProperties}] = useForm(INITIAL_STATE)
  const {title, color} = fields

  const [visibility, setVisibility] = useState('')
  const {mutate: editCategory, data: response, isSuccess, isError} = usePutRequest(`/v1/category/${id}`);
  const [isShowingAlert] = useState(true)
  const router = useRouter();

  const onEditCategoryClick = () => {
    editCategory({title, color, visibility})
  }

  useEffect(() => {
    if (isSuccess && response) {
      return router.reload()
    }
  }, [isSuccess, response, router])

  const header = ({title, ...props}) => {
    return(
      <Text {...props} color="whiteLight" fontSize="32px">{title}</Text>
    )
  }

  const renderAlert = () => {
    const error = {
      status: 'error',
      body: 'Eita! Ocorreu um erro ao editar sua categoria. Verifique o preenchimento dos campos.',
    }
    const success = {
      status: 'success',
      body: 'Categoria editada com sucesso!',
    }
    const buildMessage = () => {
      return isError ? error : success
    }
    const {status, body} = buildMessage()
    const isRequesting = isError || isSuccess
    return (
      isRequesting && isShowingAlert && <Alert status={status} message={body} />
    )
  }

  return(
    <Modal 
      header={header({title : "Editar Categoria"})}
      scrollBehavior="inside" 
      {...props}
      >
      <Input minLength="5" maxLength="25" w="65%" ml="5px" mt="10px" variant="flushed" color="whiteLight" _placeholder={{ color: 'whiteLight' }} borderColor="primary" focusBorderColor="primary" placeholder="Título" 
      {...getFieldProperties('title')}/>
      <Input minLength="6" maxLength="6" w="65%" ml="5px" mt="10px" variant="flushed" color="whiteLight" _placeholder={{ color: 'whiteLight' }} borderColor="primary" focusBorderColor="primary" placeholder="Cor" 
      {...getFieldProperties('color')}/>
      <Select w="65%" ml="5px" mt="10px" variant="flushed" color="whiteLight" _placeholder={{ color: 'whiteLight' }} borderColor="primary" focusBorderColor="primary" placeholder="Selecione a Visibilidade" 
      items={OPTIONS_VISIBILITY} 
      onChange={(event) => setVisibility(event.target.value)}/>
        
      <HStack
      mt="5%"
      spacing="5%"> 
        <Button
          size="lg"
          mb="3"
          onClick={onEditCategoryClick}
          >
            Editar
        </Button>
      </HStack>
      {renderAlert()}
    </Modal>
  )
  
}

export default ModalEditCategory