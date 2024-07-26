import './App.css';
import Navbar from './components/navbar';
import Header from './components/header'
import Description from './components/description';
import Footer from './components/footer';
import Partners from './components/partners';
import LandingPage from './pages/landing';
import ContactPage from './pages/contact';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index  element={<LandingPage/>}/>
          <Route path='contact' element={<ContactPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
