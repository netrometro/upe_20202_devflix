import React from 'react'

import Image from '../Image'
import Carousel from './Carousel'
import {useDisclosure, Center, Text} from '@chakra-ui/react'
import {ModalVideoDetails} from 'core/modals'

// {
//   "creationDate": "2021-09-02T22:24:35.422",
//   "lastChangedDate": null,
//   "id": 4,
//   "visibility": 1,
//   "metadata": {
//       "creationDate": "2021-09-02T22:24:35.224",
//       "lastChangedDate": null,
//       "id": 3,
//       "videoLink": "https://www.youtube.com/watch?v=3FkWddODLno",
//       "title": "Visual Basic Tutorial 2017",
//       "videoThumbnail": "https://i.ytimg.com/vi/3FkWddODLno/hqdefault.jpg",
//       "description": "Get the Code Here : https://goo.gl/4mqeZT Subscribe to Me: http://bit.ly/2FWQZTx Best Visual Basic Book : http://amzn.to/2fL5N8w MY UDEMY COURSES ARE ...",
//       "videoYoutubeChannel": "Derek Banas",
//       "tags": "code"
//   },
//   "commentaries": null
// }

const Slide = ({item, ...props}) => {
  const {metadata} = item ?? {}
  const {videoThumbnail} = metadata ?? {}

  const {
    isOpen: isVideoDetailsOpen,
    onOpen: onVideoDetailsOpen,
    onClose: onVideoDetailsClose,
  } = useDisclosure()

  return (
    <Carousel.Item pt="10" pb="10" overflow="visible" hasSpace {...props}>
      <Image
        cursor="pointer"
        onClick={onVideoDetailsOpen}
        width="100%"
        src={videoThumbnail}
        alt="thumb_one"
        borderRadius="6px"
        _hover={{
          transform: 'scale(1.25)',
          transition: 'transform .2s',
        }}
      />

      <ModalVideoDetails
        isOpen={isVideoDetailsOpen}
        onClose={onVideoDetailsClose}
        metadata={metadata}
      />
    </Carousel.Item>
  )
}

const VideosCarousel = ({commentaries, id, items = [], ...props}) => {
  const slides = items.map((item, index) => (
    <Slide key={`${index}`} item={item} />
  ))
  if (slides.length === 0) {
    return (
      <Center my="5%" size="xl" color="primary">
        <Text fontSize="2xl">
          Vish! Você não possui nenhum vídeo nessa categoria ainda 🤗
        </Text>
      </Center>
    )
  }

  return (
    <Carousel
      slides={slides}
      height={280}
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
