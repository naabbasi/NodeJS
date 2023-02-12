import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

//theme
import "primereact/resources/themes/bootstrap4-light-purple/theme.css";     
    
//core
import "primereact/resources/primereact.min.css";

//icons
import "primeicons/primeicons.css";

import "primeflex/primeflex.min.css"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
