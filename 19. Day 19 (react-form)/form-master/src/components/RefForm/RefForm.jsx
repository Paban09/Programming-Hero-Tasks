import { useEffect, useRef } from "react";

const RefForm = () => {
    const nameRef=useRef(null);
    const emailRef=useRef(null);
    const phoneRef=useRef(null);
    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(phoneRef.current.value);
    }
    useEffect(()=>{
        nameRef.current.focus();
    },[])
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef} placeholder="name" name="name" type="text" /><br/>
                <input ref={emailRef} placeholder="email" name="email" type="text" /><br/>
                <input ref={phoneRef} placeholder="phone" name="phone" type="text" /><br/>
                
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
};

export default RefForm;