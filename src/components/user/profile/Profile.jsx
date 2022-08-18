import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { isAuthenticated } from '../../auth';
import { read } from "../apiUser";

const Profile = () => {
    const { userId } = useParams();
    const [userDetails, setUserDetails] = React.useState({
        user: "",
        redirectToSignin: false
    });


    React.useEffect(() => {
        read(userId, isAuthenticated().jwt.token)
            .then(data => {
                if (data.error) {
                    setUserDetails({ redirectToSignin: true })
                } else {
                    setUserDetails({ user: data });
                }
            })
            .catch(err => console.log(err));
    })

    if (userDetails.redirectToSignin) {
        return <Navigate to='signin' replace />
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Profile</h1>
            <p>Name: {isAuthenticated().user.name}</p>
            <p>Email: {isAuthenticated().user.email}</p>
            <p>Joined on: {new Date(userDetails.user.created).toDateString()}</p>

        </div>
    )
}

export default Profile