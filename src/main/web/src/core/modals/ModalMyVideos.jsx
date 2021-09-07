import React from 'react'
import { Box, Text, HStack, Image, VStack, IconButton, useDisclosure } from "@chakra-ui/react"
import { Modal, Alert } from "core/components"
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import ModalEditVideo from './ModalEditVideo'
import { useGetRequest, usePostRequest } from 'core/hooks'

const Video = ({video, isLoading, ...props}) => {
  const { isOpen: isEditVideoOpen, onOpen: onEditVideoOpen, onClose: onEditVideoClose } = useDisclosure()

  const {metadata, id} = video

  const {videoLink, title, videoThumbnail} = metadata ?? {}

  const {
    mutate: deleteVideo,
    isSuccess: isDeleteSuccess,
    isError: isDeleteError,
  } = usePostRequest(`/v1/video/${id}/delete`)

  const onClickDeleteVideo = () => {
    deleteVideo()
  }

  const renderAlert = () => {
    const error = {
      status: 'error',
      body: 'Eita! Não foi possível apagar seu vídeo. Por favor, tente novamente!',
    }
    const success = {
      status: 'success',
      body: 'Vídeo removido com sucesso!',
    }
    const buildMessage = () => {
      return isDeleteError ? error : success
    }

    const {status, body} = buildMessage()
    return (isDeleteError || isDeleteSuccess) && <Alert status={status} message={body} />
  }

  return (
    <Box
    {...props}>
      <HStack>
        <Image src={videoThumbnail} htmlWidth="200" htmlHeight="120" mr="3%" alt="thumb" isLoading={isLoading}></Image>
        <VStack w="100%">
          <HStack w="100%">
            <Text color="whiteLight" fontSize="30px" w="90%">{title}</Text>
            <IconButton
              _hover="background"
              bg="background"
              icon={<DeleteIcon style={{ color: "#BDBDBD", marginLeft: "3", fontSize: "38px" }} />}
              onClick={onClickDeleteVideo}
            />
          </HStack>
          <HStack w="100%">
            <Text color="whiteLight" pr="5px" w="90%">{videoLink}</Text>
            <IconButton
              _hover="background"
              bg="background"
              icon={<EditIcon style={{ color: "#BDBDBD", marginLeft: "3", fontSize: "38px" }} />}
              onClick={onEditVideoOpen}
            />
            <ModalEditVideo isOpen={isEditVideoOpen} onClose={onEditVideoClose} />
          </HStack>
        </VStack>
      </HStack>
      {renderAlert()}
      <Box
        py={0.5}
        px={3}
        width={'100%'}
        bg="primary"
        borderRadius={1}
        mt={5}
        mb={10}
      />
      
    </Box>
  )
}

const ModalMyVideos = ({ ...props }) => {

  const {data: response, isLoading} = useGetRequest("/v1/video/my");
  const VIDEOS = response?.data?.response ??[]

  const header = ({ title, ...props }) => {
    return (
      <Text {...props} color="whiteLight" fontSize="32px">{title}</Text>
    )
  }

  return (
    <Modal
      header={header({ title: "Meus videos" })}
      scrollBehavior="inside"
      {...props}
    >
      <Box bg="background" py={5}>
        {VIDEOS.map((video, index, videos) => {
          const isLastVideo = videos.length - 1 === index
          return (
            <>
              <Video key={`${index}`} video={video} isLoading={isLoading}/>
              {!isLastVideo && <Box height={5} />}
            </>
          )
        })}
      </Box>
    </Modal>
  )

}

export default ModalMyVideos