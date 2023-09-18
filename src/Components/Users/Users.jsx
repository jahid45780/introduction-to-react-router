import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {
    const users = useLoaderData();
    console.log(users)
    return (
        <div>
            <h2>Ours Users {users.length} </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, ex.</p>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
             {
                users.map(user=> <User key={user.id} user={user} ></User> )
             }   
            </div>
        </div>
    );
};

export default Users;

