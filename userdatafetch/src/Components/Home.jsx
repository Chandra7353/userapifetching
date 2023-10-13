import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css';
import Pagination from './Pagination';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [user, setuser] = useState([]);
    const [currentpage, setcurrentpage] = useState(1);
    const [postperpage, setpostperpage] = useState(4);
    const [searchTerm, setSearchTerm] = useState(''); 
    const [message, setmessage]=useState()
    const navigate = useNavigate();

    useEffect(() => {
        fetchdata();
    }, []);

    const fetchdata = async () => {
        try{
            let response = await axios.get('https://jsonplaceholder.typicode.com/users');
            setuser(response.data);
          
        }
        catch(error){
          console.log(error.message);
          setTimeout(() => {
            throw(error)
          }, 60000);
          setmessage(error.message)
            
            
        }
       

    };

    const viewdetails = (id) => {
        navigate(`/userdetails/${id}`);
    };

    const lastpostIndex = currentpage * postperpage;
    const firstPostIndex = lastpostIndex - postperpage;

    // Filter users based on the search term
    const filteredUsers = user.filter((show) =>
        show.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const currentpost = filteredUsers.slice(firstPostIndex, lastpostIndex);

    return (
        <div className='homepage' >
          
          <div className='inputbar' >
         
            <input
                type="search"
                name="search"
                id="input"
                placeholder="Search by name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
             
          </div>
          <h1>{message && message}</h1>
          
            <div className="listdetails">
           
                {currentpost.map((show) => {
                    return (
                        <li type="1" key={show.id}>
                            <div className="userdetail">
                                
                                <h4>{show.id}</h4>
                                <h5>Name: {show.name}</h5>
                                <h5>Email: {show.email}</h5>
                                <h5>PhNo: {show.phone}</h5>
                                <button onClick={() => viewdetails(show.id)}>
                                    View More Details
                                </button>
                            </div>
                        </li>
                    );
                })}
            </div>

            <Pagination
                post={filteredUsers.length}
                postperpage={postperpage}
                setcurrentpage={setcurrentpage}
                currentpage={currentpage}
            />
        </div>
    );
};

export default Home;
