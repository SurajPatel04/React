import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Navbar'



let myArr =[1,2,3,4]
let obj1 = {
  name: "Suraj",
  password: "1234"
}
function App() {

  return (
    <>
    <h1 className='bg-green-400 p-4 rounded-xl text-black mb-7'>Tailwind Css</h1>

    <Nav name = "Suraj" about="about" arr =  {myArr} obj = {obj1}/>
    <Nav name = "Shubham" about = "about This"/>
    </>
  ) 
}

export default App

