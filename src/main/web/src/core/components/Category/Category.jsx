import React from 'react'
import {Box, HStack, IconButton, useDisclosure} from '@chakra-ui/react'
import ChatBubbleIcon from '@material-ui/icons/ChatBubble'

import {Carousel} from '../Carousel'
import Title from './Title'
import {useTheme} from 'core/hooks'
import {ModalCommentary} from 'core/modals'

const Category = ({
  title,
  color,
  videos,
  commentaries,
  creationDate,
  id,
  lastChangedDate,
  visibility,
}) => {
  const {
    isOpen: isCommentaryOpen,
    onOpen: onCommentaryOpen,
    onClose: onCommentaryClose,
  } = useDisclosure()

  const {colors} = useTheme()

  return (
    <Box>
      <HStack>
        <Title text={title} color={color} />
        <IconButton
          _hover="background"
          bg="background"
          icon={
            <ChatBubbleIcon
              style={{color: colors.primary, marginLeft: '9', fontSize: '38px'}}
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
        items={videos}
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
