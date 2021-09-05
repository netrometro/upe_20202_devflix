import {useCallback} from 'react'
import usePostRequest from '../usePostRequest'

/**
 *
 * @param {'category' | 'video'} commentaryType
 * @param {{id: number, text: string}} body
 * @param {*} options
 * @returns {[{response}]}
 */
const useAddCommentary = (commentaryType, {id, text}, options = {}) => {
  const ENDPOINT = `/v1/commentary/${commentaryType}/${id}`
  const {
    mutate: requestAddCommentary,
    data: response,
    ...rest
  } = usePostRequest(ENDPOINT, options)

  const addCommentary = useCallback(() => {
    requestAddCommentary({
      text,
    })
  }, [requestAddCommentary, text])

  return [{response: response?.response?.data, ...rest}, {addCommentary}]
}

export default useAddCommentary
