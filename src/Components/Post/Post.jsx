import { Link, useNavigate } from "react-router-dom";

const Post = ({post}) => {
    const {id,title,body} = post;
    const navigate = useNavigate();

    const handleShowDetails = ()=>{
          navigate(`/post/${id}`);
    }

    return (
        <div className=" m-2 border-8  p-3 " >
            <h4>Post of id {id} </h4>
            <p> {title} </p>
            <p> {body} </p>
            <Link to={`/post/${id}`} > <button className="btn" >Post Detail</button> <br />
            <button onClick={handleShowDetails} >Click the details</button> </Link>
        </div>
    );
};

export default Post;