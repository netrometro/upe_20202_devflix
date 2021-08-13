import React from 'react'
import {Grid, GridItem} from '@chakra-ui/react'
import {Category} from 'core/components'
import {useTheme} from 'core/hooks'

const HomePage = () => {
  const {colors} = useTheme()
  return (
    <Grid templateRows="1fr 1fr" bg={colors.background}>
      <GridItem>
        <Category color="green" title="Back end" />
      </GridItem>
      <GridItem>
        <Category color="blue" title="Front end" />
      </GridItem>
      <GridItem>
        <Category color="orange" title="Full stack" />
      </GridItem>
    </Grid>
  )
}

HomePage.pageTitle = 'Página inicial'

export default HomePage
