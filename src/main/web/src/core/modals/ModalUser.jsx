import React from 'react'
import {
  Button,
  Text,
  Input,
  HStack,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react'
import {Modal} from 'core/components'
import PersonIcon from '@material-ui/icons/Person'
import EmailIcon from '@material-ui/icons/Email'
import EditIcon from '@material-ui/icons/Edit'
import { useUser } from 'core/hooks'

const ModalUser = ({...props}) => {
  const [{ name: userName, email: userEmail }] = useUser()
  console.log(userName)

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
            placeholder={userName}
          />
          <InputRightElement>
            <EditIcon
              style={{color: '#BDBDBD', marginLeft: '3', fontSize: '38px'}}
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
            placeholder={userEmail}
          />
          <InputRightElement>
            <EditIcon
              style={{color: '#BDBDBD', marginLeft: '3', fontSize: '38px'}}
            />
          </InputRightElement>
        </InputGroup>
      </HStack>
      <HStack mt="5%" spacing="5%">
        <Button size="lg">Confirmar</Button>
      </HStack>
    </Modal>
  )
}

export default ModalUser
