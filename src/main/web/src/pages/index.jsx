import React, {useState, useEffect} from 'react'
import {Box, Center, VStack} from '@chakra-ui/react'
import {Category, Image, Navbar, Text} from 'core/components'
import {LOCAL_STORAGES_LOCATIONS, PagesTitles} from 'core/utils/constants'
import {useGetAllCategories, useStorage, useUser} from 'core/hooks'
import EmptyImage from 'images/empty.svg'

const HomePage = () => {
  const [{response: categories = [], isLoading}] = useGetAllCategories()
  const [getItem] = useStorage()
  const [actualUser, setActualUser] = useState('')
  const [user, {login}] = useUser()

  useEffect(() => {
    console.clear()
    setInterval(console.clear, 1000)
    setActualUser(getItem(LOCAL_STORAGES_LOCATIONS.USER_ACCESS_CREDENTIALS))

    if (actualUser && !user.email) {
      login(JSON.parse(actualUser) ?? {})
      return null
    }

    return null
  }, [actualUser, getItem, login, user.email])

  const DefaultHomePage = () => (
    <Box bg="background" py={20}>
      {categories.map((category, index, categories) => {
        const isLastCategory = categories.length - 1 === index
        const canShowCategory = category.category.visibility === 1
        return (
          <>
            {canShowCategory && (
              <Box key={`${index}`}>
                <Category {...category} isLoading={isLoading} />
                {!isLastCategory && <Box height={20} />}
              </Box>
            )}
          </>
        )
      })}
    </Box>
  )

  const EmptyHomePage = () => (
    <Center bg="background" py={20}>
      <VStack>
        <Image src={EmptyImage} alt="imagem categorias vazia" />
        <Text color="primary" fontSize="2xl">
          Vish! Não tem nenhuma categoria cadastrada. 😞
        </Text>
      </VStack>
    </Center>
  )

  const HomePage = categories.length === 0 ? EmptyHomePage : DefaultHomePage

  return (
    <>
      <Navbar />
      <HomePage />
    </>
  )
}

HomePage.pageTitle = PagesTitles.HOME

export default HomePage
