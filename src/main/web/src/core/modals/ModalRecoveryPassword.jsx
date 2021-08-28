import {React, useState} from 'react';
import {Button, Modal} from 'core/components';
import {Center, VStack, Text, Box, Image, useDisclosure} from '@chakra-ui/react';
import {EmailIcon, LockIcon} from '@chakra-ui/icons';
import FormField from 'core/components/Form/FormField';
import { VpnKey } from '@material-ui/icons';

const ModalRecoveryPassword = ({...props}) => {

  const [recoveryCode, setRecoveryCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const header = () => {
    return (
      <Center>
        <VStack mt="1rem">
          <Center>
            <Image src="https://i.imgur.com/J1ymksl.png" alt="Devflix" />
          </Center>
          <Text color="whiteLight" fontSize="32px">Confirmar nova senha</Text>
        </VStack>
      </Center>
    );
  }

  const onChangePassword = () => {
    if (newPassword != confirmPassword){
      
    }
    //Implementar lógica de mudar a senha.
  }

  const changePassword = (desiredPassword) => {

  }

  return ( 
    <Modal 
      size="2xl"
      header={header()}
      scrollBehavior="inside" 
      {...props}>

      <Center>
        <VStack w="100%"
          ml="5px"
          mt="10px">

          <FormField
            type="text"
            icon={<VpnKey/>}
            text="Código de recuperação"
            onChange={event => setRecoveryCode(event.target.value)}
            value={recoveryCode}>
          </FormField>

          <FormField
            type="psw"
            icon={<LockIcon />}
            text="Nova senha"
            onChange={event => setNewPassword(event.target.value)}
            value={newPassword}>
          </FormField>

          <FormField
            type="psw"
            icon={<LockIcon />}
            text="Repita a nova senha"
            onChange={event => setConfirmPassword(event.target.value)}
            value={confirmPassword}>
          </FormField>

          <Button size="lg" onClick={onChangePassword}>
            Confirmar
          </Button>

        </VStack>
      </Center>
      
    </Modal>
  );
}
 
export default ModalRecoveryPassword;