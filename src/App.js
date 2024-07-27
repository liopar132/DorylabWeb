import './App.css';
import Navbar from './components/navbar';
import Header from './components/header'
import Description from './components/description';
import Footer from './components/footer';
import Partners from './components/partners';
import Services2 from './components/services2';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <Description></Description>
      <Services2></Services2>
      <Partners></Partners>
      <Footer></Footer>
    </div>
  );
}

export default App;
