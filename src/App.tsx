import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './home'
import { LoginPage } from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'
import ButtonPage from './pages/ButtonPage'
import UsersPage from './pages/UsersPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/buttons" element={<ButtonPage />} />
        <Route path="/users" element={<UsersPage />} />
      </Routes>
    </BrowserRouter>
  )
}
