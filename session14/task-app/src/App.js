import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppNavbar from './components/AppNavbar';
import Hook1 from './pages/Hook1';
import Login from './pages/Login';
import Register from './pages/Register';
import Error from './pages/Error';



function App() {
  return (
  <BrowserRouter>
    <AppNavbar />
      <Routes>
      <Route path='/register' element={<Register />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='*' element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
