/* eslint-disable no-unused-vars */
import React from 'react'
import useGetRequest from './useGetRequest'

const ENDPOINT = '/v1/category/my'

const useGetMyCategories = (configs = {}, options = {}) => {
  const {data: response, ...rest} = useGetRequest(ENDPOINT, configs, options)
  return [{response: response?.data?.response, ...rest}]
}

export default useGetMyCategories
