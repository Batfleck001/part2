import { useEffect, useState } from "react"
import axios from 'axios'

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
    if(filtered.length === 1){
      setresult([])
      setname(filtered[0].name.common)
    }
    else{
    setresult(filtered)
    }
  }


  return(
    <div>
      find countries<input onChange={handleChange}/>
      <ul>
      {result.map(val => (
        <li>{val.name.common}</li>
      ))}</ul>
      {countrydetail.map((val) => (<div>
        <h1>{val.name.common}</h1>
        <p>capital {val.capital[0]}</p>
        <p>area {val.area}</p>
        <h3>Languages</h3>
        <ul>
          {Object.entries(val.languages).map(([key,value]) => (
            <li>{value}</li>
          ))}
        </ul>
        <br/>
        <img src={val.flags.png}></img>
      </div>))}
    </div>
  )
}

export default App