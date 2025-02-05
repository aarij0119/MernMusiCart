import { Link, Outlet } from 'react-router-dom';

const Admindashboard = () => {
  return (
    <div className="bg-gray-100">
      <div className="flex h-screen">
        <div className="bg-blue-800 text-white w-1/5 flex flex-col">
          <div className="p-4 text-center font-bold text-2xl">Admin Dashboard</div>
          <ul className="mt-6">
           <Link to='dashboard'>
           <li className="p-4 hover:bg-blue-700 cursor-pointer">Dashboard</li>
           </Link>
            <Link to="users">
              <li className="p-4 hover:bg-blue-700 cursor-pointer">Users</li>
            </Link>
            <Link to='setting'>
            <li className="p-4 hover:bg-blue-700 cursor-pointer">Settings</li>
            </Link>
            <Link to={'logout'}>
            <li className="p-4 hover:bg-blue-700 cursor-pointer">Logout</li>
            </Link>
          </ul>
        </div>
        <div className="flex-1 flex flex-col">
          <header className="bg-white p-4 shadow-md">
            <h1 className="text-xl font-bold">Welcome, Admin</h1>
          </header>
          <main className="flex">
          <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Admindashboard;
