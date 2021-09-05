import useGetRequest from '../useGetRequest'

/**
 *
 * @param {'category' | 'video'} commentariesType
 * @param {number} id
 * @param {*} options
 * @returns {[{commentaries}]}
 */
const useGetAllCommentaries = (commentariesType, id, options) => {
  const ENDPOINT = `/v1/commentary/${commentariesType}/${id}`
  const {data: response, ...rest} = useGetRequest(ENDPOINT, {}, options)
  return [{commentaries: response?.data?.response, ...rest}]
}

export default useGetAllCommentaries
