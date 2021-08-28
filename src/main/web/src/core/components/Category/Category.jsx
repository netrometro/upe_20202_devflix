import {Box} from '@chakra-ui/react'
import React from 'react'
import {Carousel} from '../Carousel'
import Title from './Title'

const Category = ({title, color, videos, deleteIcon, editIcon}) => {
  return (
    <Box>
      <Title text={title} color={color} deleteIcon={deleteIcon} editIcon={editIcon} />
      {/**
       * FIX: Needs to adds the video object to be pass as props to Carousel.Videos
       */}
      <Carousel.Videos visibleSlides={3} items={videos} />
    </Box>
  )
}

export default Category
