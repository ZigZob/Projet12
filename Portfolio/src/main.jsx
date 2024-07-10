import React from 'react'
import ReactDOM from 'react-dom/client'
import './_index.scss'
import { Provider } from "react-redux"
import { store } from './store/index.js'
import App from './containers/App/App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
