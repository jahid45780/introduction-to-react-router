import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    const {name,email,phone,website,address}= user;
    return (
        <div>
           <h2>Details About user: {name} </h2> 
           <p>email: {email} </p>
            <p>phone: {phone} </p>
            <p>webSite: {website}  </p>
            <p>City:{address.city} </p>
        </div>
    );
};

export default UserDetails;