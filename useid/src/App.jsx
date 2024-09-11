import { useState } from 'react';
import Card from './components/Card'
import Button from './components/button'
function App() {
  
  const [count, setCount] = useState(0)

  function handleClick(){
    setCount(count+1)
  }

  return (
    <>
      <Button handleClick={handleClick}></Button>
      <p>Count: {count}</p> 
    </>
  )

};

export default App;
