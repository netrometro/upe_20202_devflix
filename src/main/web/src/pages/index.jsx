import React from 'react'
import {Grid, GridItem} from '@chakra-ui/react'
import {Carousel} from 'core/components'

const HomePage = () => {
  return (
    <Grid h="100%" templateRows="1fr 2fr" bg="papayawhip">
      <GridItem>
        <Carousel.Videos
          style={{backgroundColor: 'green'}}
          height={200}
          visibleSlides={3}
          // isPlaying
          // interval={2000}
        />
      </GridItem>
      <GridItem bg="red"></GridItem>
    </Grid>
  )
}

HomePage.pageTitle = 'Página inicial'

export default HomePage
