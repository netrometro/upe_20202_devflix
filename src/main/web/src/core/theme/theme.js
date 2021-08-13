import {extendTheme} from '@chakra-ui/react'
import Colors from './colors'

const Theme = extendTheme({
  colors: {
    ...Colors,
  },
})

export default Theme
