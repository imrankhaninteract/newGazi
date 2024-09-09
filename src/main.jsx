import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'




import Header from './assets/components/Header/Header.jsx'
import Works from './assets/components/Works/Works.jsx'
import OfficeWorks from './assets/components/OfficeWorks/OfficeWorks'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    
    <Header />
    <Works />
    <OfficeWorks />
    

  
  </StrictMode>,
)
