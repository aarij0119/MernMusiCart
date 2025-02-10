import React, { createContext, useEffect, useState } from 'react';

const userContext = createContext();

const UserProvider = ({ children, currentUsername }) => {
    const [Username, setusername] = useState('');
    const [userId, setUserId] = useState('');
    const [UserLogo, setUserLogo] = useState({
        firstword: '',
        lastname: ''
    });
    const [cartData, setCartData] = useState([]);

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        const storedLogo = JSON.parse(localStorage.getItem('logo'));
        const storedUserId = JSON.parse(localStorage.getItem('userId'));
        if (storedUser && storedUser.username) {
            setusername(storedUser.username);
            setUserId(storedUserId);
            setUserLogo({
                firstword: storedLogo.firstword,
                lastname: storedLogo.lastname
            });

            // Load cart data for the logged-in user
            const storedCartData = JSON.parse(localStorage.getItem(`cartData_${storedUserId}`));
            if (storedCartData) {
                setCartData(storedCartData);
            }
        }
    }, [currentUsername]);

    const clearUserData = () => {
        setusername('');
        setUserId('');
        setUserLogo({
            firstword: '',
            lastname: ''
        });
        setCartData([]);
        localStorage.removeItem('user');
        localStorage.removeItem('logo');
        localStorage.removeItem('userId');
        // Clear cart data for the specific user ID
        if (userId) {
            localStorage.removeItem(`cartData_${userId}`);
        }
    };

    return (
        <userContext.Provider value={{ UserLogo, setUserLogo, setusername, Username, userId, setUserId, cartData, setCartData, clearUserData }}>
            {children}
        </userContext.Provider>
    );
};

export { userContext };
export default UserProvider;
