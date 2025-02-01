import React, { createContext, useState } from 'react';

const userContext = createContext();

const UserProvider = ({children}) => {
    const [Username, setusername] = useState({});
    // console.log("userdetails is these ",Username)
    const [UserLogo,setUserLogo] = useState({
        firstword: '',
        lastname: ''
    });
    // console.log(UserLogo)
    return (
        <userContext.Provider value={{UserLogo,setUserLogo,setusername,Username}}>
            {children}
        </userContext.Provider>
    );
};

export { userContext };
export default UserProvider;
