import React, { useEffect, useState } from 'react'
import axios from "axios"
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Number from './components/Number'

const App = () => {

  const [persons, setpersons] = useState([])

  useEffect(()=>{
    axios
    .get("http://localhost:3001/persons")
    .then(res => setpersons(res.data))
    .catch(e => console.log("Error :",e))
  },[])
  
  return (
    <>
      <h2>Phonebook</h2>
      <Filter persons = {persons}/>
      <h3>Add a new</h3>
      <PersonForm setpersons={setpersons} persons = {persons}/>
      <h3>Number</h3>
      <Number persons={persons}/>
    </>
  )
}

export default App