import React from 'react'

const Filter = (props) => {
  return (
    <div>
    <ul>
    {props.result.map(val => (
        <li>{val.name.common} <button onClick={() => props.toggleShow(val)}>show</button></li>
    ))}
    </ul>
    </div>
  )
}

export default Filter