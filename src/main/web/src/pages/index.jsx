import React, {useState, useEffect} from 'react'
import {Box} from '@chakra-ui/react'
import {Category, Navbar} from 'core/components'
import {LOCAL_STORAGES_LOCATIONS, PagesTitles} from 'core/utils/constants'
import {useGetAllCategories, useStorage, useUser} from 'core/hooks'

const HomePage = () => {
  const [{response: categories = [], isLoading}] = useGetAllCategories()

  const [getItem] = useStorage()
  const [actualUser, setActualUser] = useState('')
  const [user, {login}] = useUser()

  useEffect(() => {
    setActualUser(getItem(LOCAL_STORAGES_LOCATIONS.USER_ACCESS_CREDENTIALS))

    if (actualUser && !user.email) {
      login(JSON.parse(actualUser) ?? {})
      return null
    }

    return null
  }, [actualUser, getItem, login, user.email])

  return (
    <>
      <Navbar />
      <Box bg="background" py={20}>
        {categories.map((category, index, categories) => {
          const isLastCategory = categories.length - 1 === index
          return (
            <Box key={`${index}`}>
              <Category {...category} isLoading={isLoading} />
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
