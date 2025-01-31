import React, { createContext, useState } from 'react';

const userContext = createContext();

const UserProvider = ({children}) => {
    const [Userdetail, setuserdetail] = useState({});
    const [UserLogo,setUserLogo] = useState({
        firstword: '',
        lastname: ''
    });
    console.log(UserLogo)
    return (
        <userContext.Provider value={{UserLogo,setUserLogo}}>
            {children}
        </userContext.Provider>
    );
};

export { userContext };
export default UserProvider;
