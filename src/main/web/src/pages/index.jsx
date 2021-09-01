import React from 'react'
import {Box} from '@chakra-ui/react'
import {Category, Navbar} from 'core/components'
import {PagesTitles} from 'core/utils/constants'
import {useUser} from 'core/hooks'
import { get } from 'core/api/requests'


const CATEGORIES = [
  {color: 'green', title: 'Back end'},
  {color: 'blue', title: 'Front end'},
  {color: 'orange', title: 'Full end'},
]

const HomePage = () => {
  const [state, actions] = useUser()

  console.log({state, actions})

  get('/api/v1/category', 
    null, null, function(data, status){
    console.log(data, status)
  });

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