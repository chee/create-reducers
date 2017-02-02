const objectDefault = require('object-with-default-value')

module.exports = function createReducer({reducers = {}, defaultState = {}} = {}) {
  reducers = objectDefault(reducers, state => state)
  return (state = defaultState, action = {}) => (
    reducers[action.type](state, action)
  )
}
