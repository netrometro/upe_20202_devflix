import React from 'react'

import {Range} from 'core/utils'

import Image from '../Image'
import Carousel from './Carousel'

import THUMB_ONE from 'images/thumb-one.svg'

const Slide = (props) => {
  return (
    <Carousel.Item hasSpace {...props}>
      <Image src={THUMB_ONE} alt="thumb_one" height={350} />
    </Carousel.Item>
  )
}

const VideosCarousel = (props) => {
  const slides = Range().map((_, i) => <Slide key={i} />)

  return (
    <Carousel
      slides={slides}
      backButtonIcon={({tintColor}) => (
        <Carousel.Button tintColor={tintColor} direction="back" fontSize={56} />
      )}
      forwardButtonIcon={({tintColor}) => (
        <Carousel.Button
          tintColor={tintColor}
          direction="forward"
          fontSize={56}
        />
      )}
      {...props}
    />
  )
}

export default VideosCarousel
