import PropTypes from 'prop-types';

const User = ({user}) => {
    const {id,name,email,phone}=user;
    const userStyle={
        border:'2px solid red',
        padding:'15px',
        borderRadius:'20px',
       
    }
    return (
        <div style={userStyle}>
            <p>{id} </p>
            <p>{name}</p>
            <p>{email}</p>
            <p>{phone}</p>
        </div>
    );
};

User.propTypes = {
    user:PropTypes.object
}
export default User;