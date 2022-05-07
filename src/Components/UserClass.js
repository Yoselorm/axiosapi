import React, { Component } from 'react';

class UserClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => { this.setState({ users: data }) })

    }

    render() {
        return (
            <div>
                {this.state.users.map((user) => {
                    return (
                        <div key={user.id}>
                            <h2>Name: {user.name}</h2>
                            <h2>Username: {user.username}</h2>
                            <h2>Email: {user.email}</h2>
                            <br />
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default UserClass;
