import useInputState from "../../hooks/useInputState";

const HookForm = () => {
    const emailState=useInputState('default');
    //  console.log(emailState);
    const handleSubmit=(event)=>{
        // console.log(name);
        // console.log(emailState.value);
        event.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleSubmit} >
                {/* <input value={name} onChange={handleNameChange} placeholder="name" name="name" type="text" /><br/> */}
                <input {...emailState} placeholder="email" name="email" type="text" /><br/>
                <input placeholder="phone" name="phone" type="text" /><br/>
                
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
};

export default HookForm;