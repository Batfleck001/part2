import React from 'react'

const Country = (props) => {

  const border ={
    border : '1px solid black '
  }

  return (
    <div>
        {props.countrydetail.map((val) => (<div>
        <h1>{val.name.common}</h1>
        <p>capital {val.capital[0]}</p>
        <p>area {val.area}</p>
        <h3>Languages</h3>
        <ul>
          {Object.entries(val.languages).map(([key,value]) => (
            <li>{value}</li>
          ))}
        </ul>
        <br/>
        <img src={val.flags.png} style={border}></img>
      </div>))}
    </div>
  )
}

export default Country