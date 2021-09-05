import React from 'react'
import {Alert, Button, Modal} from 'core/components'
import {
  Textarea,
  Text,
  VStack,
  Spacer,
  Flex,
  Box,
  Container,
} from '@chakra-ui/react'
import useGetAllCommentaries from 'core/hooks/commentaries/useGetAllCommentaries'
import useAddCommentary from 'core/hooks/commentaries/useAddCommentary'
import {useForm, useUser} from 'core/hooks'

const Commentary = ({id, author, text, canDelete}) => {
  const {name = 'Luiz Gustavo'} = author ?? {}

  return (
    <VStack
      mt="10px"
      w="100%"
      bgColor="#292929"
      borderRadius="6px"
      align="flex-start"
      p="4">
      <Text mb="2px" color="whiteLight" fontSize="18px" fontWeight="bold">
        {name}
      </Text>
      <Text mt="2px" color="whiteLight" fontSize="14px">
        {text}
      </Text>
    </VStack>
  )
}

const ModalCommentary = ({commentariesType, id, ...props}) => {
  const [{isLogged}] = useUser()
  const [{commentaries = [], refetch}] = useGetAllCommentaries(
    commentariesType,
    id,
  )
  const [{fields}, {getFieldProperties, cleanUp}] = useForm({
    text: '',
  })
  const {text} = fields

  const [{isLoading, isError}, {addCommentary}] = useAddCommentary(
    commentariesType,
    {
      id,
      text,
    },
  )

  const renderAlert = () => {
    const error = {
      status: 'error',
      body: 'Eita! Ocorreu um enviar sua mensagem tente novamente em alguns minutos.',
    }
    const buildMessage = () => {
      return error
    }
    const {status, body} = buildMessage()
    return isError && <Alert status={status} message={body} />
  }

  const Header = ({title}) => {
    return (
      <Text color="whiteLight" fontSize="32px">
        {title}
      </Text>
    )
  }

  const commentaryTypeValue = {
    video: 'nesse vídeo',
    category: 'nessa categoria',
  }[commentariesType]

  const EmptyText = () => (
    <Text color="primary">
      Vish! Parece que ainda não existe nenhum comentário {commentaryTypeValue}.
    </Text>
  )

  const renderCommentaries = () =>
    commentaries.length === 0 ? (
      <EmptyText />
    ) : (
      commentaries.map((commentary, index) => (
        <Commentary
          key={`${index}`}
          commentaryType={commentariesType}
          {...commentary}
        />
      ))
    )

  const onClickAddCommentary = () => {
    addCommentary()
    return cleanUp()
  }

  refetch()

  return (
    <Modal
      size="2xl"
      header={<Header {...{title: 'Comentários'}} />}
      scrollBehavior="inside"
      {...props}>
      <VStack w="100%" mt="10px">
        {renderCommentaries()}
        <Container w="100%" height="1rem" />
        {renderAlert()}

        {isLogged ? (
          <>
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
              {...getFieldProperties('text')}
            />

            <Container w="100%" height="0.5rem" />

            <Flex w="100%">
              <Box p="1" />
              <Spacer />
              <Button
                size="lg"
                onClick={onClickAddCommentary}
                isLoading={isLoading}
                disabled={!text}>
                Comentar
              </Button>
            </Flex>
          </>
        ) : (
          <Text color="primary">
            Quer adicionar um comentário? Então, realize seu login no sistema!
            😄
          </Text>
        )}
      </VStack>
    </Modal>
  )
}

export default ModalCommentary
