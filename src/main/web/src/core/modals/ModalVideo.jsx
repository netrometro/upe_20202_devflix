/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react'
import {Button, Text, Input, HStack, useDisclosure} from '@chakra-ui/react'
import {Modal, Select} from 'core/components'
import ModalMyVideos from './ModalMyVideos'
import ModalYoutubeSearch from './ModalYoutubeSearch'
import {useGetMyCategories, useStorage, useForm} from 'core/hooks'
import {LOCAL_STORAGES_LOCATIONS} from 'core/utils/constants'

const OPTIONS_VISIBILITY = [
  {label: 'Público', value: 1},
  {label: 'Privado', value: 2},
]


const ModalVideo = ({...props}) => {
  const {
    isOpen: isMyVideoOpen,
    onOpen: onMyVideoOpen,
    onClose: onMyVideoClose,
  } = useDisclosure()
  const {
    isOpen: isYoutubeSearchOpen,
    onOpen: onYoutubeSearchOpen,
    onClose: onYoutubeSearchClose,
  } = useDisclosure()
  const [getItem, {setItem}] = useStorage()
  const [{fields}, {getFieldProperties}] = useForm({tags: ''})
  const {tags} = fields
  const [currentCategory, setCurrentCategory] = useState('')
  const [{response: categories = [], isLoading, isSuccess, ...rest}] =
    useGetMyCategories()
  const [items, setItems] = useState([])
  const [visibility, setVisibility] = useState('')

  const onChangeSelect = (event) => {
    setCurrentCategory(event.target.value)
    setItem(
      LOCAL_STORAGES_LOCATIONS.CURRENT_CATEGORY,
      String(event.target.value),
    )
    
  }

  const onClickSearchVideo = () => {
    setItem(LOCAL_STORAGES_LOCATIONS.CURRENT_TAGS, tags)
    setItem(LOCAL_STORAGES_LOCATIONS.CURRENT_VISIBILITY, visibility)
    onYoutubeSearchOpen()
  }

  const header = ({title, ...props}) => {
    return (
      <Text {...props} color="whiteLight" fontSize="32px">
        {title}
      </Text>
    )
  }

  useEffect(() => {
    if (isSuccess && categories) {
      setItems(
        categories.map(({category, author}) => {
          return {
            label: category.title,
            value: category.id,
          }
        }),
      )
      return null
    }
  }, [setItems, categories, isSuccess])

  return (
    <Modal
      header={header({title: 'Cadastro de Vídeo'})}
      scrollBehavior="inside"
      {...props}>
      <Input
        w="65%"
        ml="5px"
        mt="10px"
        variant="flushed"
        color="whiteLight"
        _placeholder={{color: 'whiteLight'}}
        borderColor="primary"
        focusBorderColor="primary"
        placeholder="Tags"
        {...getFieldProperties('tags')}
      />
      <Select
        w="65%"
        ml="5px"
        mt="10px"
        variant="flushed"
        color="whiteLight"
        _placeholder={{color: 'whiteLight'}}
        borderColor="primary"
        focusBorderColor="primary"
        placeholder="Selecione a categoria"
        items={items}
        onChange={onChangeSelect}
      />
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

      <HStack mt="5%" spacing="5%">
        <Button
          size="lg"
          onClick={onClickSearchVideo}
          disabled={!tags && !currentCategory}>
          Buscar Vídeo
        </Button>
        <ModalYoutubeSearch
          isOpen={isYoutubeSearchOpen}
          onClose={onYoutubeSearchClose}
        />
        <Button
          _hover={{bg: '#EC00254F'}}
          color="primary"
          borderColor="primary"
          variant="outline"
          size="lg"
          onClick={onMyVideoOpen}>
          Meus Vídeos
        </Button>
        <ModalMyVideos isOpen={isMyVideoOpen} onClose={onMyVideoClose} />
      </HStack>
    </Modal>
  )
}

export default ModalVideo
