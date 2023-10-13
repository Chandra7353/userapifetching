import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './User.css';
import { Link, useNavigate, useParams } from 'react-router-dom';

const Userdetails = () => {
    let  navigate =useNavigate()
    const { id } = useParams();
    const [getdata, setgetdata] = useState({});

    useEffect(() => {
        const getalluserdata = async () => {
            try {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
                setgetdata(response.data); 
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        getalluserdata();
    }, [id]); 

   

    return (
        <div className='userdata' >
            <h1>User Details</h1>

            <div className="mainuser">
                <div>
                    <h5>User Data</h5>
                    <p>Name: {getdata.name}</p>
                    <p>Email: {getdata.email}</p>
                    <p>Website: {getdata.website}</p>
                </div>
                <div>
                    <h5>Address</h5>
                    <p>City: {getdata.address?.city}</p>
                    <p>Street: {getdata.address?.street}</p>
                    <p>ZipCode: {getdata.address?.zipcode}</p>
                </div>
                <div>
                    <h5>Company</h5>
                    <p>Name: {getdata.company?.name}</p>
                    <p>Description: {getdata.company?.catchPhrase}</p>
                    <p>Work: {getdata.company?.bs}</p>
                </div>
            </div>
           <button> <Link to="/">Back</Link></button>
        </div>
    );
};

export default Userdetails;
