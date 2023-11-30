import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'


function App() {

  return (
    <>
    HEADER
    <diV className="test">
      BLA
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
    </diV>
    FOOTER
    </>
  )
}

export default App
