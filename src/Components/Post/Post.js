import React from 'react';
import { useHistory } from 'react-router-dom';
import { Link} from "react-router-dom";

const Post = (props) => {
    const {id, title, body}=props.post
    // console.log(props);
    const history = useHistory();
    const showComment = id => {
        const url=`/post/${id}`
        history.push(url)
    }

    const styles={
        border:'1px solid gray',
        padding:'5px',
        margin:'10px',
        borderRadius:'10px'
    }
    return (
        <div style={styles}>
            <h3>the number of post is : {id}</h3>
            <h5> Title :  {title}</h5>
            <p>{body}</p>
            <button onClick={()=>showComment(id)}>Show Comments</button>
            <br/>
          
        </div>
    );
};

export default Post;