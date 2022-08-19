import React from 'react';
import { useNavigate } from 'react-router-dom';
import { isAuthenticated, signout } from '../../auth';
import { remove } from '../apiUrl';

const Delete = (props) => {
    const navigate = useNavigate();

    const deleteProfile = () => {
        let token = isAuthenticated().token;
        let userId = props.userid;
        console.log(userId);
        console.log("userId: " + userId);
        remove(userId, token)
            .then(data => {
                if (data.error) {
                    console.log("error");
                } else {
                    signout(() => navigate("/"));
                }
            })
    }


    const confirmDelete = () => {
        let ans = window.confirm("Are you sure with deleting it?")

        if (ans) {
            deleteProfile();

        }
    }

    return (
        <a style={{ cursor: "pointer" }} onClick={confirmDelete}>Delete</a>
    )
}

export default Delete