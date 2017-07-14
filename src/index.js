import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { injectGlobal } from 'styled-components'
import registerServiceWorker from './registerServiceWorker'

import App from './App'
import store from './store'

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

// 1. Wrap the top level component with Provider from react-redux
// 2. Inject store into Provider
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('app-root'))
registerServiceWorker()