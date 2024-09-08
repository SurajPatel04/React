import { useState } from 'react' // effect hook
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [str,setStr] = useState('');

  let [counter, setCounter] = useState(0)

  // let counter = 0;

  const addValue = function(){
    if(counter === 20){
      setStr("You reach max value");
    }else{
      setCounter(prevCounter => prevCounter + 1);
      setCounter(prevCounter => prevCounter + 1);
      setCounter(prevCounter => prevCounter + 1);
      setStr('');
    }
  }
  const RemoveValue = () =>{
    if (counter === 0){
      setStr('You reach lowest Value')
    }else{
      setCounter(counter-1);
      setStr('')
    }
  }

  return (
    <>
      <h1>Hello World</h1>
      <h3>Counter Value: {counter}</h3>
      <h2>{str}</h2>
      <button onClick={addValue}>Add Value{counter}</button>
      <br />
      <button onClick={RemoveValue}>Remove value</button>
    </>
      )
}

export default App
