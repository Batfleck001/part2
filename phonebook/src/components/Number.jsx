import React from 'react'
import personService from '../service/Persons'


const Number = (props) => {

  const toggleDelete = (id) =>{
    const contact = props.persons.find(n => n.id === id)
  if(confirm(`Delete ${contact.name}`)){
    personService
    .remove(id)
    .then(res => props.setpersons(props.persons.filter(n => n.id !== res.id)))
    .catch(err => console.log(err))
  }
  }

  return (
    <div>{props.persons.map(val => (<div key={val.id}>{val.name} : {val.number} : <button onClick={() => toggleDelete(val.id)}>delete</button> </div>))}</div>
  )
}

export default Number