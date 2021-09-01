import {useState, useEffect} from 'react'
import useUser from './useUser'
import useStorage from './useStorage'

import {LOCAL_STORAGES_LOCATIONS} from 'core/utils/constants'

const useToken = () => {
  const [{token}] = useUser()
  const [getItem] = useStorage()
  const [actualToken, setActualToken] = useState('')

  useEffect(() => {
    if (token) {
      setActualToken(token)
      return
    }

    setActualToken(getItem(LOCAL_STORAGES_LOCATIONS.BEARER_TOKEN))
  }, [getItem, token])

  return actualToken
}

export default useToken
