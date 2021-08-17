import {useContext} from 'react'
import {UserProvider} from 'core/providers'

const useUser = () => {
  const context = useContext(UserProvider.Context)
  if (!context) {
    return new Error('This hook must be wrapped by the UserProvider')
  }

  return context
}

export default useUser
