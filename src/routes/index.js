import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, ErrorPage } from '../pages'

const WebRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    </BrowserRouter>
  )
}

export default WebRoutes