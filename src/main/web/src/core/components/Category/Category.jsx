import {Box} from '@chakra-ui/react'
import React from 'react'
import {Carousel} from '../Carousel'
import Title from './Title'

const Category = ({title, color, videos}) => {
  return (
    <Box>
      <Title text={title} color={color} />
      {/**
       * FIX: Needs to adds the video object to be pass as props to Carousel.Videos
       */}
      <Carousel.Videos height={200} visibleSlides={3} items={videos} />
    </Box>
  )
}

export default Category
