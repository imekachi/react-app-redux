import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import { applyMiddleware, createStore } from 'redux'
// import { applyMiddleware, combineReducers, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

import App from './App'
import registerServiceWorker from './registerServiceWorker'

import { injectGlobal } from 'styled-components'

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: Tahoma, sans-serif;
    box-sizing: border-box;
  }
  
  * {
    box-sizing: inherit;
  }
`
// const userReducer = (state = {}, action) => {
//   switch (action.type) {
//     case 'CHANGE_NAME': {
//       state = { ...state, name: action.payload }
//       break
//     }
//     case 'CHANGE_AGE': {
//       state = { ...state, age: action.payload }
//       break
//     }
//     default: {
//       break
//     }
//   }
//   return state
// }

const initialSate = {
  fetching: false,
  fetched: false,
  users: [],
  error: null,
}
const reducer = (state = initialSate, action) => {
  switch (action.type) {
    case 'FETCH_USERS_START': {
      // this is equivalent to Object.assign({}, state, {fetching: true})
      // you don't mutate the state object
      return { ...state, fetching: true }
    }
    case 'FETCH_USERS_ERROR': {
      return { ...state, fetching: false, error: action.payload }
    }
    case 'RECEIVE_USER': {
      return {
        ...state,
        fetching: false,
        fetched: true,
        users: action.payload,
      }
    }
    default: {
      break
    }
  }
  return state
}
// const reducers = combineReducers({
//   user: userReducer,
//   fetch: fetchReducer,
// })

const middleware = applyMiddleware(thunk, createLogger())
const store = createStore(reducer, middleware)

// store.subscribe(() => {
//   console.log('store change', store.getState())
// })

// store.dispatch({ type: 'CHANGE_NAME', payload: 'mek' })
// store.dispatch({ type: 'CHANGE_AGE', payload: 25 })

store.dispatch((dispatch) => {
  dispatch({ type: 'FETCH_USERS_START' })
  axios.get('http://rest.learncode.academy/api/mekachi/users')
    .then((response) => {
      dispatch({ type: 'RECEIVE_USERS', payload: response.data })
    })
    .catch((err) => {
      dispatch({ type: 'FETCH_USERS_ERROR', payload: err })
    })
})

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()