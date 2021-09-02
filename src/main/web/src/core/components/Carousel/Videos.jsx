import React from 'react'

import {Range} from 'core/utils'

import Image from '../Image'
import Carousel from './Carousel'
import {useDisclosure} from '@chakra-ui/react'
import {ModalVideoDetails} from 'core/modals'

import THUMB_ONE from 'images/thumb-one.svg'

// {
//   "visibility": 1,
//   "metadata": {
//     "videoLink": "https://www.youtube.com/watch?v=EJxcisbhEVs",
//     "title": "aaaaaaaaa",
//     "description": "aaaaaaaaaaaaaaaaaaaa",
//     "videoYoutubeChannel": "CrazyBrown",
//     "tags": "danca,video"
//   },
//   "commentaries": []
// }

const Slide = ({commentaries, id, visibility, metadata,...props}) => {
  const {videoLink, title, description, videoYoutubeChannel, tags} = metadata??{}

  const {
    isOpen: isVideoDetailsOpen,
    onOpen: onVideoDetailsOpen,
    onClose: onVideoDetailsClose,
  } = useDisclosure()
  return (
    <Carousel.Item hasSpace {...props}>
      <ModalVideoDetails
        isOpen={isVideoDetailsOpen}
        onClose={onVideoDetailsClose}></ModalVideoDetails>
      <Image
        onClick={onVideoDetailsOpen}
        mt="10"
        width="100%"
        src={THUMB_ONE}
        alt="thumb_one"
      />
    </Carousel.Item>
  )
}

const VideosCarousel = ({commentaries, id,...props}) => {
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
