import './App.css';
import Navbar from './components/navbar';
import Header from './components/header'
import Description from './components/description';
import Footer from './components/footer';
import Services from './components/services';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <Description></Description>
      <Services></Services>
      <Footer></Footer>
    </div>
  );
}

export default App;
