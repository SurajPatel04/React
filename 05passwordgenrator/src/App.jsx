import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [specialCharacters, setSpecialCharacters] = useState(false)
  const [password, setPassword] = useState("r")

  // UseRef Hook
  const passwordRef = useRef(null)

// Password Generator and using useCallback()
  const passwordGen = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed){
      str += "1234567890";
    }
    if (specialCharacters){
      str += "!@#$%^&*()_+{}[]~`:><?/|;";
    }

    for (let i=0; i<length; i++){
      let char = Math.floor(Math.random() * str.length)
      pass += str[char]
    }

    setPassword(pass)

  }, [length, numberAllowed, specialCharacters, setPassword])


  // Copy to Clipborad
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.focus()
    passwordRef.current?.setSelectionRange(0,6)
    window.navigator.clipboard.writeText(password)
  },[password])


  // Use effect function to see change without reloading
  useEffect(()=>{
    passwordGen()
  },[length,numberAllowed, specialCharacters, passwordGen ])

  return (
    <>
    <h1 className='text-center text-3xl my-4'>Password Generatoe</h1>

    {/* Input box and Copy button */}
    <div className='flex w-full max-w-md mx-auto shadow-md rounded-lg  align-middle 
    bg-white my-8 text-orange-800'>
      
      <input className='outline-none w-full py-1 read-only:' 
      type="text" 
      value={password} 
      ref={passwordRef} />

      <button className='bg-blue-700 px-8  py-4 text-white shadow-lg shrink-0' 
      onClick={copyPasswordToClipboard}>Copy</button>
    </div>
    
    {/* range number and SpecialCharacter */}
    <div className='flex text-sm gap-x-2 justify-center'>
      <div className='flex items-center gap-x-1'>

        <input type="range"  
        min={8} 
        max={20} 
        value={length} 
        className='cursor-pointer'
        onChange={(e)=>{setLength(e.target.value)}}/>

        <label>Length: {length}</label>

      </div>
      <div className='flex items-center gap-x-1'>

        <input 
        type="checkbox" 
        defaultChecked={numberAllowed}
        id="numberInput"
        onChange={()=>setNumberAllowed((prev) => ! prev)}/>

        <label htmlFor="">Number</label>  

      </div>
      <div className='flex items-center gap-x-1'>
        <input 
        type="checkbox" 
        defaultChecked={specialCharacters}
        id="specialCharInput"
        onChange={()=>setSpecialCharacters((prev) => ! prev)}
        />

        <label htmlFor="">Special Character</label>

      </div>
    </div>
    </>
  )
}

export default App
