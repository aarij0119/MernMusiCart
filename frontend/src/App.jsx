import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import ViewCart from './components/ViewCart';
import Admin from './components/Admin';
import Admindashboard from './components/Admindashboard';
import AdminUser from './components/AdminUser';
import Setting from './components/Setting';
import Protected from './components/Protected';
import AdminLogout from './components/AdminLogout';
import AdminCreateCart from './components/AdminCreateCart';
import Userprotected from './components/Userprotected';
import UserProvider from './context/UserProvider';
import ViewProduct from './context/Viewproduct';

const App = () => {
    const [currentUsername, setCurrentUsername] = useState('');

    // Function to handle user login and set the current username
    const handleUserLogin = (username) => {
        setCurrentUsername(username);
    };

    return (
        <div>
            <Router>
                <UserProvider currentUsername={currentUsername}>
                    <ViewProduct>
                        <Routes>
                            <Route path='/login' element={<Login onLogin={handleUserLogin} />} />
                            <Route path='/' element={<Register />} />
                            <Route path='/' element={<Userprotected/>}>
                                <Route path='home' element={<Home />} />
                                <Route path='viewCart' element={<ViewCart />} />
                            </Route>
                            <Route path='/adminlogin' element={<Admin />} />
                            <Route path='/' element={<Protected />} >
                                <Route path='admindashboard' element={<Admindashboard />}>
                                    <Route path='dashboard' element={<AdminCreateCart/>}></Route>
                                    <Route path='users' element={<AdminUser />} />
                                    <Route path='setting' element={<Setting />} />
                                    <Route path='logout' element={<AdminLogout />}/>
                                </Route>
                            </Route>
                        </Routes>
                    </ViewProduct>
                </UserProvider>
            </Router>
        </div>
    );
};

export default App;
