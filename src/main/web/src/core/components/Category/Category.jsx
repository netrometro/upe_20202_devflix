import {Box} from '@chakra-ui/react'
import React from 'react'
import {Carousel} from '../Carousel'
import Title from './Title'

const Category = ({title, color, videos}) => {
  return (
    <Box mt={10}>
      <Title text={title} color={color} />
      <Carousel.Videos height={200} visibleSlides={3} videos={videos} />
    </Box>
  )
}

export default Category
