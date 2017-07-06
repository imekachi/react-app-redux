import React from 'react'
import ReactDOM from 'react-dom'
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

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()