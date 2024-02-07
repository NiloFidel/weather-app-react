import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/weatherStyle.css'
import { CookiesDayApp } from './CookiesDayApp'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <CookiesDayApp />
    </React.StrictMode>
  </BrowserRouter>
)
