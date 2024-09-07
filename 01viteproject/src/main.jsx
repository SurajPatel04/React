import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


// Create a React element
const anotherUser = " Suraj Patel"

const reactElement = React.createElement(
  'a',  // tag name
  {href: "https://google.com", target: "_blank"}, // attributes of a tag
  "click me to visit", // text
  anotherUser
)
createRoot(document.getElementById('root')).render(

  element

)
