import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Viewproduct from './context/Viewproduct.jsx'
import UserProvider from './context/UserProvider.jsx'

createRoot(document.getElementById('root')).render(
  <UserProvider>
  <Viewproduct>
    <App />
  </Viewproduct>
  </UserProvider>

)
