import { useState } from "react"

const StateFullForm =()=>{
    const [emai,setEmail] = useState(null)
    const handleSubmit =e =>{
        e.preventDefault()
        console.log('sdsad')
    }
    const handleEmailChange =e=>{
        console.log(e.target.value)
        setEmail(e.target.value)

    }
    return (
        <div>
 <form onSubmit={handleSubmit}>

<input  type="text" name="name"/><br /><br />
<input onChange={handleEmailChange} type="email" name="email"/><br /><br />
<input type="text" name="phone"  /><br /><br />
<input type="submit" value='Submit' />
</form>
        </div>
    )
}
export default StateFullForm;