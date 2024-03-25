import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const UserDetails = () => {
    const user=useLoaderData();
    const {userId}=useParams();
    console.log(userId);
    const {name,email,phone}=user;
    const navigate=useNavigate();
    const handleGoBack=()=>{
        navigate(-1);
    }
    return (
        <div>
            <h4>{name}</h4>
            <p>{email}</p>
            <p>{phone}</p>
            <button onClick={handleGoBack}>Go back</button>
        </div>
    );
};

export default UserDetails;