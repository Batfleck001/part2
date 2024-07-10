import React, { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Number from './components/Number'
import personService from  './service/Persons'
import Notification from './components/Notification'
import './index.css'

const App = () => {

  const [persons, setpersons] = useState([])
  const [personname, setpersonname] = useState(null)
  const [style, setstyle] = useState(null)
  const [newName, setnewName] = useState('')
  const [newNumber, setnewNumber] = useState(0)
  const [query, setquery] = useState('')

  useEffect(()=>{
    personService.getAll()
    .then(contacts => setpersons(contacts))
    .catch(err => console.log("Error"))
  },[])

  const AddedStyle = {
    color: "darkgreen",
    fontSize: "20px",
    padding: "10px",
    backgroundColor: "lightgreen",
    border: "2px solid darkgreen",
    marginBottom: "10px",
    borderRadius: "10px"
}
const ErrorStyle = {
  color: "red",
  fontSize: "20px",
  padding: "10px",
  backgroundColor: "rgb(250, 192, 192)",
  border: "2px solid red",
  marginBottom: "10px",
  borderRadius: "10px"
}
  

  const addPerson = (event) =>{
    event.preventDefault()

    const found = persons.find(val => val.name.toLowerCase() === newName.toLowerCase())
    if(!found){
      const newpersonObject = {
        name : newName,
        number: newNumber
      }
      personService.create(newpersonObject)
      .then(val => setpersons(persons.concat(val)))

      setpersonname(`Added ${newName}`)
      setstyle(AddedStyle)
      setTimeout(() => {
        setpersonname(null)
        setstyle(null)
      },5000)
    }
    else{
      if(confirm(`${found.name} is already added to the phonebook, replace old number with new one ?`)){
        const Changed = {...found, number : newNumber}
        personService
        .update(found.id , Changed)
        .then(res => setpersons(persons.map(n => n.id === found.id ? Changed : n)))
        .catch(err => {
          setpersonname(`Information of ${found.name} is already remove from the server`)
          setstyle(ErrorStyle)
          setTimeout(() => {
            setpersonname(null)
            setstyle(null)
          },5000)
      })
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




    const toggleDelete = (id) =>{
      const contact = persons.find(n => n.id === id)
    if(confirm(`Delete ${contact.name}`)){
      personService
      .remove(id)
      .then(res => setpersons(persons.filter(n => n.id !== res.id)))
      .catch(err => {
        setpersonname(`Information of ${contact.name} is already remove from the server`)
        setstyle(ErrorStyle)
        setTimeout(() => {
          setpersonname(null)
          setstyle(null)
        },5000)})
    }
    }

    
    

    const handlequery = (event) =>{
        event.preventDefault()
        setquery(event.target.value)
      }

    const filtered = query != '' ? persons.filter(val => val.name.toLowerCase().includes(query.toLowerCase())) : []
  
  


 
  
  return (
    <>
      <h2>Phonebook</h2>
      <Notification message={personname} style={style}/>
      <Filter filtered={filtered} handlequery={handlequery}/>
      <h3>Add a new</h3>
      <PersonForm addPerson={addPerson} handlenamechange={handlenamechange} handlenumberchange={handlenumberchange}/>
      <h3>Number</h3>
      <Number persons={persons} toggleDelete={toggleDelete}/>
      </>
  )
}

export default App