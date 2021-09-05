import React from 'react'
import {Box, Text} from '@chakra-ui/react'
import {Modal, Category} from 'core/components'
import {useGetMyCategories} from 'core/hooks'

const ModalMyCategories = ({...props}) => {

  const [{response: categories = [], isLoading}] = useGetMyCategories()

  console.log(categories)

  const header = ({title, ...props}) => {
    return (
      <Text {...props} color="whiteLight" fontSize="32px">
        {title}
      </Text>
    )
  }

  return (
    <Modal
      header={header({title: 'Minhas Categorias'})}
      scrollBehavior="inside"
      {...props}>
      <Box bg="background" py={5}>
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
    </Modal>
  )
}

export default ModalMyCategories
