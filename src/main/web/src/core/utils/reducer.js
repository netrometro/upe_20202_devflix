const bindActionCreators = (actions, dispatch) => {
  const bindedActions = {}

  for (const action in actions) {
    if (!Object.prototype.hasOwnProperty.call(actions, action)) {
      continue
    }

    if (typeof actions[action] !== 'function') {
      throw Error('Action creator must be a function')
    }

    bindedActions[action] = (...args) => dispatch(actions[action](...args))
  }

  return bindedActions
}

export default bindActionCreators
