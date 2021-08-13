import React from 'react'
import {Box, Flex} from '@chakra-ui/react'
import {SearchIcon} from '@chakra-ui/icons'

import {Button, MenuWidget, IconButton} from 'core/components'

import ActionsButtons from './ActionsButtons'
import Leading from './Leading'
import Image from '../Image'

const DefaultNavbar = ({onClickSwitchNavbar}) => {
  return (
    <Flex alignItems="center" justifyContent="space-between">
      <Leading>
        <MenuWidget />
        <Box color="red" m={4}>
          <Image
            src={require('images/logo.svg')}
            alt="logo"
            width={200}
            height={50}
          />
        </Box>
      </Leading>
      <ActionsButtons>
        <IconButton
          aria-label="Procurar vídeo"
          icon={<SearchIcon />}
          bg="black"
          color="secondary"
          size="lg"
          onClick={onClickSwitchNavbar}
        />
        <Button>Novo vídeo</Button>
        <Button>Nova categoria</Button>
      </ActionsButtons>
    </Flex>
  )
}

export default DefaultNavbar
