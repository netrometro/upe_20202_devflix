const Types = {
  LOGIN: '@user/login',
  LOGOUT: '@user/logout',
}

/**
 * @typedef User
 * @property {string} name
 * @property {string} email
 * @property {string} token
 */

/**
 * @typedef {{type: @user/login, payload: User}} LoginAction
 * @typedef {{type: @user/logout}} LogoutAction
 */

const Actions = {
  /**
   *
   * @param {User} user
   * @returns LoginAction
   */
  login: (user) => ({type: Types.LOGIN, payload: user}),

  /**
   *
   * @returns LogoutAction
   */
  logout: () => ({type: Types.LOGOUT}),
}
/**
 * @typedef {User} UserReducerState
 */
const INITIAL_STATE = {
  name: undefined,
  email: undefined,
  token: undefined,
}

/**
 * 
 *{
    "timestamp": "2021-08-17T13:03:05.835",
    "status": 200,
    "statusText": "OK",
    "error": false,
    "response": {
        "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6IjEiLCJpc3MiOiJub21lLWVtaXNzb3IiLCJpZCI6IjEiLCJleHAiOjE2MjkyMDcxODUsImVtYWlsIjoibHVpei5tYXRpYXNAdXBlLmJyIn0.uNiRdIdhCxEagiN_J4YHzrYYfZ0d9sZbj98OFEJCJ3I",
        "claims": {
            "email": "luiz.matias@upe.br",
            "roles": "1",
            "id": "1"
        }
    }
}
 */

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.LOGIN: {
      const {payload: user} = action

      return {...user}
    }

    case Types.LOGOUT: {
      return {...INITIAL_STATE}
    }

    default: {
      return state
    }
  }
}

userReducer.initialState = INITIAL_STATE
userReducer.actions = Actions

export default userReducer
