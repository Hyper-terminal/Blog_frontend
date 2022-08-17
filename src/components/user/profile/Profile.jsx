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
        let id = userId;
        fetch(`{/user/${id}}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.error) {
                    setUser({ user:'',redirectToSignin: true })
                }
                else {
                    setUser({ user: data, redirectToSignin: false })
                }
            });
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