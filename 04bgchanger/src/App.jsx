import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Footer from './components/footerbar'

let color = ["green","blue"]

function App() {
  

  return (
    <div>
      <Footer color= {color}/>

    </div>
  )
}

export default App
