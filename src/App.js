import './App.css';
import LandingPage from './pages/landing';
import ContactPage from './pages/contact';
import { BrowserRouter, Route,  Routes } from 'react-router-dom';

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
