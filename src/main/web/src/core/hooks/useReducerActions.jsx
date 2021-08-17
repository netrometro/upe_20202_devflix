import {bindActionCreators} from 'core/utils'
import {useMemo} from 'react'

const useReducerActions = (actions, dispatch) => {
  return useMemo(
    () => bindActionCreators(actions, dispatch),
    [actions, dispatch],
  )
}

export default useReducerActions
