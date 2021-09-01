import useGetRequest from "../useGetRequest";

const useGetCategoryById = (categoryId, configs = {}, options = {}) => {
  const { data: response, ...rest } = useGetRequest(
    `/v1/category/${categoryId}`,
    {
      enabled: Boolean(categoryId),
      ...configs,
    },
    options
  );

  return [{ response: response?.data?.data, ...rest }];
};

export default useGetCategoryById;