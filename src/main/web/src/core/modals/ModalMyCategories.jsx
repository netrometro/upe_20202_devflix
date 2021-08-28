import {React} from 'react'
import {Box, Text} from "@chakra-ui/react"
import {Modal, Category} from "core/components"

const CATEGORIES = [
  {color: 'green', title: 'Back end'},
  {color: 'blue', title: 'Front end'},
  {color: 'orange', title: 'Full end'},
]

const ModalMyCategories = ({...props}) => {

  const header = ({title, ...props}) => {
    return(
      <Text {...props} color="whiteLight" fontSize="32px">{title}</Text>
    )
  }

  return(
    <Modal 
      header={header({title : "Minhas Categorias"})}
      scrollBehavior="inside" 
      {...props}
      >
      <Box bg="background" py={5}>
        {CATEGORIES.map((category, index, categories) => {
          const isLastCategory = categories.length - 1 === index
          return (
            <Box key={`${index}`}>
              <Category {...category} />
              {!isLastCategory && <Box height={10} />}
            </Box>
          )
        })}
      </Box>
      
    </Modal>
  )
  
}

export default ModalMyCategories