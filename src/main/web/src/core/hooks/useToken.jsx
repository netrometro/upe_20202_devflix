import {useEffect, useState} from 'react'
import {LOCAL_STORAGES_LOCATIONS} from 'core/utils/constants'

import useStorage from './useStorage'
import useUser from './useUser'

const useToken = () => {
  const [actualToken, setActualToken] = useState('')
  const [getItem] = useStorage()
  const [{token: loggedUserToken}] = useUser()

  useEffect(() => {
    const {token = ''} =
      JSON.parse(getItem(LOCAL_STORAGES_LOCATIONS.USER_ACCESS_CREDENTIALS)) ??
      {}

    if (!token) {
      return setActualToken(loggedUserToken)
    }

    return setActualToken(token)
  }, [getItem, loggedUserToken])

  return actualToken
}

export default useToken
