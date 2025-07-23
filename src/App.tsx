import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './components/Home'
import { NotFound } from './components/NotFound'

function App() {

  return (
    <>
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path='home' element={<Navigate to="/" />} />
        </Route>

          {/* add a not found page */}
          <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
