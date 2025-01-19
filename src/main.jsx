import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Cartprovider } from './Stores/Cart/Cart.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

  <Cartprovider>
  <App/>

  </Cartprovider>
  </React.StrictMode>,
)
