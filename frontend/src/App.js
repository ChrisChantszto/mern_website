
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage.js';
import GalleryPage from './pages/GalleryPage';
import StaffPage from './pages/StaffPage';
import OrderPage from './pages/OrderPage.js';
import Nav from './components/Nav';

import products from './data/products.js';

import TraderPage from './pages/TraderPage.js';
import CreatePage from './pages/CreatePage.js';
import TopicsPage from './pages/TopicsPage.js';

import EditPage from './pages/EditePage.js';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <header className="App-header">
          <h1>Tsz To Chan
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
          </h1>
        </header>

        <Nav />

        <main>
          <section className="App-article">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/staff" element={<StaffPage />} />
                <Route path="/order" element={<OrderPage products={products}/>} />

                <Route path="/traders" element={<TraderPage />} />
                <Route path="/create" element={<CreatePage />} />
                <Route path="/edit/:id" element={<EditPage />} />
                <Route path="/topics" element={<TopicsPage />} />
            </Routes>
          </section>
        </main>
        
        <footer>
          <p><cite>&copy; 2023 Tsz To Chan</cite></p>
        </footer>
        
        </BrowserRouter>
      </div>
    );
  }

export default App;
