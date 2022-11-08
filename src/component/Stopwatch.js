import React, { useEffect, useState } from 'react'
import './style.css'

function Stopwatch() {

  const [hh, sethh] = useState(0)
  const [mm, setmm] = useState(0)

  const [ss, setss] = useState(0)

  const [mss, setmss] = useState(0)

 
  var stopwatch;
 useEffect(()=>{
 
  stopwatch= setInterval(()=>{
    setmss(mss+1);
    if(mss===999){
      setss(ss+1);
      setmss(0);
    } if(ss===60){
      setmm(mm+1);
      setss(0);
    }
    if(mm===60){
      sethh(hh+1);
      setmm(0);
    }
  },1000)
  return ()=>clearInterval(stopwatch);
 })
  const reset = () => {
    sethh(0);
    setmm(0);
    setss(0);
    setmss(0);
   

  }
  const stop = () => {
    clearInterval(stopwatch);
   
  }



  return (
    <>
      <div className='container'>Stopwatch
        <h1>{hh}:{mm}:{ss}:{mss}</h1>
        <button className="btn btn-danger btn-circle btn-sm" onClick={stop} >Stop</button>
        <button className="btn btn-danger btn-circle btn-sm" onClick={reset} >Restart</button>

      </div>
    </>
  )
}

export default Stopwatch