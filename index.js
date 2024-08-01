import React from 'react';
import ReactDOM from 'react-dom';
import { DAppProvider, Mainnet } from '@usedapp/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import Create from './pages/Create';
import Explore from './pages/Explore';
import NFTDetail from './pages/NFTDetail';

const config = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]: 'https://mainnet.infura.io/v3/9a7090ef3f214b8f8d0b0c74b1c73201'
  },
};

ReactDOM.render(
  <React.StrictMode>
    <DAppProvider config={config}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/detail" element={<NFTDetail />} />
        </Routes>
      </BrowserRouter>
    </DAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
