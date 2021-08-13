import React from 'react'
import {Grid, GridItem} from '@chakra-ui/react'
import {Category} from 'core/components'
import {useTheme} from 'core/hooks'

const HomePage = () => {
  const {colors} = useTheme()
  return (
    <Grid h="100%" templateRows="1fr 2fr" bg={colors.background}>
      <GridItem>
        <Category color="green" title="Back end" />
      </GridItem>
      <GridItem>
        <Category color="blue" title="Front end" />
      </GridItem>
    </Grid>
  )
}

HomePage.pageTitle = 'Página inicial'

export default HomePage
