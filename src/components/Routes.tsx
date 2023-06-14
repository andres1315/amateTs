import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { Dashboard } from '../pages/Dashboard'
import { NotFound } from '../pages/NotFound'
import { UserProvider } from '../context/user'

export const RoutesList: React.FC = () => {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  )
}
