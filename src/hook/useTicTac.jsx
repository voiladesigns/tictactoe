import React from "react";
import { useState } from "react";
const initialboard = Array(9).fill(null);

export const useTicTac=()=>{
    const [board, setBoard] = useState(initialboard);
    const [isXNext, setIsXNext] = useState(true);

    const winningPattern = [
        [0,1,2],
        [0,4,8],
        [0,3,6],
        [2,4,6],
        [2,5,8],
        [3,4,5],
        [6,7,8],
        [1,4,7],
    ]
    const calculateWinner = (currentBoard) => {
        for(let i=0;i<winningPattern.length; i++){
            const [a,b,c] = winningPattern[i];
            if(currentBoard[a] && currentBoard[a]===currentBoard[b] && currentBoard[a]===currentBoard[c])
                return currentBoard[a];
        }
        return null;
    }
const getStatusMessage = () => {
    const winner = calculateWinner(board);
    if(winner) return `Player ${winner} is the winner!!`
    if(!board.includes(null)) return `This is draw!`;
    return `Player ${isXNext ? "X" : "Y"} turn`;
}    
const resetGame = () => {
    setBoard(initialboard);
    setIsXNext(true);
}
const handleClick = (index) => {
    //check winner
    const winner = calculateWinner(board);
    if(winner || board[index]) return;
    const newBoard = [...board];
    newBoard[index] = isXNext? "X" :"O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
}    
return {board, handleClick, calculateWinner, resetGame,getStatusMessage};
}