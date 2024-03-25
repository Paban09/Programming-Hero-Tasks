import { useState } from "react"

const useInputState = (defaultVSlue=null)=>{
    const [value,setValue]=useState(defaultVSlue);

    // const handleChange=(event)=>{
    //     setValue(event.target.value);
    // }

    const onChange=(event)=>{
        setValue(event.target.value);
    }
    return {
        value,
        onChange
    };
}

export default useInputState;