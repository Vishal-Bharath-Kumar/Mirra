import '../src/styles/global.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Packages from './pages/Packages';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path='/about' element={<About />}></Route>
    <Route path='/packages' element={<Packages />}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
