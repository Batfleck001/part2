import { useEffect, useState } from "react"
import axios from 'axios'
import Filter from "./components/Filter"
import Country from "./components/Country"
import Forecast from "./components/Forecast"

const App = () =>{

  

  const[name,setname] = useState('')
  const[result, setresult] = useState([])
  const[countries,setcountries] = useState([])
  const[countrydetail,setcountrydetail] = useState([])
  const[capital,setcapital] = useState(null)
  const[weather, setweather] = useState([])
  const Weatherkey = import.meta.env.VITE_SOME_KEY

  useEffect(() =>{
    axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
    .then(res => setcountries(res.data))

    
    
    if(name){
      axios.get(`https://studies.cs.helsinki.fi/restcountries/api/name/${name}`)
      .then(res => {
        setcountrydetail([res.data])
      },
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${Weatherkey}`)
      .then(res => setweather([res.data]))
    )
    }
    },[name])
    
  const handleChange = (event) =>{
    const search = event.target.value
    const filtered = search ? countries.filter(val => val.name.common.toLowerCase().includes(search.toLowerCase())) : []
    if(filtered.length === 1){
      setresult([])
      setname(filtered[0].name.common)
      setcapital(filtered[0].capital[0])
    }
    else{
    setresult(filtered)
    }
  }
  const toggleShow = (val) => {
    setcapital(val.capital[0])
    setname(val.name.common)
    setcountrydetail([val])
    setresult([])
  }

  return(
    <div>
      find countries<input onChange={handleChange}/>
      <Filter result={result} toggleShow = {toggleShow}/>
      <Country countrydetail={countrydetail}/>
      <Forecast weather = {weather} capital={capital}/>
    </div>
  )
}

export default App