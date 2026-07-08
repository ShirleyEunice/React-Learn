import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import CounterComponent from './component/CounterComponent'
import ToggleComponent from './component/ToggleComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CounterComponent/>
    <ToggleComponent/>
    </>
  )
}

export default App
