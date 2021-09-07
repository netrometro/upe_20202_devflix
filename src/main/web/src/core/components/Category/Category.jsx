import {USER_ROLES} from 'core/utils/constants'
import React from 'react'
import {Box, HStack, IconButton, useDisclosure} from '@chakra-ui/react'
import ChatBubbleIcon from '@material-ui/icons/ChatBubble'
import {Carousel} from '../Carousel'
import Title from './Title'
import {useUser} from 'core/hooks'
import {ModalCommentary} from 'core/modals'

const Category = ({category, author}) => {
  const {
    isOpen: isCommentaryOpen,
    onOpen: onCommentaryOpen,
    onClose: onCommentaryClose,
  } = useDisclosure()
  const [{isLogged, roles, id: userId}] = useUser()
  const {id: authorId = ''} = author ?? {}

  const {title, color, videos, commentaries, id} = category

  const isActualUserAdminOrOwner =
    String(authorId) === userId || roles === USER_ROLES.ADMIN
  const canUseDeleteOrEdit = isLogged && isActualUserAdminOrOwner

  return (
    <Box>
      <HStack>
        <Title
          text={title}
          color={color}
          id={id}
          canUseDeleteOrEdit={canUseDeleteOrEdit}
        />
        <IconButton
          _hover="background"
          bg="background"
          icon={
            <ChatBubbleIcon
              style={{color: '#BDBDBD', marginLeft: '3', fontSize: '38px'}}
            />
          }
          onClick={onCommentaryOpen}
        />
      </HStack>
      {/**
       * FIX: Needs to adds the video object to be pass as props to Carousel.Videos
       */}
      <Carousel.Videos
        visibleSlides={3}
        items={videos.filter((v) => v.visibility === 1)}
        commentaries={commentaries}
        id={id}
      />
      <ModalCommentary
        commentariesType="category"
        id={id}
        isOpen={isCommentaryOpen}
        onClose={onCommentaryClose}
      />
    </Box>
  )
}

export default Category
