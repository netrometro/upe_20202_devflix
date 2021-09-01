import useGetRequest from "../useGetRequest";

const ENDPOINT = "/v1/category/";

const useGetAllCategory = (configs = {}, options = {}) => {
  const { data: response, ...rest } = useGetRequest(ENDPOINT, configs, options);
  return [{ response: response?.data?.data, ...rest }];
};

export default useGetAllCategory;