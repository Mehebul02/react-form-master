import { useEffect, useRef, useState } from "react"

const RefForm =()=>{
    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const passwordref = useRef(null)
    const [error,setError] = useState('')
    useEffect(()=>{
        nameRef.current.focus()
    },[])
    const handleSubmit =e=>{
        e.preventDefault()
        if(error.length <5){
            setError('tui 6 ta passwort de')
        }
        else{
            setError('')
        }
        console.log(nameRef.current.value)
        console.log(emailRef.current.value)
        console.log(passwordref.current.value)
    }
    return (
        <div>
             <form onSubmit={handleSubmit}>

<input ref={nameRef}  type="text" name="name"/><br /><br />
<input ref={emailRef} defaultValue={'example@gmail.com'} type="email" name="email"/><br /><br />
<input ref={passwordref} type="password" name="password"  /><br /><br />
<input type="submit" value='Submit' />
{
    error && <p>{error}</p>
}
</form>

        </div>
    )
}
export default RefForm;