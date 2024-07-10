import React from 'react'

const Forecast = (props) => {

  return (
    <div>{props.weather.map(val => {
        const img = `https://openweathermap.org/img/wn/${val.weather[0].icon}@4x.png`
        return(
        <>
        <h1>Weather in {props.capital}</h1>
        <p>temperature {(val.main.temp-273.15).toFixed(2)} Celcius</p>
        <img src={img} alt="" />
        <p>wind {val.wind.speed}</p>
        </>
    )})}</div>
  )
}

export default Forecast