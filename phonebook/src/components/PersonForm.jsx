import React, { useState } from 'react'
import personService from '../service/Persons.js'
const PersonForm = (props) => {

  const [newName, setnewName] = useState('')
  const [newNumber, setnewNumber] = useState(0)

  const addPerson = (event) =>{
    event.preventDefault()

    const find = props.persons.find(val => val.name.toLowerCase() === newName.toLowerCase())
    if(!find){
      const newpersonObject = {
        name : newName,
        number: newNumber
      }
      personService.create(newpersonObject)
      .then(val => props.setpersons(props.persons.concat(val)))
      
    }
    else{
      alert(`${newName} is already added to the phonebook`)
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