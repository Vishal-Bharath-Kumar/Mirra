import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/login/Login'
import MirraAssistant from './pages/mirra_assistant/MirraAssistant';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login />}></Route>
    <Route path='/mirra-assistant' element={<MirraAssistant />}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
