import React from 'react'
<<<<<<< HEAD
import { Navigate, useParams } from 'react-router-dom'
import { isAuthenticated } from '../../auth';
=======
import { Link, useParams } from 'react-router-dom'
import { isAuthenticated } from '../../auth';
import { read } from '../apiUrl';
import defaultProfile from "../../../assets/avatar.png";
import Delete from '../delete profile/Delete';
>>>>>>> af92f61 (	new file:   src/components/user/delete profile/Delete.jsx)

const Profile = () => {
    const { userId } = useParams();
    const [userDetails, setUserDetails] = React.useState({
        user: "",
        redirectToSignin: false
    });

<<<<<<< HEAD
    React.useEffect(() => {
        fetch(`/user/${userId}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${isAuthenticated().token}`
            }
        }).then(res => res.json())
=======

    React.useEffect(() => {
        read(userId, isAuthenticated().token)
>>>>>>> af92f61 (	new file:   src/components/user/delete profile/Delete.jsx)
            .then(data => {
                if (data.error) {
                    setUserDetails({ redirectToSignin: true })
                } else {
                    setUserDetails({ user: data });
                }
            })
            .catch(err => console.log(err));
    }, [userId])

    if (userDetails.redirectToSignin) {
        return <Navigate to='signin' replace />
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Profile</h1>
<<<<<<< HEAD
            <p>Name: {isAuthenticated().user.name}</p>
            <p>Email: {isAuthenticated().user.email}</p>
=======
            <img src={defaultProfile} height="100" width="100" alt="Profile Image" />
            <p>Name: {userDetails.user.name}</p>
            <p>Email: {userDetails.user.email}</p>
            <p>Joined: {new Date(userDetails.user.created).toDateString()}</p>
>>>>>>> af92f61 (	new file:   src/components/user/delete profile/Delete.jsx)



    {/* edit and delete button */ }
    {
        isAuthenticated().user._id == userDetails.user._id &&
        <>
            <Link to='user/edit'>Edit</Link>
            <Delete userid={userDetails.user._id} />
        </>
    }

        </div >
    )
}

export default Profile