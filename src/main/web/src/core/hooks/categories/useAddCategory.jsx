import { useCallback } from "react";
import usePostRequest from "../usePostRequest";

const ENDPOINT = "/v1/category";

const useAddCategory = (
  { title, color, visibility },
  options = {}
) => {
  const {
    mutate: doAdd,
    data: response,
    ...rest
  } = usePostRequest(ENDPOINT, options);

  const addCategory = useCallback(() => {
    doAdd({
      title,
      color,
      visibility
    });
  }, [doAdd, title, color, visibility]);

  return [{ response: response?.data?.data, ...rest }, { addCategory }];
};

export default useAddCategory;