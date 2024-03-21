import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ReusebleForm from './Reusebleform/ReusebleForm'
// import ReusebleForm from './Reusebleform/ReusebleForm'
// import StateFullForm from './Components/Statefullform/StateFullForm'
// import HooksForm from './Components/useInputState/HooksForm'
// import RefForm from './RefForm/RefForm'
// import SimpleForm from './Components/SimpleForm'
<ReusebleForm></ReusebleForm>

function App() {
  const handleSingUpSubmit =data=>{
    console.log('Sing data',data)
  }
  const handleUppdateSubmit =data=>{
   console.log('uppdate data',data)
  }

  return (
    <>
    {/* <SimpleForm/> */}
     {/* <StateFullForm></StateFullForm> */}
     {/* <RefForm></RefForm> */}
     {/* <HooksForm></HooksForm> */}
     <ReusebleForm formTitle={'Sing Up'}
      handleSubmit={handleSingUpSubmit}>
        <h1>Sing Up</h1>
        <p>This is the sing up page</p>
      </ReusebleForm>
     <ReusebleForm formTitle={'Loging Update'} 
     handleSubmit={handleUppdateSubmit}
      submitBtnText='update'>
        <h1>Update Profile</h1>
        <p>This is the profile</p>
      </ReusebleForm>
    
     
    </>
  )
}

export default App
