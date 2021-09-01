import React from "react";
import useGetRequest from "../useGetRequest";

const ENDPOINT = "/v1/video/";

const useGetAllVideos = (configs = {}, options = {}) => {
  const { data: response, ...rest } = useGetRequest(ENDPOINT, configs, options);
  return [{ response: response?.data?.data, ...rest }];
};

export default useGetAllVideos;