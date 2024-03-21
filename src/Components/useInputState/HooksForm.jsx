import useInputState from "./useInputState";

const HooksForm =()=>{
    // const [name,handleChange] = useInputState('Rojuni Konda')
    const emailState = useInputState('Kamalhasan@gma')
    const handleSubmit =e=>{
        console.log(emailState.value)
        e.preventDefault()
    }
    return (
        <div>
<form onSubmit={handleSubmit}>

{/* <input value={name} onChange={handleChange} type="text" name="name"/><br /><br /> */}
<input {...emailState} type="email" name="email"/><br /><br />
<input type="text" name="phone"  /><br /><br />
<input type="submit" value='Submit' />
</form>
        </div>
    )
}
export default HooksForm;