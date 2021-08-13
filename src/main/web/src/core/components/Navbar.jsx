import {Box, Flex, HStack, Link, Icon} from '@chakra-ui/react'
import Image from './Image'
import {useTheme} from '../hooks'
import {Home, Info, ShowChart} from '@material-ui/icons'
import NextLink from 'next/link'

const PAGES = [
  {link: '/', linkName: 'Inicio', icon: Home},
  {link: '/home/projects', linkName: 'Projeto', icon: ShowChart},
  {link: '/home/about', linkName: 'Sobre', icon: Info},
]

const NavLink = ({icon, linkName, colors, link}) => (
  <NextLink href={link}>
    <Link px={2} py={1} color={colors.primary} rounded={'md'}>
      <Icon as={icon} mx={2} />
      {linkName}
    </Link>
  </NextLink>
)

const Navbar = () => {
  const {colors} = useTheme()

  const renderItem = ({linkName, icon, link}) => (
    <NavLink
      key={linkName}
      icon={icon}
      linkName={linkName}
      colors={colors}
      link={link}
    />
  )

  return (
    <Box bg={colors.black} px={4}>
      <Flex alignItems={'center'} justifyContent={'space-between'}>
        <Flex alignItems={'center'} justifyContent={'flex-start'}>
          <Box color={colors.red} m={4}>
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
              {PAGES.map(renderItem)}
            </HStack>
          </HStack>
        </Flex>
      </Flex>
    </Box>
  )
}
export default Navbar
