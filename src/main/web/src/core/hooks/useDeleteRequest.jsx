/* eslint-disable no-unused-vars */
import {useMutation, UseMutationOptions, UseMutationResult} from 'react-query'
import {AxiosResponse} from 'axios'
import {Api} from 'core/services'
import {useToken} from './utils'

/**
 *
 * @param {string} url
 * @param {UseMutationOptions<AxiosResponse<any>, unknown, void, unknown>} options
 *
 * @returns UseMutationResult
 */
const useDeleteRequest = (url, options = {}) => {
  const token = useToken()

  const personalizedConfig = {
    headers: {Authorization: `Bearer ${token}`},
  }

  return useMutation((args) => {
    const {config = {}, ...data} = args ?? {}

    return Api.delete(url, data, {...config, ...personalizedConfig})
  }, options)
}

export default useDeleteRequest
