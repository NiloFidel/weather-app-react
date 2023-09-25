import React, { useState } from 'react'

export const WeatherApp = () => {

    const baseUrl = 'https://api.openweathermap.org/data/2.5/weather'
    const apikey = '7aaa961105f460241871f76028a75c6d'
    const [country, setCiudad] = useState('')
    const [WeatherData, setWeatherData] = useState(null)
    const handleCountryChange = (event) => {
        setCiudad(event.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(country.length > 0) fetchClima()
    
    }
    const fetchClima = async() => {
        try {
            const response = await fetch(`${baseUrl}?q=${country}&appid=${apikey}`)
            const data = await response.json()
            setWeatherData(data)
        } catch (error) {
            console.error('ocurrio este problema')
        }
    }
    
    return (
        <div className='container'>
            <h1>Weather App</h1>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder='Input a city like Lima, Cusco, New York ...'
                    type="text"
                    value={country}
                    onChange={handleCountryChange}
                />
                <button type='submit'>Search</button>
            </form>
            {
                WeatherData && (
                    <div>
                        <h1>City: {WeatherData.name}</h1>
                        <p>Temperature: {parseInt(WeatherData.main.temp - 273.15)}°C</p>
                        <p>Weather Description: {WeatherData.weather[0].description}</p>
                        <img src={`https://openweathermap.org/img/wn/${WeatherData.weather[0].icon}@2x.png`} />
                        <p></p>
                    </div>
                )
            }
        </div>
    )
}
