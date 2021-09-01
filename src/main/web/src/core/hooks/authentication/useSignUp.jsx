import { useCallback } from "react";
import usePostRequest from "../usePostRequest";

const SIGN_UP_ENDPOINT = "/v1/authentication/signup";

const useSignUp = ({ name, email, password }) => {
  const {
    mutate: doSignUp,
    data: response,
    ...rest
  } = usePostRequest(SIGN_UP_ENDPOINT);

  const requestSignUp = useCallback(() => {
    doSignUp({ name, email, password });
  }, [name, email, password, doSignUp]);

  return [{ response, ...rest }, { requestSignUp }];
};

export default useSignUp;
