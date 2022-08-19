import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { isAuthenticated } from '../../auth';
import { read } from '../apiUrl';
import defaultProfile from "../../../assets/avatar.png";
import Delete from '../delete profile/Delete';

const Profile = () => {
    const { userId } = useParams();
    const [userDetails, setUserDetails] = React.useState({
        user: "",
        redirectToSignin: false
    });

    React.useEffect(() => {
        read(userId, isAuthenticated().token)
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

            <img src={defaultProfile} height="100" width="100" alt="Profile Image" />
            <p>Name: {userDetails.user.name}</p>
            <p>Email: {userDetails.user.email}</p>
            <p>Joined: {new Date(userDetails.user.created).toDateString()}</p>


            {/* edit and delete button */}
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