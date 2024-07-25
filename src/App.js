import './App.css';
import Navbar from './components/navbar';
import Header from './components/header'
import Description from './components/description';
import Footer from './components/footer';
import Partners from './components/partners';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <Description></Description>
      <Partners></Partners>
      <Footer></Footer>
    </div>
  );
}

export default App;
