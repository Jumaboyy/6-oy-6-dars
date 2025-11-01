import { useState, createContext } from "react"; 
import './App.css'
import Component1 from './components/Component1';



export const Context = createContext();

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className="App">
      <h2>App</h2>
      <Context.Provider value={{count,setCount}}>
        <Component1  />
      </Context.Provider>
      
   </div> 
  )
}

export default App
