import { useState } from "react";
import Link from "../Link/Link";
import { IoMenu } from "react-icons/io5";
import { MdOutlineMenuOpen } from "react-icons/md";
const Navbar = () => {

    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about'},
        { id: 3, name: 'Products', path: '/products' },
        { id: 4, name: 'Contact', path: '/contact' }
    ];

    const [open,setOpen]=useState(false);
      
    return (
        <nav className="p-6 md:p-0 bg-orange-200 md:bg-none">

            <div className="md:hidden " onClick={()=>setOpen(!open)}>
                {
                    open===true
                        ?
                            <IoMenu className="text-3xl" />
                        :
                            <MdOutlineMenuOpen className="text-3xl" />
                }
                
            </div>

            <ul className={`${open?'top-14':'-top-60'} duration-1000 md:flex absolute md:static bg-green-200 p-4 shadow-lg md:shadow-none`}>
                {
                    routes.map(route=><Link  key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;