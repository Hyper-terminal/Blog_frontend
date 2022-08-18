import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { isAuthenticated } from '../../auth';

const Profile = () => {
    const { userId } = useParams();
    const [userDetails, setUserDetails] = React.useState({
        user: "",
        redirectToSignin: false
    });

    React.useEffect(() => {
        fetch(`/user/${userId}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${isAuthenticated().token}`
            }
        }).then(res => res.json())
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

        </div>
    )
}

export default Profile