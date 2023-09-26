import React, { lazy, Suspense } from 'react';
import './App.scss';
import AppBar from './components/AppBar';
import Card from './components/Card';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Cart from './components/pages/Cart';
import Favorite from './components/pages/Favorite';

const Data = lazy(() => import('./components/pages/Data'));

function App() {
  return (
    <div className="App">
      <AppBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
        <Route
          path="/Data"
          element={
            <Suspense
              fallback={
                <div>
                  <h1 style={{ color: 'white' }}>загружаем данные........</h1>
                </div>
              }>
              <Data />
            </Suspense>
          }
        />
        <Route path="/Favorite" element={<Favorite />} />
      </Routes>
    </div>
  );
}

export default App;
