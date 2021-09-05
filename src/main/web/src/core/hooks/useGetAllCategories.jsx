import useGetRequest from './useGetRequest'

const ENDPOINT = '/v1/category'

const useGetAllCategories = (configs = {}, options = {}) => {
  const {data: response, ...rest} = useGetRequest(ENDPOINT, configs, options)
  return [{response: response?.data?.response, ...rest}]
}

export default useGetAllCategories
