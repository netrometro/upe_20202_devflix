import React from 'react'
import {Flex} from '@chakra-ui/layout'
import {ArrowBackIcon, InfoOutlineIcon, Link} from '@chakra-ui/icons'

import Leading from './Leading'
import {IconButton} from 'core/components'
import ActionsButtons from './ActionsButtons'

const BackBar = () => {
  return (
    <Flex alignItems="center" justifyContent="space-between" bg="black" py={2}>
      <Leading>
        <Link href="/" passHref>
          <IconButton
            icon={<ArrowBackIcon boxSize="1.75rem"/>}
            bg="black"
            color="secondary"
            size="lg"
            mr={8}
          />
        </Link>
      </Leading>
      <ActionsButtons>
        <Link href="https://github.com/netrometro/upe_20202_devflix#readme" target="_blank">
          <IconButton
            icon={<InfoOutlineIcon boxSize="1.75rem"/>}
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
