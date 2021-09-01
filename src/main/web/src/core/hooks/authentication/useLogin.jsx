import {useCallback} from 'react'
import usePostRequest from '../usePostRequest'

const LOGIN_ENDPOINT = '/v1/authentication/login'

const useLogin = ({email, password}, options = {}) => {
  const {
    mutate: doLogin,
    data: response,
    ...rest
  } = usePostRequest(LOGIN_ENDPOINT, options)

  const requestLogin = useCallback(() => {
    doLogin({email, password})
  }, [email, password, doLogin])

  return [{response: response?.data, ...rest}, {requestLogin}]
}

export default useLogin
