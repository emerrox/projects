import { useEffect, useState } from "react";
import { getRandomFact } from "../functions";


export function useFactCat() {
    const [fact, setFact] = useState();
    const refreshFact = ()=>{
      getRandomFact().then(newFact=> setFact(newFact))
    }
    useEffect(refreshFact,[])
    return {fact,refreshFact}
  }