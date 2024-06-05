import { useState } from 'react'
import axios from 'axios'

function App() {
const [name, setName]= useState("")

const handlesubmit = (e)=>{
  e.preventDefault()
  console.log(name);
  axios.post("http://localhost:3000/new/add",{name})
}
  return (
    <>
      <div>
        <form>
          <input type='text' onChange={e => setName(e.target.value)}/>
          <button onClick={handlesubmit}>submit</button>
        </form>
      </div>
    </>
  )
}

export default App
