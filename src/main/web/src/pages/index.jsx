import React from 'react'
import {Box} from '@chakra-ui/react'
import {Category, Navbar} from 'core/components'
import {PagesTitles} from 'core/utils/constants'
import useToken from 'core/hooks/useToken'
// import { useUser } from 'core/hooks'


const CATEGORIES = [
  {color: 'green', title: 'Back end'},
  {color: 'blue', title: 'Front end'},
  {color: 'orange', title: 'Full end'},
]

const HomePage = () => {
  // const [state, actions] = useUser()
  // console.log({state, actions})

  console.log(useToken())

  return (
    <>
      <Navbar />
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
    </>
  )
}

HomePage.pageTitle = PagesTitles.HOME

export default HomePage