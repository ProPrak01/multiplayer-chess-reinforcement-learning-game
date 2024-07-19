import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import socket from "../../socket/socketService.js";

function RoomSelection() {
  const [roomName, setRoomName] = useState("");
  const navigate = useNavigate();

  const handleCreateRoom = () => {
    socket.emit("createRoom", roomName);
    socket.on("roomCreated", (createdRoomName) => {
      navigate(`/OnlineGame?roomName=${createdRoomName}`);
    });
  };

  const handleJoinRoom = () => {
    socket.emit("joinRoom", roomName);
    socket.on("roomJoined", (joinedRoomName) => {
      navigate(`/OnlineGame?roomName=${joinedRoomName}`);
    });
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-xl font-bold mb-4">Create or Join a Room</h2>
        <input
          type="text"
          placeholder="Enter room name"
          value={roomName}
          onChange={(e) => setRoomName(e.target.value)}
          className="block w-full border border-gray-300 rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:border-gray-500"
        />
        <button
          onClick={handleCreateRoom}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-2"
        >
          Create Room
        </button>
        <button
          onClick={handleJoinRoom}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Join Room
        </button>
      </div>
    </div>
  );
}

export default RoomSelection;
