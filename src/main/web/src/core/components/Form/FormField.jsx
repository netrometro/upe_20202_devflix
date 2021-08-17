import React from 'react'
import TextInput from 'core/components/TextInput'
import { IconButton } from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'

const FormField = ({type, icon, text}) => {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
  
  if (type === "psw" || type === "psw_conf") {
    return(
      <TextInput.Group key={type} my={5}>
        <TextInput.LeftElement
        children={icon}
        >
        </TextInput.LeftElement>
        <TextInput
        px={10}
        placeholder={text}
        bg="whiteLight"
        borderColor="primary"
        borderWidth={2}
        color='black'
        _placeholder={{color: 'black'}}
        size="md"
        type={show ? "text" : "password"}>
        </TextInput>
        <TextInput.RightElement>
          <IconButton 
          h="1.75rem"
          size="sm"
          onClick={handleClick}
          icon={show ? <ViewIcon/> : <ViewOffIcon/>}
          bg="whiteLight"
          />
        </TextInput.RightElement>
      </TextInput.Group>
    )
  } else {
    return(
      <TextInput.Group key={type} my={5}>
        <TextInput.LeftElement
        children={icon}
        >
        </TextInput.LeftElement>
        <TextInput
        px={10}
        placeholder={text}
        bg="whiteLight"
        borderColor="primary"
        borderWidth={2}
        color='black'
        _placeholder={{color: 'black'}}
        size="md">
        </TextInput>
      </TextInput.Group>
    )
  }
}

export default FormField