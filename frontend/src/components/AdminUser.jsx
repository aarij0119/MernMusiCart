import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AdminUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchusers = async () => {
      try {
        const response = await axios.get('http://localhost:3000/admin/alluser');
        const users = response.data;
        setUsers(users);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    }
    fetchusers();
  }, []);

  console.log(users);

  return (
    <main className="flex-1 p-4">
      <div className="grid grid-cols-3 gap-4">
        {
          users.map((user,idx) => (
            // console.log(user.username)
            <div key={idx} className="bg-white p-6 rounded-lg shadow-md flex flex-col gap-3">
              <h2 className="font-bold text-lg">Username : {user.username}</h2>
              <h5 className='text-sm text-blue-500'>Mobile : {user.mobileNumber}</h5>
              <p className='text-blue-800 font-bold'>Email : {user.emailId}</p>
            </div>
          ))
        }
      </div>
    </main>
  );
};

export default AdminUser;
