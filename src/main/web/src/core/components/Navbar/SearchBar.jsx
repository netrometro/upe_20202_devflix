import React, {useState} from 'react'
import {Flex} from '@chakra-ui/react'
import {ArrowBackIcon} from '@chakra-ui/icons'

import {IconButton} from 'core/components'

import Leading from './Leading'
import TextInput from '../TextInput'

const SearchBar = ({onClickSwitchNavbar}) => {
  const [searchField, setSearchField] = useState('')
  const onSearch = (event) => setSearchField(event.target.value)

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
      />
    </Flex>
  )
}

export default SearchBar
