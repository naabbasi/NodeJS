import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import AppMenuBar from './components/menubar'

function App() {
  const [count, setCount] = useState(0)

  return (

    <div className="surface-0 text-center">
      <div>
        <AppMenuBar/>
      </div>
      <div className="mb-3 font-bold text-3xl">
        <span className="text-900">One Product, </span>
        <span className="text-blue-600">Many Solutions</span>
      </div>
    </div>

  )
}

export default App