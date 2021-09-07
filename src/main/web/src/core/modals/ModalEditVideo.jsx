import React, {useState, useEffect} from 'react'
import {Modal, Alert, Select} from "core/components"
import {Button, Text, Input, VStack, Textarea} from "@chakra-ui/react"
import usePutRequest from 'core/hooks/usePutRequest'
import { useRouter } from "next/router";

const OPTIONS_VISIBILITY = [
  {label: 'Público', value: 1},
  {label: 'Privado', value: 2},
]

const ModalEditVideo = ({video, ...props}) => {

  const {metadata, id} = video

  const {videoLink, description, videoYoutubeChannel, title, videoThumbnail, tags} = metadata ?? {}

  const [actualDescription, setActualDescription] = useState(description)
  const [actualTitle, setActualTitle] = useState(title)
  const [actualTags, setActualTags] = useState(tags)
  const [visibility, setVisibility] = useState(1)

  const router = useRouter();

  const {
    mutate: editVideo,
    isSuccess,
    data: response,
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

  useEffect(() => {
    if (isSuccess && response) {
      return router.reload()
    }
  }, [isSuccess, response, router])

  const renderAlert = () => {
    const error = {
      status: 'error',
      body: 'Eita! Ocorreu um erro ao tentar editar as informações do vídeo. Por favor, tente novamente!',
    }
    const success = {
      status: 'success',
      body: 'Alteração realizada com sucesso!',
    }
    const buildMessage = () => {
      return isError ? error : success
    }

    const {status, body} = buildMessage()
    const isRequesting = isError || isSuccess
    return (
      isRequesting && <Alert status={status} message={body} />
    )
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
        <Textarea w="65%" ml="5px" mt="10px" variant="flushed" color="whiteLight" _placeholder={{ color: 'whiteLight' }} borderColor="primary" focusBorderColor="primary" placeholder="Descrição" onChange={(event) => setActualDescription(event.target.value)}/>
        <Input w="65%" ml="5px" mt="10px" variant="flushed" color="whiteLight" _placeholder={{ color: 'whiteLight' }} borderColor="primary" focusBorderColor="primary" placeholder="Tags" onChange={(event) => setActualTags(event.target.value)}/>
        <Select
          w="65%"
          ml="5px"
          mt="10px"
          variant="flushed"
          color="whiteLight"
          _placeholder={{color: 'whiteLight'}}
          borderColor="primary"
          focusBorderColor="primary"
          placeholder="Selecione a Visibilidade"
          items={OPTIONS_VISIBILITY}
          onChange={(event) => setVisibility(event.target.value)}
        />
        <VStack mt={10}>
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