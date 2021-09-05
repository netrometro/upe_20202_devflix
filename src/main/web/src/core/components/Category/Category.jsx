import {Box} from '@chakra-ui/react'
import { useUser } from 'core/hooks'
import { USER_ROLES } from 'core/utils/constants'
import React from 'react'
import {Carousel} from '../Carousel'
import Title from './Title'

const Category = ({title, color, videos, commentaries, creationDate, id, lastChangedDate, visibility, author}) => {
const {id: authorId = ""} = author ?? {}
const [{isLogged, roles, id: userId}] = useUser()
const isActualUserAdminOrOwner = authorId === userId || roles === USER_ROLES.ADMIN
const canUseDeleteOrEdit = isLogged && isActualUserAdminOrOwner

  return (
    <Box>
      <Title text={title} color={color} canUseDeleteOrEdit={canUseDeleteOrEdit}/>
      {/**
       * FIX: Needs to adds the video object to be pass as props to Carousel.Videos
       */}
      <Carousel.Videos 
        visibleSlides={3}
        items={videos} 
        commentaries={commentaries} 
        id={id}
        />

    </Box>
  )
}

export default Category
