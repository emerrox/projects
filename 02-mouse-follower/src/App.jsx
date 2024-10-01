import { useEffect, useState } from 'react'
import './App.css'
import FollowMouse from './FollowMouse'

function App() {
  const[following,setFollowing] = useState(false)
  const[position,setPosition] = useState({x:0, y:0})

  const handlemove = (event)=>{
    const {clientX, clientY} = event
    setPosition({x:clientX, y:clientY})        
    console.log(clientX);
    
  }

  useEffect(()=>{

    const handlemove = (event)=>{
        const {clientX, clientY} = event
        setPosition({x:clientX, y:clientY})        
        console.log(clientX);
        
      }
    if (following) window.addEventListener('pointermove',handlemove)

    return ()=> removeEventListener('pointermove',handlemove)
  },[following])

  return (
    <>

      <FollowMouse following={following} handlemove={handlemove} position={position}/>
      <button onClick={()=>setFollowing(!following)}>
        {following?'siguiendo':'seguir'}
      </button>
    </>
  )
}

export default App
