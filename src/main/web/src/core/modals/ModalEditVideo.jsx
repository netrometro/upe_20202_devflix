import React, {useState} from 'react'
import {Modal} from "core/components"
import {Button, Text, Input, Alert, VStack} from "@chakra-ui/react"
import usePutRequest from 'core/hooks/usePutRequest'

const ModalEditVideo = ({video, ...props}) => {

  const {metadata, id, visibility} = video

  const {videoLink, description, videoYoutubeChannel, title, videoThumbnail, tags} = metadata ?? {}

  const [actualDescription, setActualDescription] = useState(description)
  const [actualTitle, setActualTitle] = useState(title)
  const [actualTags, setActualTags] = useState(tags)

  const {
    mutate: editVideo,
    isSuccess,
    isError,
  } = usePutRequest(`/v1/video/${id}`)

  const onClickEditVideo = () => {
    editVideo({
      visibility: visibility,
      metadata: {
        videoLink: videoLink,
        description: actualDescription,
        videoYoutubeChannel: videoYoutubeChannel,
        title: actualTitle,
        videoThumbnail: videoThumbnail,
        tags: actualTags
      }
    })
  }

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
    return(
      <Text {...props} color="whiteLight" fontSize="32px">{title}</Text>
    )
  }

  return (
    <Modal
    header={header({title : "Editar Vídeo"})}
    scrollBehavior="inside" 
    {...props}
    > 
        <Input w="65%" ml="5px" mt="10px" variant="flushed" color="whiteLight" _placeholder={{ color: 'whiteLight' }} borderColor="primary" focusBorderColor="primary" placeholder="Título" onChange={(event) => setActualTitle(event.target.value)}/>
        <Input w="65%" ml="5px" mt="10px" variant="flushed" color="whiteLight" _placeholder={{ color: 'whiteLight' }} borderColor="primary" focusBorderColor="primary" placeholder="Descrição" onChange={(event) => setActualDescription(event.target.value)}/>
        <Input w="65%" ml="5px" mt="10px" variant="flushed" color="whiteLight" _placeholder={{ color: 'whiteLight' }} borderColor="primary" focusBorderColor="primary" placeholder="Tags" onChange={(event) => setActualTags(event.target.value)}/>
        <VStack>
          {renderAlert()}
        </VStack>
      <Button
        mt="5%"
        size="lg"
        onClick={onClickEditVideo}
        >
          Editar
      </Button>
    </Modal>
  )
}

export default ModalEditVideo