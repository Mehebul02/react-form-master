const SimpleForm =()=>{
    const handleSubmit =e=>{
        e.preventDefault()
            console.log(e.target.name.value)
            console.log(e.target.email.value)
            console.log(e.target.phone.value)
    }
    return(
       
        <div >
            <h1>Simple Form</h1>
            <form onSubmit={handleSubmit}>

                <input  type="text" name="name"/><br /><br />
                <input type="email" name="email"/><br /><br />
                <input type="text" name="phone"  /><br /><br />
                <input type="submit" value='Submit' />
            </form>

        </div>
    )
}
export default SimpleForm;