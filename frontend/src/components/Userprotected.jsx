import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const Userprotected = () => {
    const [loggedin, setloggedin] = useState(false);
     const [checked, setChecked] = useState(false); 
    useEffect(() => {
        const fetchdata = async () => {
            try {
                const response = await axios.get('http://localhost:3000/isuserloggedin',{ withCredentials: true });
                const value = response.data.loggedIn
                // console.log(response.data.loggedIn)
                setloggedin(value);
            } catch (err) {
                console.log(err.message)
            }finally{
                setChecked(true); 
            }
        }
        fetchdata()
    }, [])

    if (!checked) {
        return <div>Loading...</div>;
    }

    return (
        loggedin ? <Outlet /> : <Navigate to='/login'/>
    );

    
}

export default Userprotected