import React from 'react'
import {Flex} from '@chakra-ui/layout'
import {ArrowBackIcon, InfoOutlineIcon} from '@chakra-ui/icons'

import {Link} from '@chakra-ui/react'
import {IconButton} from 'core/components'
import NextLink from 'next/link'
import ActionsButtons from './ActionsButtons'
import Leading from './Leading'

const BackBar = () => {
  return (
    <Flex alignItems="center" justifyContent="space-between" bg="black" py={2}>
      <Leading>
        <NextLink href="/" passHref>
          <IconButton
            icon={<ArrowBackIcon boxSize="1.75rem" />}
            bg="black"
            color="secondary"
            size="lg"
            mr={8}
          />
        </NextLink>
      </Leading>
      <ActionsButtons>
        <Link
          href="https://github.com/netrometro/upe_20202_devflix#readme"
          target="_blank">
          <IconButton
            icon={<InfoOutlineIcon boxSize="1.75rem" />}
            bg="black"
            color="secondary"
            size="lg"
          />
        </Link>
      </ActionsButtons>
    </Flex>
  )
}

export default BackBar
