/* eslint-disable no-return-assign */
import React from 'react'
import {Box, Text} from '@chakra-ui/react'
import {Modal, Category} from 'core/components'

const CATEGORIES = [
  {color: 'green', title: 'Back end', deleteIcon: false, editIcon: false},
  {color: 'blue', title: 'Front end', deleteIcon: false, editIcon: false},
  {color: 'orange', title: 'Full end', deleteIcon: false, editIcon: false},
]

const ModalMyCategories = ({...props}) => {
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
        {CATEGORIES.map((category, index, categories) => {
          const isLastCategory = categories.length - 1 === index
          return (
            <Box key={`${index}`}>
              <Category
                {...category}
                deleteIcon={(category.deleteIcon = true)}
                editIcon={(category.editIcon = true)}
              />
              {!isLastCategory && <Box height={10} />}
            </Box>
          )
        })}
      </Box>
    </Modal>
  )
}

export default ModalMyCategories
