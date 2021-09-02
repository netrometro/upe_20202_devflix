import {Box} from '@chakra-ui/react'
import { LastPage } from '@material-ui/icons'
import React from 'react'
import {Carousel} from '../Carousel'
import Title from './Title'

const Category = ({title, color, videos, commentaries, creationDate, id, lastChangedDate, visibility}) => {
  return (
    <Box>
      <Title text={title} color={color} />
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
