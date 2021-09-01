
//Ver depois

import React from "react";
import useGetRequest from "../useGetRequest";

const useGetVideoByKeyword = (videoId, keyword, configs = {}, options = {}) => {
  const { data: response, ...rest } = useGetRequest(
    `commentaries/search`,
    {
      enabled: videoId && keyword,
      params: { keyword },
      ...configs,
    },
    options
  );

  return [{ response: response?.data?.data, ...rest }];
};

export default useGetVideoByKeyword;