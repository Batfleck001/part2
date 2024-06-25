import React, { useState } from 'react'
import personService from '../service/Persons.js'
const PersonForm = (props) => {

  const [newName, setnewName] = useState('')
  const [newNumber, setnewNumber] = useState(0)

  const addPerson = (event) =>{
    event.preventDefault()

    const found = props.persons.find(val => val.name.toLowerCase() === newName.toLowerCase())
    if(!found){
      const newpersonObject = {
        name : newName,
        number: newNumber
      }
      personService.create(newpersonObject)
      .then(val => props.setpersons(props.persons.concat(val)))
      
    }
    else{
      if(confirm(`${found.name} is already added to the phonebook, replace old number with new one ?`)){
        const Changed = {...found, number : newNumber}
        personService
        .update(found.id , Changed)
        .then(res => props.setpersons(props.persons.map(n => n.id === found.id ? Changed : n)))
      }
  }
  setnewName('')
  setnewNumber(0)
  }
    const handlenamechange = (event) =>{
      event.preventDefault()
      setnewName(event.target.value)
    }
    const handlenumberchange = (event) =>{
      event.preventDefault()
      setnewNumber(event.target.value)
    }

  return (
    <div>
        <form onSubmit={addPerson}>
        <div>
          name : <input onChange={handlenamechange}/> <br/>
          number : <input onChange={handlenumberchange}/>
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
    </div>
  )
}

export default PersonForm