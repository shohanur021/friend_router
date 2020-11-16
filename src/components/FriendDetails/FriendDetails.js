import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetails = () => {
    const {friendId} = useParams();
    const [friend,setfriend] = useState({});
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${friendId}`)
       .then(res => res.json())
       .then(data => setfriend(data))
    },[])
    return (
        <div>
            <p>This is friend details components : {friendId}</p>
            <h3>Name : {friend.name}</h3>
            <p>Email : {friend.email}</p>
            <p>Phone : {friend.phone}</p>
            <p>website : {friend.website}</p>
        </div>
    );
};

export default FriendDetails;