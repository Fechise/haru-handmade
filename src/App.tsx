import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Product from './pages/Product';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './components/organisms/Header/Header';
import './App.scss';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />

        <div className="scroll-area">
          <main className="container" style={{ paddingTop: '40px', paddingBottom: '40px' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/product/:id" element={<Product />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
