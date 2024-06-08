import React from 'react'
import Part from './Part'


const Content = (props) =>{
    return(
      <div>
        {props.parts.map(val => <Part part={val.name} exercise={val.exercises}/>)}
      </div>
    )
  }

export default Content