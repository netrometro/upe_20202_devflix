import React, {useState} from 'react'
import { Flex, useDisclosure } from '@chakra-ui/react'
import {ArrowBackIcon, SearchIcon} from '@chakra-ui/icons'

import { IconButton } from 'core/components'
import { useForm, useGetRequest } from 'core/hooks'

import Leading from './Leading'
import TextInput from '../TextInput'
import { ModalVideoSearch } from 'core/modals'

const INITIAL_STATE = {
  keyword: '',
}

const SearchBar = ({onClickSwitchNavbar}) => {
  const [{fields}, {getFieldProperties}] = useForm(INITIAL_STATE)
  const {keyword} = fields
  const [searchField, setSearchField] = useState('')
  const onSearch = (event) => setSearchField(event.target.value)
  const [enabled, setEnabled] = useState(false)
  const {
    data: response,
    isLoading
  } = useGetRequest('/v1/video/search', {params: {keyword}}, {enabled})
  const videos = response?.data?.response ?? []

  const onClickSearchVideo = () => {
    onVideoSearchOpen()
    setEnabled(true)
  }

  const {isOpen: isVideoSearchOpen, onOpen: onVideoSearchOpen, onClose: onVideoSearchClose} = useDisclosure()

  return (
    <Flex alignItems="center" justifyContent="space-between" py={4}>
      <Leading>
        <IconButton
          icon={<ArrowBackIcon />}
          onClick={onClickSwitchNavbar}
          bg="black"
          color="secondary"
          size="lg"
          mr={8}
        />
      </Leading>
      <TextInput
        value={searchField}
        onChange={onSearch}
        size="lg"
        placeholder="Buscar um vídeo..."
        {...getFieldProperties('keyword')}
      />
      <IconButton
        onClick={onClickSearchVideo}
        icon={<SearchIcon />}
        bg="black"
        color="secondary"
        size="lg"
        mr={8}
        isLoading={isLoading}
      />
      <ModalVideoSearch isOpen={isVideoSearchOpen} onClose={onVideoSearchClose} videos={videos}/>
    </Flex>
    
  )
}

export default SearchBar
