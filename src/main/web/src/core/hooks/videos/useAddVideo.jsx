import { useCallback } from "react";
import usePostRequest from "../usePostRequest";

const useAddVideo = (
  { categoryId, visibility = 1, metadata },
  options = {}
) => {
  const {
    mutate: doAdd,
    data: response,
    ...rest
  } = usePostRequest(`/v1/video/${categoryId}`, options);

  const addVideo = useCallback(() => {
    doAdd({
      visibility,
      metadata
    });
  }, [doAdd, visibility, metadata]);

  return [{ response: response?.data?.data, ...rest }, { addVideo }];
};

export default useAddVideo;