import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserFunction = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {

        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(function (response) {
                // handle success
                setUsers(response.data);
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }, []);
    return (
        <div>
            {users.map((user) => {
                return (
                    <div key={user.id}>
                        <h2>Name :{user.name}</h2>
                        <h2>Username: {user.username}</h2>
                        <h2>Email: {user.email}</h2>
                    </div>
                )
            })}
        </div>
    );
}

export default UserFunction;
