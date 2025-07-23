import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './components/Home'
import { NotFound } from './components/NotFound'

/*

To-do:

    Write tasks specific to 1 component inside of them

  * Not-found page

Format:

  * Proper Documentation
  * Styling with TailwindCSS
  * Process media
  
Setup:

  * Image gathering +
  * Tailwind setup: variables, fonts +
  * Components +

  Fonts:

  Titles - Clash Grotesk
  Buttons, small text - Inter
  Table numeric values - Metrophobic

  Colors:

  title gradient: #B53EA4 (buttons, #963488) + #FC6F32 + #FF4A59
  normal-text: #FFFFFF
  bg-color: #020202
  table-row-name: #8F99B0
  footer-links: #8E8E8E

  Sizes:

  128, 64, 48, 24, 20, 16, 12 

*/

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
