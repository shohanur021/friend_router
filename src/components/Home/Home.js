import React from 'react';
import { useEffect, useState } from 'react';
import Friends from '../Friends/Friends';



const Home = () => {

    const [friends,setfriends] = useState([]);
    useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setfriends(data))
},[])

    return (
        <div>
            <h3>Friends : {friends.length}</h3>
        {
        friends.map(fr => <Friends friend={fr}></Friends>)
        }
        </div>
    );
};

export default Home;