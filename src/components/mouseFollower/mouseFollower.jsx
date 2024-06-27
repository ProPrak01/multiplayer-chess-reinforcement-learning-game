import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Pieces from '../pieces/pieces';
import './mouseFollower.css';

const MouseFollower = () => {
    const currentDragPiece = useSelector((state) => state.dragPiece);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePosition({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    if (currentDragPiece.pieceId == null) {
       // console.log("not assigned!!")
        return null;
        
    }

    return (
        <div
            className="mouse-follower"
            style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }}
        >
            <Pieces pieceId={currentDragPiece.pieceId} color={currentDragPiece.color} />
        </div>
    );
};

export default MouseFollower;