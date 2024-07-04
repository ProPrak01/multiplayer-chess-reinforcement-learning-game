import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import './App.css'

import NavBar from './components/Classic/NavBar/NavBar'
import HomeScreen from './pages/HomeScreen/HomeScreen';
import GameScene from './pages/Game/GameScene';
import NoPage from './pages/NoPageFound/NoPage';

function App() {
  
  return (
    <BrowserRouter>
  <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<HomeScreen />} />
          <Route path="GameScene" element={<GameScene />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
