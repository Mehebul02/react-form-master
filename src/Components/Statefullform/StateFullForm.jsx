import { useState } from "react"

const StateFullForm =()=>{
    const [name , setName] =useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState('')

    // Form submit 
    const handleSubmit =e =>{
        e.preventDefault()
        if(error.length <6){
            setError('Tui 6 ta number diye jaba')
        }
        else{
            setError('')
        }
        console.log(email,password)
    }
    // name change 
    const handleNameChange =e =>{
        console.log(e.target.value)
        setName(e.target.value)
    }
    // email change 
    const handleEmailChange =e=>{
        console.log(e.target.value)
        setEmail(e.target.value)

    }
    // password change 
    const handlePasswordChange =e =>{
        console.log(e.target.value)
        setPassword(e.target.value)


    }
    return (
        <div>
 <form onSubmit={handleSubmit}>

<input onChange={handleNameChange}  type="text" name="name"/><br /><br />
<input onChange={handleEmailChange} type="email" name="email"/><br /><br />
<input onChange={handlePasswordChange} type="password" name="password"  /><br /><br />
<input type="submit" value='Submit' />
{
    error && <p>{error}</p>
}
</form>
        </div>
    )
}
export default StateFullForm;