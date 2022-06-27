import {Routes, Route} from 'react-router-dom';
import Beranda from './pages/Beranda/Beranda';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Beranda />} />
      </Routes>
    </>
  )
}

export default App
