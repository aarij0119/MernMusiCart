import React, { createContext, useEffect, useState } from 'react';

const userContext = createContext();

const UserProvider = ({ children, currentUsername }) => {
    const [Username, setusername] = useState('');
    const [UserLogo, setUserLogo] = useState({
        firstword: '',
        lastname: ''
    });

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        const storedLogo = JSON.parse(localStorage.getItem('logo'));

        if (storedUser && storedUser.username) {
            setusername(storedUser.username);
            setUserLogo({
                firstword: storedLogo.firstword,
                lastname: storedLogo.lastname
            });
            // console.log("User and logo loaded from local storage:", storedUser, storedLogo);
        } 
    }, [currentUsername]);

    return (
        <userContext.Provider value={{ UserLogo, setUserLogo, setusername, Username }}>
            {children}
        </userContext.Provider>
    );
};

export { userContext};
export default UserProvider;
