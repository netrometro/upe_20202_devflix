import React, {createContext, useReducer} from 'react'
import {userReducer} from 'core/reducers'
import {useReducerActions} from 'core/hooks'

const UserContext = createContext(null)

const UserProvider = (props) => {
  const [state, dispatch] = useReducer(userReducer, userReducer.initialState)

  const actions = useReducerActions(userReducer.actions, dispatch)

  return <UserContext.Provider value={[state, actions]} {...props} />
}

UserProvider.Context = UserContext

export default UserProvider
