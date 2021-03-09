import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link} from "react-router-dom";

const PostDetail = () => {
    const{id}= useParams()
     const [post,setPost]= useState({});

     const{name,email,body}= post;
     useEffect(()=>{
         const url= `https://jsonplaceholder.typicode.com/comments/${id}`
         fetch(url)
         .then(res=> res.json())
         .then(data=> setPost(data))
     },[id])


    return (
        <div>
            <h4>posted id :  {id}</h4>
            <h3>Posted by : {name} </h3>
            <h4>Email :  {email} </h4>
            <p>{body}</p>
            <Link to='/'><button>Go Back</button></Link>
        </div>
    );
};

export default PostDetail;