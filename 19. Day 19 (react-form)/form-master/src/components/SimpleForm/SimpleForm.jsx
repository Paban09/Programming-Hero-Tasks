
const SimpleForm = () => {
    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log(event.target.name.value);
        console.log(event.target.email.value);
        console.log(event.target.phone.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input placeholder="name" name="name" type="text" /><br/>
                <input placeholder="email" name="email" type="text" /><br/>
                <input placeholder="phone" name="phone" type="text" /><br/>
                
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
};

export default SimpleForm;