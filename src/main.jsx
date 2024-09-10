import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'




import Header from './assets/components/Header/Header.jsx'
import Works from './assets/components/Works/Works.jsx'
import OfficeWorks from './assets/components/OfficeWorks/OfficeWorks'
import Restaurants from './assets/components/Restaurant/Restaurant.jsx'
import Stats from './assets/components/Stats/Stats.jsx'
import About from './assets/components/About/About.jsx'
import Communicate from './assets/components/Communicate/Communicate.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    
    <Header />
    <Works />
    <OfficeWorks />
    <Restaurants />
    <Stats />
    <About />
    <Communicate />
    
    
    

  
  </StrictMode>,
)
