import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/Notfound'

const App = () => {
  return (
   <>
   <Routes>
    <Route path='/' element={<HomePage></HomePage>} />
        <Route path='*' element={<NotFoundPage></NotFoundPage>} />

   </Routes>
   </>

  )
}

export default App
