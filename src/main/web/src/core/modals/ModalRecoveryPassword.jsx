import {React, useState} from 'react';
import {Button, Modal} from 'core/components';
import {Center, VStack, Text, Box, Image, useDisclosure} from '@chakra-ui/react';
import {EmailIcon, LockIcon} from '@chakra-ui/icons';
import {VpnKey} from '@material-ui/icons';
import FormField from 'core/components/Form/FormField';

const ModalRecoveryPassword = ({...props}) => {

  const [recoveryCode, setRecoveryCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [isDisabled, setIsDisabled] = useState(true);

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
  
  const changePassword = (code, password) => {
    //Implementar lógica de mudar a senha.
    //password é a nova senha escolhida pelo usuário,
    //code é o código usado na API para redefinir a senha.
  }

  const onClickChangePassword = () => {
    if (newPassword != confirmPassword){
      return; 
    }
    changePassword(recoveryCode, newPassword);
  }

  const onChangeNewPassword = (value) => {
    setNewPassword(value);
    setIsDisabled(value != confirmPassword);
  }

  const onChangeConfirmPassword = (value) => {
    setConfirmPassword();
    setIsDisabled(newPassword != value);
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
            icon={<LockIcon/>}
            text="Nova senha"
            onChange={event => onChangeNewPassword(event.target.value)}
            value={newPassword}>
          </FormField>

          <FormField
            type="psw"
            icon={<LockIcon/>}
            text="Repita a nova senha"
            onChange={event => onChangeConfirmPassword(event.target.value)}
            value={confirmPassword}>
          </FormField>

          <Button 
            disabled={isDisabled} 
            size="lg" 
            onClick={onClickChangePassword}>
            Confirmar
          </Button>

        </VStack>
      </Center>
      
    </Modal>
  );
}
 
export default ModalRecoveryPassword;