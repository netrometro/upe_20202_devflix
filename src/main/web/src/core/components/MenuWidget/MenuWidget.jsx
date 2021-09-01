import React from 'react'
import {Menu as ChakraMenu, Flex, Link} from '@chakra-ui/react'
import {HamburgerIcon} from '@chakra-ui/icons'
import {PersonAdd, Info, ExitToApp} from '@material-ui/icons'
import {useTheme} from 'core/hooks'
import NextLink from 'next/link'

import MenuButton from './Button'
import MenuItem from './Item'
import MenuList from './List'
import IconButton from '../IconButton'
import Text from '../Text'

const MenuWidget = (props) => {
  const {colors} = useTheme()
  const iconStyle = {color: colors.primary}

  return (
    <ChakraMenu {...props}>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        color="secondary"
        icon={<HamburgerIcon fontSize={30} />}
        variant="outline"
      />
      <MenuList>
        <NextLink href="/authentication/sign-in" passHref>
          <MenuItem icon={<ExitToApp style={iconStyle} />}>
            Realizar login
          </MenuItem>
        </NextLink>
        <NextLink href="/authentication/sign-up" passHref>
          <MenuItem icon={<PersonAdd style={iconStyle} />}>
            Realizar cadastro
          </MenuItem>
        </NextLink>
        <Link href="https://github.com/netrometro/upe_20202_devflix#readme" target="_blank">
          <MenuItem icon={<Info style={iconStyle} />}>Sobre</MenuItem>
        </Link>
        <Flex flexDirection="column" alignItems="center" mt={10}>
          <Text color="secondary">Versão 0.0.1</Text>
        </Flex>
      </MenuList>
    </ChakraMenu>
  )
}

MenuWidget.Button = MenuButton
MenuWidget.List = MenuList
MenuWidget.Item = MenuItem

export default MenuWidget
