import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StateFullForm from './Components/Statefullform/StateFullForm'
import HooksForm from './Components/useInputState/HooksForm'
// import RefForm from './RefForm/RefForm'
// import SimpleForm from './Components/SimpleForm'

function App() {
  

  return (
    <>
    {/* <SimpleForm/> */}
     {/* <StateFullForm></StateFullForm> */}
     {/* <RefForm></RefForm> */}
     <HooksForm></HooksForm>
     
    </>
  )
}

export default App
