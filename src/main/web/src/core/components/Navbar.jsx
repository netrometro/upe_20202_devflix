import {Box, Flex, HStack} from '@chakra-ui/react'
import Image from './Image'
import {Button, Menu, IconButton} from 'core/components'
import {SearchIcon} from '@chakra-ui/icons'

const Navbar = () => {
  return (
    <Box bg="black" px={4}>
      <Flex alignItems={'center'} justifyContent={'space-between'}>
        <Flex alignItems={'center'} justifyContent={'flex-start'}>
          <Menu />
          <Box color="red" m={4}>
            <Image
              src={require('images/logo.svg')}
              alt="logo"
              width={200}
              height={50}
            />
          </Box>
        </Flex>
        <Flex h={16} alignItems={'center'} justifyContent={'flex-end'}>
          <HStack spacing={8} alignItems={'center'}>
            <HStack as={'nav'} spacing={4}>
              <IconButton
                aria-label="Search database"
                icon={<SearchIcon />}
                bg="black"
                color="secondary"
              />
              <Button>Novo vídeo</Button>
              <Button>Nova categoria</Button>
            </HStack>
          </HStack>
        </Flex>
      </Flex>
    </Box>
  )
}
export default Navbar
