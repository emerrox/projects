import { Square } from "./Square"
export function WinnerModal({winner, resetBoard}){
    if (winner == null) return
    return(
      <section className='winner'>
        <div className='text'>
          <h2>
            {
              winner == false ? 'EMPATE' : `GANÓ`
            }
          </h2>
          <header className='win'>
            {winner && <Square>{winner}</Square>}
          </header>

        </div>

  <button onClick={resetBoard}>
    REINICIAR
  </button>
      </section>
    )
}