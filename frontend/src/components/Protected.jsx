import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const Protected = () => {
    const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
    const [checked, setChecked] = useState(false); // New state to indicate the check is complete

    useEffect(() => {
        const fetch = async () => {
            try {
                const response = await axios.get('http://localhost:3000/isadminloggedin', { withCredentials: true });
                console.log("Admin login status fetched:", response.data.loggedIn);
                setIsAdminLoggedIn(response.data.loggedIn);
            } catch (error) {
                console.error('Error fetching admin login status:', error);
            } finally {
                setChecked(true); // Indicate that the check is complete
            }
        };
        fetch();
    }, []);

    console.log("Rendering Protected Component. Initial isAdminLoggedIn:", isAdminLoggedIn);
    console.log("Rendering Protected Component. Checked:", checked);

    if (!checked) {
        // Render a placeholder while the check is being performed
        return <div>Loading...</div>;
    }

    return (
        isAdminLoggedIn ? <Outlet /> : <Navigate to="/adminlogin" />
    );
};

export default Protected;
