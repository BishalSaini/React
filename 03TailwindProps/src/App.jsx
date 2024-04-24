import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' 
import Card from './components/Card'

function App() {
  const [counter, setCounter] = useState(25); 

  const addValue=()=>{ 
    setCounter(prevCounter=> prevCounter+1); 
    setCounter(prevCounter=> prevCounter+1);  
    setCounter(prevCounter=> prevCounter+1);  
    setCounter(prevCounter=> prevCounter+1); 
  }
  
  const myObj={ 
    name:"Vishu", 
    age:21,
  }

  return (
    <> 
    
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>    
    <h1>Counter:{counter}</h1> 
    <button onClick={addValue}>Add</button>
    <Card username="Vishu" btnText="Click Me"/> 
    <Card username="Sabaat"/>   
    </>
  )
}

export default App
