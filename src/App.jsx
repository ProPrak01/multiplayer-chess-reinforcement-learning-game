import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import NavBar from "./components/Classic/NavBar/NavBar";
import HomeScreen from "./pages/HomeScreen/HomeScreen";
import GameScene from "./pages/Game/GameScene";
import NoPage from "./pages/NoPageFound/NoPage";
import Login from "./pages/auth/Login/Login";
import Signup from "./pages/auth/SignUp/SignUp";
import OnlineGameScene from "./pages/online/OnlineGame";
import GameSelector from "./pages/Game/GameSelector";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<HomeScreen />} />
          <Route
            path="GameScene"
            element={<ProtectedRoute element={<GameScene />} />}
          />
          <Route path="GameSelector" element={<GameSelector />} />
          <Route path="OnlineGame" element={<OnlineGameScene />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
