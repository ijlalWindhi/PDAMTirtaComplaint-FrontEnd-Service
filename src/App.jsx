import {Routes, Route} from 'react-router-dom';
import Beranda from './pages/Beranda/Beranda';
import Login from './pages/Login/Login'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Beranda />} />
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </>
  )
}

export default App
