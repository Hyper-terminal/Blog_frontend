import React from 'react'
import { useParams } from 'react-router-dom'
import { isAuthenticated } from '../../auth';

const Profile = () => {
    const { userId } = useParams();

    React.useEffect(() => {
        console.log(userId);
    });

    return (
        <div>
            <h1>Profile</h1>
            <p>Name: {isAuthenticated().user.name}</p>
            <p>Email: {isAuthenticated().user.email}</p>
        </div>
    )
}

export default Profile