import { Link, NavLink } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <div>
            <nav>
                
                {/* <Link to="/">Home</Link> */}
                {/* <Link to="/contact">Contact</Link> */}
                <NavLink to="/contact">Contact</NavLink>
                {/* <Link to="/about">About</Link> */}
                <NavLink to="/about">About</NavLink>

                {/* <Link to="/users">Users</Link> */}
                <NavLink to="/users">Users</NavLink>
                <Link to="/posts">Posts</Link>
                {/* <NavLink to="/posts">Posts</NavLink> */}
                
            </nav>
        </div>
    );
};

export default Header;