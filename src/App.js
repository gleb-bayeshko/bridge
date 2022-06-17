import { Routes, Route } from 'react-router-dom'
import Home from 'pages/HomePage'
import Login from 'pages/LoginPage'
import paths from 'paths'
import './global.css'

const App = () => {
  return (
    <Routes>
      <Route path={paths.login} element={<Login />} />
      <Route path={paths.home} element={<Home />} />
    </Routes>
  )
}

export default App
