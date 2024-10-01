import { useState } from 'react'
import { Square } from './components/Square'
import { Column } from './components/Column'
import {WinnerModal}from './components/WinnerModal'
import { checkWinner } from './logic/board'
import { TURNS } from './constans'
import './App.css'




function App() {
  const [board,setBoard] = useState(Array(4).fill(Array(4).fill(null))) 
  const [turns, setTurns] = useState(TURNS.x)
  const [winner, setWinner] = useState(null)



  const resetBoard = ()=> {
    setBoard(Array(4).fill(Array(4).fill(null)))
    setTurns(TURNS.x)
    setWinner(null)
  }
  console.log(board[1][0]);
  const updateBoard = (indexCol)=>{
    let emptySquare = board[indexCol].indexOf(null)    
    if (emptySquare==-1 || winner!=null) return
    // update board
    let newBoard = [...board]
    newBoard[indexCol] = [...board[indexCol]];    
    newBoard[indexCol][emptySquare] = turns; 
    setBoard(newBoard)
    
    
    // update turn
    let newTurn = turns==TURNS.x?TURNS.o:TURNS.x
    setTurns(newTurn)
    
    // update winner
    let newWinner = checkWinner(newBoard)
    if (newWinner!= null){
      setWinner(newWinner)
    } 
    
  }

  return (
    <main className='board'>
      <h1>Connect 4</h1>
      <div className='game'>
        {
          board.map((_,index)=>{
            return (
              <Column key={index} updateBoard={updateBoard} index={index} >
                {board[index]}
              </Column>
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
