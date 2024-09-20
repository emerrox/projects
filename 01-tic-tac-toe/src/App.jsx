import { useState } from 'react'
import { Square } from './components/Square'
import {WinnerModal}from './components/WinnerModal'
import confetti from "canvas-confetti"
import { checkWinner } from './logic/board'
import { TURNS } from './constans'
import './App.css'




function App() {
  const [board,setBoard] = useState(Array(9).fill(null)) 
  const [turns, setTurns] = useState(TURNS.x)
  const [winner, setWinner] = useState(null)



  const resetBoard = ()=> {
    setBoard(Array(9).fill(null))
    setTurns(TURNS.x)
    setWinner(null)
  }

  const updateBoard = (index)=>{
    if (board[index]!=null || winner!=null) return
    // update board
    let newBoard = [...board]
    
    newBoard[index] = turns
    setBoard(newBoard)
    
    // update turn
    let newTurn = turns==TURNS.x?TURNS.o:TURNS.x
    setTurns(newTurn)
    
    // update winner
    let newWinner = checkWinner(newBoard)
    if (newWinner!= null){
      confetti()
      setWinner(newWinner)
    } 
    
  }

  return (
    <main className='board'>
      <h1>tic  tac toe</h1>
      <div className='game'>
        {
          board.map((_,index)=>{
            return (
              <Square index={index} key={index} updateBoard={updateBoard}>
                {board[index]}
              </Square>
            )
          })
        }
      </div>
      <section className='turn' >
        <Square isSelected={turns===TURNS.x}>
          {TURNS.x}
        </Square>
        <Square isSelected={turns===TURNS.o}>
          {TURNS.o}
        </Square>
      </section>
      <button onClick={resetBoard}>
    REINICIAR
  </button>
        <WinnerModal winner={winner} resetBoard={resetBoard} />

    </main>
  )
}

export default App
