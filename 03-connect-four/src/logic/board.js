import { WINNER_COMBOS } from "../constans"
export const checkWinner = (newBoard)=> {
    for(const combo of WINNER_COMBOS) {
      const [a,b,c,d] = combo
      if (newBoard[a[0]][a[1]]!=null && newBoard[a[0]][a[1]]==newBoard[b[0]][b[1]] && newBoard[a[0]][a[1]]==newBoard[c[0]][c[1]] && newBoard[a[0]][a[1]]==newBoard[d[0]][d[1]]) {
        console.log(a);
        return newBoard[a[0]][a[1]]
        
      }
    }
    if (newBoard.every(arr => arr.every(el => el !== null))) return false;
    return null
  }