import { useState } from 'react'
import './App.css'
import Loginbtn from './components/Loginbtn'
import Logoutbtn from './components/Logoutbtn'

function App() {

 const [isLoggedIn, setIsLoggedIn] = useState(false)


//  if(!isLoggedIn){
//   return(
//     <Loginbtn/>
//   )
//  }

  return(
    <div>
      {isLoggedIn ? <Loginbtn/> : <Logoutbtn/>}
    </div>
  )

 //  if(isLoggedIn){
//   return (
//     <Loginbtn/>
//   )
//  }else{
//   return <Logoutbtn />
//  }

}

export default App
