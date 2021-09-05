/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import {
  Box,
  Radio,
  RadioGroup,
  Input,
  VStack,
  HStack,
  Image,
  Text,
  IconButton,
  Spinner,
  Center,
} from '@chakra-ui/react'
import {Modal, Alert} from 'core/components'
import React, {useState, useEffect} from 'react'
import SearchIcon from '@material-ui/icons/Search'
import {useForm, useGetRequest, usePostRequest, useStorage} from 'core/hooks'
import {LOCAL_STORAGES_LOCATIONS} from 'core/utils/constants'

const INITIAL_STATE = {
  keyword: '',
}

const Video = ({thumb, title, url, description, channelName}) => {
  const [getItem, {setItem}] = useStorage()
  const [id, setId] = useState('')
  const [tags, setTags] = useState('')
  const {
    mutate: addVideo,
    data: response,
    isLoading,
    isError,
    isSuccess,
  } = usePostRequest('/v1/video/' + Number(id))
  const [hasToAddVideo, setHasToAddVideo] = useState(false)

  const onClickAddVideo = () => {
    setHasToAddVideo(true)
  }

  const renderAlert = () => {
    const error = {
      status: 'error',
      body: 'Eita! Ocorreu na sua tentativa de adiciona esse video na categoria.',
    }
    const success = {
      status: 'success',
      body: 'Video adicionado com sucesso na categoria! Recarregue a página para ver a alteração.',
    }
    const buildMessage = () => {
      return isError ? error : success
    }
    const {status, body} = buildMessage()
    const isRequesting = isError || isSuccess
    return isRequesting && <Alert status={status} message={body} />
  }

  useEffect(() => {
    setId(getItem(LOCAL_STORAGES_LOCATIONS.CURRENT_CATEGORY))
    setTags(getItem(LOCAL_STORAGES_LOCATIONS.CURRENT_TAGS))
  }, [setId, setTags, getItem])

  useEffect(() => {
    if (isSuccess) {
      return setHasToAddVideo(false)
    }
    if (hasToAddVideo) {
      addVideo({
        visibility: 1,
        metadata: {
          videoThumbnail: thumb,
          videoLink: url,
          title: title,
          description: description,
          videoYoutubeChannel: channelName,
          tags: tags,
        },
      })
      return null
    }
  }, [
    addVideo,
    channelName,
    description,
    hasToAddVideo,
    isSuccess,
    response,
    setItem,
    tags,
    thumb,
    title,
    url,
  ])

  return (
    <Box key={`${id}`} width="90%">
      <HStack width="100%">
        <HStack w="100%">
          <Image
            src={thumb}
            htmlWidth="200"
            htmlHeight="120"
            mr="3%"
            cursor="pointer"
            onClick={onClickAddVideo}
          />{' '}
          <VStack w="100%">
            <HStack w="100%">
              <Text color="whiteLight" fontSize="30px" w="90%">
                {title}
              </Text>
            </HStack>
            <HStack w="100%">
              <Text color="whiteLight" pr="5px" w="90%">
                {url}
              </Text>
            </HStack>
          </VStack>
        </HStack>
      </HStack>
      <Box
        py={0.5}
        px={3}
        width={'100%'}
        bg="primary"
        borderRadius={1}
        mt={5}
        mb={5}
      />
      {renderAlert()}
    </Box>
  )
}

const ModalYoutubeSearch = (props) => {
  const [{fields}, {getFieldProperties}] = useForm(INITIAL_STATE)
  const {keyword} = fields
  const [enabled, setEnabled] = useState(false)
  const {
    data: response,
    isLoading,
    isError,
    isSuccess,
  } = useGetRequest('/v1/video/youtube/search', {params: {keyword}}, {enabled})
  const VIDEOS = response?.data?.response ?? []

  const onClickSearchVideo = () => {
    setEnabled(true)
  }

  const header = ({...props}) => {
    return (
      <HStack mx="10%" align="center" mt="3">
        <Input
          size="lg"
          ml="5px"
          variant="outline"
          color="whiteLight"
          _placeholder={{color: 'whiteLight'}}
          borderColor="primary"
          focusBorderColor="primary"
          placeholder="Buscar"
          {...getFieldProperties('keyword')}
        />
        <IconButton
          bg="background"
          icon={<SearchIcon style={{color: '#BDBDBD', fontSize: '38px'}} />}
          onClick={onClickSearchVideo}
          isLoading={isLoading}
        />
      </HStack>
    )
  }

  useEffect(() => {
    if (isSuccess && response) {
      setEnabled(false)
    }
  }, [isSuccess, response, setEnabled])

  return (
    <Modal header={header()} scrollBehavior="inside" {...props}>
      {VIDEOS.length === 0 ? (
        <Center my="5%" size="xl" color="primary">
          <Text fontSize="2xl">Eita! Lista de vídeos vazia 🤔</Text>
        </Center>
      ) : (
        <RadioGroup>
          <VStack>
            {isLoading ? (
              <Spinner color="primary" size="lg" />
            ) : (
              VIDEOS.map((video, index) => {
                return <Video {...video} key={`${index}`} />
              })
            )}
          </VStack>
        </RadioGroup>
      )}
    </Modal>
  )
}

export default ModalYoutubeSearch
