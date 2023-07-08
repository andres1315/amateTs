import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { Dashboard } from '../pages/Dashboard'
import { NotFound } from '../pages/NotFound'
import { store } from '../store'
import { Provider } from 'react-redux'

export const RoutesList: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}
