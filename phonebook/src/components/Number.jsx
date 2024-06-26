import React from 'react'


const Number = (props) => {

  
  return (
    <div>{props.persons.map(val => (<div key={val.id}>{val.name} : {val.number} : <button onClick={() => props.toggleDelete(val.id)}>delete</button> </div>))}</div>
  )
}

export default Number