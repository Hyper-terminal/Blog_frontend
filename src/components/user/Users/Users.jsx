import React from 'react';
import { list } from '../apiUrl';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Link } from 'react-router-dom';
import "./Users.scss";
import defaultProfile from "../../../assets/avatar.png";

const Users = () => {

    const [users, setUsers] = React.useState([])

    React.useEffect(() => {
        list()
            .then(data => {
                if (data.error) {
                    console.log("Error")
                } else {
                    setUsers(data);
                }
            })
    }, []);


    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Users</h1>

            <div className='card-container'>
                {
                    users.map((item, i) => {
                        return (

                            <Card key={i} sx={{ maxWidth: 250 }}>

                                <img src={defaultProfile} alt="logo" />
                                <CardContent>
                                    <h2 className='card-title'>{item.name}</h2>
                                </CardContent>
                                <Link className="card-button" to={`/user/${item._id}`}>View Profile</Link>
                            </Card>

                        )
                    })
                }

            </div>

        </div>
    )
}

export default Users;