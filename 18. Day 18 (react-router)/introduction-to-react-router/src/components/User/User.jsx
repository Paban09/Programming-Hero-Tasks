import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';

const User = ({user}) => {
    const {id,name,email,phone}=user;
    const navigate=useNavigate();
    const userStyle={
        border:'2px solid red',
        padding:'15px',
        borderRadius:'20px',
       
    }
    const handleShowDetail=()=>{
        navigate(`/user/${id}`);
    }
    return (
        <div style={userStyle}>
            
            <h4>{name}</h4>
            <p>{email}</p>
            <p>{phone}</p>
            <Link to={`/user/${id}`}>Show details</Link>
            <button onClick={handleShowDetail}>Show Detail</button>
        </div>
    );
};

User.propTypes = {
    user:PropTypes.object
}
export default User;