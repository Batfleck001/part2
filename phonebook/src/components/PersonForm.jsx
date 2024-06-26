
const PersonForm = (props) => {
  return (
    <div>
        <form onSubmit={props.addPerson}>
        <div>
          name : <input onChange={props.handlenamechange}/> <br/>
          number : <input onChange={props.handlenumberchange}/>
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
    </div>
  )
}

export default PersonForm