import {Routes, Route} from 'react-router-dom';
import Beranda from './pages/Beranda/Beranda';
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Beranda />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </>
  )
}

export default App
