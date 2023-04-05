import './App.css';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// components
import Navbar from './components/Navbar';

//pages
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';

function App() {
  return (
    <div className="App">
      <h1>Context API</h1>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/product' element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
