import { Box, Radio, RadioGroup, Input, VStack, HStack, Image, Text } from '@chakra-ui/react'
import { Modal } from 'core/components'
import React from 'react'
import THUMB_ONE from 'images/thumb-one.svg'
import SearchIcon from '@material-ui/icons/Search'

const VIDEOS = [
  { title: 'O que faz uma desenvolvedora front-end?', url: "aaaaaaaaaaaaa" },
  { title: 'Front end', url: "aaaaaaaaaaaaa" },
  { title: 'Full end', url: "aaaaaaaaaaaaa" },
]

const ModalYoutubeSearch = ({ ...props }) => {

  const header = ({ ...props }) => {
    return (
      <HStack mx="10%">
        <SearchIcon style={{ color: "#BDBDBD", marginLeft: "3", fontSize: "38px" }} />
        <Input size='lg' ml="5px" mt="10px" variant="outline" color="whiteLight" _placeholder={{ color: 'whiteLight' }} borderColor="primary" focusBorderColor="primary" placeholder="Buscar" />
      </HStack>
    )
  }

  const videoRender = ({ title, url, ...props }) => {
    return (
      <HStack w="100%">
        <Image src={THUMB_ONE} htmlWidth="200" htmlHeight="120" mr="3%"></Image>
        <VStack w="100%">
          <HStack w="100%">
            <Text color="whiteLight" fontSize="30px" w="90%">{title}</Text>
          </HStack>
          <HStack w="100%">
            <Text color="whiteLight" pr="5px" w="90%">{url}</Text>
          </HStack>
        </VStack>
      </HStack>
    )
  }

  return (
    <Modal
      header={header()}
      scrollBehavior="inside"
      {...props}
    >
      <RadioGroup>
        <VStack>
          {VIDEOS.map((video, index, videos) => {
            const isLastVideo = videos.length - 1 === index
            return (
              <Box key={`${index}`} width="90%">
                <HStack width="100%">
                  <Radio value={`${index}`} width="10%"></Radio>
                  {videoRender({ title: video.title, url: video.url })}
                </HStack>

                <Box
                  py={0.5}
                  px={3}
                  width={'100%'}
                  bg="primary"
                  borderRadius={1}
                  mt={5}
                  mb={5}
                />
                {!isLastVideo && <Box height={5} />}
              </Box>

            )
          })}
        </VStack>
      </RadioGroup>
    </Modal>
  )
}

export default ModalYoutubeSearch