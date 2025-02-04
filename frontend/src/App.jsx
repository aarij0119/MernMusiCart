import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import ViewCart from './components/ViewCart';
import Admin from './components/Admin';
import Admindashboard from './components/Admindashboard';
import AdminUser from './components/AdminUser';
import Setting from './components/Setting';
import Protective from './components/Protective';


const App = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path='/login' element={<Login />} />
                    <Route path='/' element={<Register />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/viewCart' element={<ViewCart />} />
                    <Route path='/adminlogin' element={<Admin />} />
                    <Route path='admindashboard' element={<Admindashboard />}>
                        <Route path='users' element={<AdminUser />} />
                        <Route path='setting' element={<Setting />} />
                    </Route>
                    <Route path='/protective' element={<Protective/>}/>
                </Routes>
            </Router>
        </div>
    );
};

export default App;
