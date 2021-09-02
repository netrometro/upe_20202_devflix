import React from 'react'
import {Box} from '@chakra-ui/react'
import {Category, Navbar} from 'core/components'
import {PagesTitles} from 'core/utils/constants'
// import { useUser } from 'core/hooks'
import {useGetAllCategories} from 'core/hooks'

const CATEGORIES = [{
  color: "f4f5f8",
  commentaries: [],
  creationDate: "2021-09-02T19:29:52.791",
  id: 2,
  lastChangedDate: null,
  title: "BUCETA MARROM DO CARALHO",
  videos: [],
  visibility: 1,
}
  
]

const HomePage = () => {

  //const [{ response, ...rest }]  = useGetAllCategories()

  //console.log(response)

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