import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Viewproduct from './context/Viewproduct.jsx'

createRoot(document.getElementById('root')).render(

  <Viewproduct>
    <App />
  </Viewproduct>

)
