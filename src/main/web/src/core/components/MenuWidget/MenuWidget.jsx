import React from 'react'
import {Menu as ChakraMenu, Flex, Link, useDisclosure} from '@chakra-ui/react'
import {HamburgerIcon} from '@chakra-ui/icons'
import {PersonAdd, Info, ExitToApp} from '@material-ui/icons'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {useTheme, useUser} from 'core/hooks'
import NextLink from 'next/link'

import MenuButton from './Button'
import MenuItem from './Item'
import MenuList from './List'
import IconButton from '../IconButton'
import Text from '../Text'
import { ModalUser } from 'core/modals'

const MenuWidget = (props) => {
  const [{isLogged, name: userName, email: userEmail}] = useUser()
  const {colors} = useTheme()
  const iconStyle = {color: colors.primary}
  const {
    isOpen: isUserOpen,
    onOpen: onUserOpen,
    onClose: onUserClose,
  } = useDisclosure()

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
        {!isLogged && (
          <>
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
          </>
        )}
        {isLogged && (
          <>
            <MenuItem icon={<AccountCircleIcon style={iconStyle}/>} onClick={onUserOpen}>
              <Text>
                {userName}
              </Text>
                
              <Text fontSize="xs">
                {userEmail}
              </Text>
            </MenuItem>
            <ModalUser isOpen={isUserOpen} onClose={onUserClose}/>
          </>
        )}
        
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
