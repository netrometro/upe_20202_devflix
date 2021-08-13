import React from 'react'
import {Menu as ChakraMenu} from '@chakra-ui/react'
import {HamburgerIcon} from '@chakra-ui/icons'
import {PersonAdd, Info, ExitToApp} from '@material-ui/icons'
import {useTheme} from 'core/hooks'

import MenuButton from './Button'
import MenuItem from './Item'
import MenuList from './List'
import IconButton from '../IconButton'

const Menu = () => {
  const {colors} = useTheme()
  const iconStyle = {color: colors.primary}

  return (
    <ChakraMenu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        color="secondary"
        icon={<HamburgerIcon fontSize={30} />}
        variant="outline"
      />
      <MenuList>
        <MenuItem icon={<ExitToApp style={iconStyle} />}>
          Realizar login
        </MenuItem>
        <MenuItem icon={<PersonAdd style={iconStyle} />}>
          Realizar cadastro
        </MenuItem>
        <MenuItem icon={<Info style={iconStyle} />}>Sobre</MenuItem>
      </MenuList>
    </ChakraMenu>
  )
}

Menu.Button = MenuButton
Menu.List = MenuList
Menu.Item = MenuItem

export default Menu
