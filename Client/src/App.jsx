import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About';
import Common from './pages/Common'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Common/>}>
          <Route path='home' element={<Home/>}/>
          <Route path='about' element={<About/>}/>
        </Route>
      </Routes>

    </>
  )
}

export default App
