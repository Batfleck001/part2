import React from 'react'

const Footer = (props) =>{
    return(
    <div>
      <p>Number of exercises {props.parts.reduce((sum,val) => sum+ val.exercises,0)}</p>
    </div>)
  }

export default Footer