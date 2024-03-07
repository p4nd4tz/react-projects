import './App.css'
import About from './components/about';
import Footer from './components/footer';
import Home from './components/home';
import Navbar from './components/navbar';
import Services from './components/service';
import Tours from './components/tour';

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Tours />
      <Footer />
    </>
  )
}

export default App
