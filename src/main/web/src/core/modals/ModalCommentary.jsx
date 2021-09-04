import React from 'react'
import {Button, Modal} from 'core/components'
import {
  Textarea,
  Text,
  VStack,
  Spacer,
  Flex,
  Box,
  Container,
} from '@chakra-ui/react'

const ModalCommentary = ({commentaries, ...props}) => {
  commentaries = commentaries || [
    {
      userName: 'Muryllo',
      body: 'Excelente exemplo de integração Jwt. Parabéns pelo vídeo!',
      canDelete: true,
    },
  ]

  const onCommentClick = () => {}

  const header = ({title}) => {
    return (
      <Text color="whiteLight" fontSize="32px">
        {title}
      </Text>
    )
  }

  const renderCommentary = ({userName, body, canDelete, ...commentProps}) => {
    return (
      <VStack mt="10px" w="100%" bgColor="#292929" borderRadius="6px">
        <Box p={3} textAlign={'left'}>
          <Text mb="2px" color="whiteLight" fontSize="18px">
            {userName}
          </Text>
          <Text mt="2px" color="whiteLight" fontSize="14px">
            {body}
          </Text>
        </Box>
      </VStack>
    )
  }

  return (
    <Modal
      size="2xl"
      header={header({title: 'Comentários'})}
      scrollBehavior="inside"
      {...props}>
      <VStack w="100%" mt="10px">
        {commentaries.map((commentary) => renderCommentary(commentary))}

        <Container w="100%" height="1rem" />

        <Textarea
          w="100%"
          mt="10px"
          p="3"
          variant="flushed"
          color="gray"
          bgColor="whiteLight"
          borderRadius="6px"
          placeholder="Adicionar um comentário..."
          _placeholder={{color: 'gray', textIndent: '4px'}}
          borderColor="whiteLight"
          focusBorderColor="whiteLight"
        />

        <Container w="100%" height="0.5rem" />

        <Flex w="100%">
          <Box p="1" />
          <Spacer />
          <Button size="lg" onClick={onCommentClick}>
            Comentar
          </Button>
        </Flex>
      </VStack>
    </Modal>
  )
}

export default ModalCommentary
