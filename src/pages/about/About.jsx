import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
function About() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-3xl px-4 py-8 mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-center">About CheckMate</h1>
        <p className="text-lg text-gray-700 mb-8">
          Multiplayer Chess is an online chess platform that allows you to play chess with your friends
          or with other players around the world in real-time. Enjoy the classic game of strategy in a
          modern digital format!
        </p>
        <h2 className="text-2xl font-bold mb-2">Features:</h2>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-8">
          <li>Play chess with friends or random opponents</li>
          <li>Real-time multiplayer gameplay</li>
          <li>Chat with opponents during gameplay</li>
          <li>Leaderboard to track your progress</li>
          <li>Responsive design for desktop and mobile</li>
        </ul>
        <p className="text-lg text-gray-700">
          Multiplayer Chess is built using React for the frontend, Node.js and Socket.IO for real-time
          communication, and integrates with a chess engine for game logic.
        </p>
      </div>
    </div>
    </>
  );
}

export default About;
