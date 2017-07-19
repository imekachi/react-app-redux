import { combineReducers } from 'redux'

import todos from './todosReducer'
import user from './userReducer'

export default combineReducers({
  todos,
  user
})