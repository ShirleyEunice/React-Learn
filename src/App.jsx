import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import CounterComponent from './component/CounterComponent'
import ToggleComponent from './component/ToggleComponent'
import CharacterCounter from './component/CharacterCounter'
import PasswordToggle from './component/PasswordToggle'
import UserList from './component/UserList'
import TodoApp from './component/TodoApp'
import SearchFilter from './component/SearchFilter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <CounterComponent/> */}
    {/* <ToggleComponent/> */}
    {/* <CharacterCounter/> */}
    {/* <PasswordToggle/> */}
    {/* <UserList/> */}
    {/* <TodoApp/> */}
    <SearchFilter/>
    </>
  )
}

export default App
