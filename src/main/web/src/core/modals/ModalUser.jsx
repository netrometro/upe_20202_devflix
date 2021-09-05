import React, {useState} from 'react'
import {
  Button,
  Text,
  Input,
  HStack,
  InputGroup,
  InputRightElement,
  IconButton,
  VStack
} from '@chakra-ui/react'
import {Modal} from 'core/components'
import PersonIcon from '@material-ui/icons/Person'
import EmailIcon from '@material-ui/icons/Email'
import EditIcon from '@material-ui/icons/Edit'
import { useUser } from 'core/hooks'
import usePutRequest from 'core/hooks/usePutRequest'
import Alert from 'core/components/Alert'


const ModalUser = ({...props}) => {
  const [{ name: userName, email: userEmail, id: userId }] = useUser()

  const [actualUserName, setActualUserName] = useState(userName)
  const [actualUserEmail, setActualUserEmail] = useState(userEmail)

  const [isEditUserNameAvailable, setIsEditUserNameAvailable] = useState(true)
  const [isEditUserEmailAvailable, setIsEditUserEmailAvailable] = useState(true)

  const {
    mutate: editUser,
    isLoading,
    isSuccess,
    isError,
  } = usePutRequest(`/v1/user/${userId}`);

  const onClickCreateUser = () => {
    editUser({
      name: actualUserName,
      email: actualUserEmail
    });
  };

  const renderAlert = () => {
    const error = {
      status: 'error',
      body: 'Eita! Ocorreu um erro ao tentar editar suas informações. Por favor, tente novamente!',
    }
    const success = {
      status: 'success',
      body: 'Alteração realizada com sucesso!',
    }
    const buildMessage = () => {
      return isError ? error : success
    }

    const {status, body} = buildMessage()
    return (isError || isSuccess) && <Alert status={status} message={body} />
  }

  const header = ({title, ...props}) => {
    return (
      <Text {...props} color="whiteLight" fontSize="32px">
        {title}
      </Text>
    )
  }

  return (
    <Modal
      header={header({title: 'Meu Perfil'})}
      scrollBehavior="inside"
      {...props}>
      <HStack mb="5%">
        <PersonIcon
          fontSize="large"
          style={{color: '#EC0025', width: '50px', height: '50px'}}
        />
        <InputGroup w="65%" size="lg">
          <Input
            ml="5px"
            mt="10px"
            variant="flushed"
            color="whiteLight"
            _placeholder={{color: 'whiteLight'}}
            borderColor="primary"
            focusBorderColor="primary"
            onChange={(event) => setActualUserName(event.target.value)}
            value={actualUserName??userName}
            isDisabled={isEditUserNameAvailable}
          />
          <InputRightElement>
            <IconButton
            backgroundColor="background"
            onClick={() => setIsEditUserNameAvailable(false)}
            icon={<EditIcon style={{color: '#BDBDBD', marginLeft: '3', fontSize: '38px'}}/>}
            />
          </InputRightElement>
        </InputGroup>
      </HStack>
      <HStack>
        <EmailIcon
          fontSize="large"
          style={{color: '#EC0025', width: '50px', height: '50px'}}
        />
        <InputGroup w="65%" size="lg">
          <Input
            ml="5px"
            mt="10px"
            variant="flushed"
            color="whiteLight"
            _placeholder={{color: 'whiteLight'}}
            borderColor="primary"
            focusBorderColor="primary"
            onChange={(event) => setActualUserEmail(event.target.value)}
            value={actualUserEmail??userEmail}
            isDisabled={isEditUserEmailAvailable}
          />
          <InputRightElement>
            <IconButton
            backgroundColor="background"
            onClick={() => setIsEditUserEmailAvailable(false)}
            icon={<EditIcon style={{color: '#BDBDBD', marginLeft: '3', fontSize: '38px'}}/>}
            />
            
          </InputRightElement>
        </InputGroup>
      </HStack>
      <VStack maxWidth="600px" py="4">
        {renderAlert()}
      </VStack>
      <HStack spacing="5%">
        <Button size="lg" onClick={onClickCreateUser} isLoading={isLoading}>Confirmar</Button>
      </HStack>
    </Modal>
  )
}

export default ModalUser
