import { WINNER_COMBOS } from "../constans"
export const checkWinner = (newBoard)=> {
    for(const combo of WINNER_COMBOS) {
      const [a,b,c] = combo
      if (newBoard[a] && newBoard[a]==newBoard[b] && newBoard[a]==newBoard[c]) {
        return newBoard[a]
      }
    }
    if (newBoard.findIndex((el)=> el == null) == -1 ) return false
    return null
  }