/* eslint-disable no-unused-vars */
import {useQuery, UseQueryOptions} from 'react-query'
import {Api} from 'core/services'
import {AxiosRequestConfig} from 'axios'

/**
 *
 * @param {string} url
 * @param {AxiosRequestConfig} configs
 * @param {UseQueryOptions} options
 *
 * @returns UseQueryResult
 */
const useGetRequest = (url, configs = {}, options = {}) => {
  return useQuery({
    ...options,
    queryKey: [url, configs],
    queryFn: () => Api.get(url, configs),
  })
}

export default useGetRequest
