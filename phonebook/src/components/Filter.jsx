import React from 'react'

const Filter = (props) => {
    return (
    <div>
        Filter shown with : <input onChange={props.handlequery}/>

        {props.filtered.map(val => <p>{val.name} : {val.number}</p>)}
    </div>
  )
}

export default Filter