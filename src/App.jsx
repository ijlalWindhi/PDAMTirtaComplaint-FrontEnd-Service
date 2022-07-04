import {Routes, Route} from 'react-router-dom';
import Beranda from './pages/Beranda/Beranda';
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Dukungan from './pages/Dukungan/Dukungan'
import PengaduanSarana from './pages/Pengaduan Sarana/PengaduanSarana';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Beranda />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/dukungan" element={<Dukungan/>}/>
        <Route path="/dukungan/pengaduanSarana" element={<PengaduanSarana/>}/>
      </Routes>
    </>
  )
}

export default App
