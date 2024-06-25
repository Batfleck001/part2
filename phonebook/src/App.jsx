import React, { useEffect, useState } from 'react'
import axios from "axios"
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Number from './components/Number'
import personService from  './service/Persons'


const App = () => {

  const [persons, setpersons] = useState([])

  useEffect(()=>{
    personService.getAll()
    .then(contacts => setpersons(contacts))
    .catch(err => console.log("Error"))
  },[])


  
  return (
    <>
      <h2>Phonebook</h2>
      <Filter persons = {persons}/>
      <h3>Add a new</h3>
      <PersonForm setpersons={setpersons} persons = {persons}/>
      <h3>Number</h3>
      <Number persons={persons} setpersons={setpersons}/>
    </>
  )
}

export default App