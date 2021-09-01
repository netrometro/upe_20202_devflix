import { useCallback } from "react";
import usePutRequest from "../usePutRequest";

const useUpdateVideo = (
  { categoryId, metadata },
  options = {}
) => {
  const {
    mutate: doUpdate,
    data: response,
    ...rest
  } = usePutRequest(`/v1/video/${categoryId}`, options);

  const updateVideo = useCallback(() => {
    doUpdate({
      metadata
    });
  }, [doUpdate, metadata]);

  return [{ response: response?.data?.data, ...rest }, { updateVideo }];
}

export default useUpdateVideo