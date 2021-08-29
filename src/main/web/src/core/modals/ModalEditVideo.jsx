import {React} from 'react'
import {Modal} from "core/components"


const ModalEditVideo = ({...props}) => {
  const header = ({title, ...props}) => {
    return(
      <Text {...props} color="whiteLight" fontSize="32px">{title}</Text>
    )
  }

  return (
    <Modal
    header={header({title : "Editar Vídeo"})}
    scrollBehavior="inside" 
    {...props}
    >
      <Input w="65%" ml="5px" mt="10px" variant="flushed" color="whiteLight" _placeholder={{ color: 'whiteLight' }} borderColor="primary" focusBorderColor="primary" placeholder="Video" />
      <Select w="65%" ml="5px" mt="10px" variant="flushed" color="whiteLight" _placeholder={{ color: 'whiteLight' }} borderColor="primary" focusBorderColor="primary" placeholder="Selecione a Categoria" />
      <Button
          size="lg"
          >
            Editar
        </Button>
    </Modal>
  )
}