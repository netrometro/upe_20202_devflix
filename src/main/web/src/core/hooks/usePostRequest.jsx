/* eslint-disable no-unused-vars */
import {useMutation, UseMutationOptions, UseMutationResult} from 'react-query'
import {AxiosResponse} from 'axios'
import {Api} from 'core/services'

/**
 *
 * @param {string} url
 * @param {UseMutationOptions<AxiosResponse<any>, unknown, void, unknown>} options
 *
 * @returns UseMutationResult
 */
const usePostRequest = (url, options = {}) => {
  return useMutation((args) => {
    const {config = {}, ...data} = args ?? {}

    return Api.post(url, data, config)
  }, options)
}

export default usePostRequest
