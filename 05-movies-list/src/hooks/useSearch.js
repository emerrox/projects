import { useEffect, useState } from "react"
import { filterInput } from "../functions"

export function useSearch() {
    const [queri, setQueri] = useState()
    const [err, setError] = useState()
    useEffect(()=>{
      setError(filterInput(queri))
    },[queri])
    return {queri, setQueri, err}
  }