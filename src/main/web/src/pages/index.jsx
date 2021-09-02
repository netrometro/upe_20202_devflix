import React from 'react'
import {Box} from '@chakra-ui/react'
import {Category, Navbar} from 'core/components'
import {PagesTitles} from 'core/utils/constants'
// import { useUser } from 'core/hooks'
import {useGetAllCategories} from 'core/hooks'

const HomePage = () => {
  const [{ response: categories = [], isLoading, ...rest }] = useGetAllCategories()

  return (
    <>
      <Navbar />
      <Box bg="background" py={20}>
        {categories.map((category, index, categories) => {
          const isLastCategory = categories.length - 1 === index
          return (
            <Box key={`${index}`}>
              <Category {...category} isLoading={isLoading}/>
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