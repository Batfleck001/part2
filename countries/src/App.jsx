import { useEffect, useState } from "react"
import axios from 'axios'
import Filter from "./components/Filter"
import Country from "./components/Country"

const App = () =>{

  const[name,setname] = useState('')
  const[result, setresult] = useState([])
  const[countries,setcountries] = useState([])
  const[countrydetail,setcountrydetail] = useState([])

  useEffect(() =>{
    axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
    .then(res => setcountries(res.data))
    if(name){
      axios.get(`https://studies.cs.helsinki.fi/restcountries/api/name/${name}`)
      .then(res => {
        setcountrydetail([res.data])
      })
    }
    },[name])
    
  const handleChange = (event) =>{
    const search = event.target.value
    const filtered = search ? countries.filter(val => val.name.common.toLowerCase().includes(search.toLowerCase())) : []
    if(name.length === 0){
      setcountrydetail([])
    }
    if(filtered.length === 1){
      setresult([])
      setname(filtered[0].name.common)
    }
    else{
    setresult(filtered)
    }
  }
  const toggleShow = (val) => {
    setcountrydetail([val])
    setresult([])
  }

  return(
    <div>
      find countries<input onChange={handleChange}/>
      <Filter result={result} toggleShow = {toggleShow}/>
      <Country countrydetail={countrydetail}/>
    </div>
  )
}

export default App