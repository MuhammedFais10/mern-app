import { useState } from 'react'
import axios from 'axios'
// import { response } from 'express'

function App() {
const [name, setName]= useState('')


const handlesubmit = (e)=>{
  e.preventDefault()
  console.log(name);
  axios.post("http://localhost:7777/new",{name})
  .then(response => {
    setName(response.data);
    })
  .catch(error => {
    console.error("There was an error!", error);
  });
}
  return (
    <>
      <div>
        <form>
          <input type='text' 
            value={name}
          onChange={(e) => setName(e.target.value)}/>
          <button type='button' onClick={handlesubmit}>submit</button>
       
        </form>
        {name && <p>Submitted Name: {name}</p>} 
      </div>
    </>
  )
}

export default App
