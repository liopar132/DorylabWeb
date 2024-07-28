import './App.css';
import LandingPage from './pages/landing';
import ContactPage from './pages/contact';
import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import { createTheme } from '@mui/material';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
});

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
