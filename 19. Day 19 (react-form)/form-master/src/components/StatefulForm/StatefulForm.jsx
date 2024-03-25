import { useState } from "react";

const StatefulForm = () => {
    const [name,setName]=useState(null);
    const [email,setEmail]=useState(null);
    const [phone,setPhone]=useState(null);
    const [error,setError]=useState('');
    const handleSubmit=(event)=>{
        event.preventDefault();
        if(phone.length<=11){
            setError('phone number must be 11 character')
        }else{
            setError('');
        }
        console.log(name,email,phone);
    }
    const handleEmailChange=e=>{
        // console.log(e.target.value);
        setEmail(e.target.value);
    }
    const handlePhoneChange=e=>{
        setPhone(e.target.value);
    }
    const handleNameChange=(e)=>{
        setName(e.target.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input onChange={handleNameChange} placeholder="name" name="name" type="text" /><br/>
                <input onChange={handleEmailChange} placeholder="email" name="email" type="text" /><br/>
                <input onChange={handlePhoneChange} placeholder="phone" name="phone" type="text" /><br/>
                
                <input type="submit" value="Submit"/>
            </form>
            {
                error && <p>{error}</p>
            }
        </div>
    );
};

export default StatefulForm;