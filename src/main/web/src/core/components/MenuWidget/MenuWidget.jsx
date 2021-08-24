import React from 'react'
import {Menu as ChakraMenu, Flex} from '@chakra-ui/react'
import {HamburgerIcon} from '@chakra-ui/icons'
import {PersonAdd, Info, ExitToApp} from '@material-ui/icons'
import {useTheme} from 'core/hooks'

import MenuButton from './Button'
import MenuItem from './Item'
import MenuList from './List'
import IconButton from '../IconButton'
import Text from '../Text'
import Link from 'next/link'

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
        <Link href="/authentication/sign-in" passHref>
          <MenuItem icon={<ExitToApp style={iconStyle} />}>
            Realizar login
          </MenuItem>
        </Link>
        <Link href="/authentication/sign-up" passHref>
          <MenuItem icon={<PersonAdd style={iconStyle} />}>
            Realizar cadastro
          </MenuItem>
        </Link>
        <MenuItem icon={<Info style={iconStyle} />}>Sobre</MenuItem>
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
