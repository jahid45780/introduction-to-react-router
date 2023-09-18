import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <span>my website</span>
            <nav className=" text-orange-400" >
                <Link className=" mr-3" to='/' >Home</Link>
                <Link className=" mr-3" to='/about' >About</Link>
                <Link className=" mr-3" to='/contact' >Contact Us</Link>
                <Link className=" mr-3"to='/user' >Users</Link>
                 </nav>
        </div>
    );
};

export default Header;