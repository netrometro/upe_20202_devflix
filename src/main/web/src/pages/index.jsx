import React from 'react'
import {Box, useDisclosure} from '@chakra-ui/react'
import {Category, Navbar, Button} from 'core/components'
import {PagesTitles} from 'core/utils/constants'
import {useUser} from 'core/hooks'
import {ModalForgotPassword, ModalShare} from 'core/modals'

const CATEGORIES = [
  {color: 'green', title: 'Back end'},
  {color: 'blue', title: 'Front end'},
  {color: 'orange', title: 'Full end'},
]

const HomePage = () => {
  const [state, actions] = useUser()
  const { isOpen, onClose, onOpen } = useDisclosure();

  console.log({state, actions})

  return (
    <>
      <Navbar />
      <Box bg="background" py={20}>
        {CATEGORIES.map((category, index, categories) => {
          const isLastCategory = categories.length - 1 === index
          return (
            <Box key={`${index}`}>
              <Category {...category} />
              {!isLastCategory && <Box height={20} />}
            </Box>
          )
        })}
        {/* <ModalVideo isOpen={isOpen} onClose={onClose} /> */}
        {/* <ModalShare isOpen={isOpen} onClose={onClose} /> */}
        <ModalForgotPassword isOpen={isOpen} onClose={onClose}></ModalForgotPassword>
        <Button onClick={onOpen}>Modal</Button>
      </Box>
    </>
  )
}

HomePage.pageTitle = PagesTitles.HOME

export default HomePage