import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/weatherStyle.css'
import { WeatherApp } from './weatherApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WeatherApp />
  </React.StrictMode>,
)
