import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import Nice from './Nice.jsx'
import Nav from './assets/components/Navbar/Nav.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    <Nice />
    <Nav />
    
    

  
  </StrictMode>,
)
