import React from 'react'
import {Box} from '@chakra-ui/react'
import {Category} from 'core/components'
import {useUser} from 'core/hooks'

const CATEGORIES = [
  {color: 'green', title: 'Back end'},
  {color: 'blue', title: 'Front end'},
  {color: 'orange', title: 'Full end'},
]

const HomePage = () => {
  const [state, actions] = useUser()

  console.log({state, actions})

  return (
    <Box bg="background" py={20}>
      {CATEGORIES.map((category, index, categories) => {
        const isLastCategory = categories.length - 1 === index
        return (
          <Box key={`${index}`}>
            <Category {...category} />
            {!isLastCategory && <Box height={20} />}
          </Box>
        )
      })}
    </Box>
  )
}

HomePage.pageTitle = 'Página inicial'

export default HomePage
