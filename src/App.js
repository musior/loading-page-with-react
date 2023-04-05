import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Aside from './components/Aside';
import SectionOffer from './components/SectionOffer';
import BoxOffer from './components/BoxOffer';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Aside />
      <SectionOffer>
        <BoxOffer />
      </SectionOffer>
      <Footer />
    </>
  );
}

export default App;
