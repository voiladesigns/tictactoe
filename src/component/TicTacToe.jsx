import React from "react";
import { useState } from "react";
import "../App.css";
import { useTicTac } from "../hook/useTicTac";


export const TicTacToe = () => {
    const {board, handleClick,calculateWinner, resetGame,getStatusMessage} = useTicTac();
  console.log(board);
  return (
    <div className="game">
      <div className="status">
        {getStatusMessage()}
        <button className="resetButton" onClick={resetGame}>Reset Game</button>
      </div>
      <div className="board">
       {board.map((b,index)=>{
        return <button 
            className="cell" 
            key={index}
            onClick={()=>handleClick(index)}
            disabled={b!==null}>{b}</button>
       })}
      </div>
    </div>
  );
}