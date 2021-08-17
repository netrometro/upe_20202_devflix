import React from 'react'
import TextInput from 'core/components/TextInput'

const FormField = ({type, icon, text}) => {
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

export default FormField