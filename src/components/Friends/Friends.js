import React from 'react';
import { Link } from 'react-router-dom';

const Friends = (props) => {
    const {name,email,id} = props.friend;
    const friendStyle = {
        border : "1px solid purple",
        margin : "20px",
        pading : "20px",
        borderRadius : "20px",
        padding :"10px"
    }
    return (
        <div style={friendStyle }>
            <h2>Name : {name}</h2>
            <p>Email : {email}</p>    
            <Link to={`/friend/${id}`}>
                <button> Show details of id:{id}</button>
            </Link>      
        </div>
    );
};

export default Friends;