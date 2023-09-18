import { Link } from "react-router-dom";

const User = ({user}) => {
    const { id, name, email, phone,website } = user;  
    return (
       <div className=" m-2 border-8  p-3 ">
            <h2> {name} </h2>
            <p>email: {email} </p>
            <p>phone: {phone} </p>
            <p>webSite: {website}  </p>
            <Link to={`/user/${id}`} >Show Details</Link>
        </div>
    );
};

export default User;