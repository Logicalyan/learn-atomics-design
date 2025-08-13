import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './home'
import { LoginPage } from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'
import ButtonPage from './pages/ButtonPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/buttons" element={<ButtonPage />} />
      </Routes>
    </BrowserRouter>
  )
}
