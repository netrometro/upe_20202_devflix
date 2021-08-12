/* eslint-disable react/jsx-key */
import React from 'react'
import Carousel from './Carousel'
import {ArrowBackIos, ArrowForwardIos} from '@material-ui/icons'
import Image from '../Image'

const VideosCarousel = (props) => {
  const slides = Array.from({length: 5}, (_, index) => (
    <Image
      key={index}
      alt="test-image"
      src={require('images/thumb-one.svg')}
      width="100%"
      height="100%"
    />
  ))

  return (
    <Carousel
      slides={slides}
      {...props}
      backButtonIcon={({tintColor}) => (
        <ArrowBackIos style={{color: tintColor}} fontSize="large" />
      )}
      forwardButtonIcon={({tintColor}) => (
        <ArrowForwardIos style={{color: tintColor}} fontSize="large" />
      )}
    />
  )
}

export default VideosCarousel
