
const ReuseableForm = ({formTitle,handleSubmit,submitBtnText='Submit',children}) => {

   const handleLocalSubmit=(event)=>{
    event.preventDefault();
    const data={
        name: event.target.name.value,
        email:event.target.email.value,
        phone:event.target.phone.value
    }
    handleSubmit(data);
   }

    return (
        <div>
            <h1>{formTitle} - reuse </h1>
            {
                children
            }
           <form onSubmit={handleLocalSubmit} >
                <input placeholder="name" name="name" type="text" /><br/>
                <input placeholder="email" name="email" type="text" /><br/>
                <input placeholder="phone" name="phone" type="text" /><br/>
                
                <input type="submit" value={submitBtnText}/>
            </form> 
        </div>
    );
};

export default ReuseableForm;