import React from 'react'
import ReactDOM from 'react-dom/client'
import { Pages } from './Pages'
import './index.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

Aos.init()



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      
      <Pages/>
      
  </React.StrictMode>,
)