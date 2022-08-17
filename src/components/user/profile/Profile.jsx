import React from 'react'
import { useParams } from 'react-router-dom'
import { isAuthenticated } from '../../auth';

const Profile = () => {
    const { userId } = useParams();
    const [user, setUser] = React.useState({
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
                    setUser({ redirectToSignin: true })
                } else {
                    setUser({ user: data });
                }
            })
            .catch(err => console.log(err));
    })

    return (
        <div>
            <h1>Profile</h1>
            <p>Name: {isAuthenticated().user.name}</p>
            <p>Email: {isAuthenticated().user.email}</p>

        </div>
    )
}

export default Profile