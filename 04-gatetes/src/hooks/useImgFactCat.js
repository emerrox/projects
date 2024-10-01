import { useEffect, useState } from "react";
import { getCatImgBy3Words } from "../functions";

export function useImgFactCat({fact}){
    const [imgFact, setImgFact] = useState();

    useEffect(() => {
      if (!fact) return
      let firstWord = fact.split(' ',3).join(' ');
      getCatImgBy3Words(firstWord).then(img => setImgFact(img))
      
    }, [fact]); 
    return {imgFact}
  }