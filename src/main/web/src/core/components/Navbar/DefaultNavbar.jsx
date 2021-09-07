import React from 'react'
import {Box, Flex, useDisclosure} from '@chakra-ui/react'
import {SearchIcon} from '@chakra-ui/icons'

import {Button, MenuWidget, IconButton} from 'core/components'
import {ModalVideo, ModalCategory} from 'core/modals'

import ActionsButtons from './ActionsButtons'
import Leading from './Leading'
import Image from '../Image'
import {useStorage, useUser} from 'core/hooks'
import {ExitToApp} from '@material-ui/icons'
import router from 'next/router'

const LOGO_HEIGHT = 50

const DefaultNavbar = ({onClickSwitchNavbar}) => {
  const {
    isOpen: isVideoOpen,
    onOpen: onVideoOpen,
    onClose: onVideoClose,
  } = useDisclosure()
  const {
    isOpen: isCategoryOpen,
    onOpen: onCategoryOpen,
    onClose: onCategoryClose,
  } = useDisclosure()

  const [{isLogged}, {logout}] = useUser()
  const [, {clear}] = useStorage()

  const onClickDoLogout = () => {
    logout()
    clear()
    router.reload('/')
  }

  return (
    <Flex alignItems="center" justifyContent="space-between">
      <Leading>
        <MenuWidget />
        <Box color="red" m={4}>
          <Image
            src="https://i.ibb.co/XjngWm9/logo.png"
            alt="logo"
            width={LOGO_HEIGHT * 3}
            height={LOGO_HEIGHT}
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
        {isLogged && (
          <>
            <Button onClick={onVideoOpen}>Vídeos</Button>
            <Button onClick={onCategoryOpen}>Categorias</Button>
            {isLogged && (
              <IconButton
                bg="black"
                icon={<ExitToApp style={{color: 'white'}} />}
                onClick={onClickDoLogout}
              />
            )}
          </>
        )}

        <ModalCategory isOpen={isCategoryOpen} onClose={onCategoryClose} />
        <ModalVideo isOpen={isVideoOpen} onClose={onVideoClose} />
      </ActionsButtons>
    </Flex>
  )
}

export default DefaultNavbar
