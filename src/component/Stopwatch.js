import React, {  useState } from 'react'
import './style.css'

function Stopwatch() {
    const time = new Date();
    var hour=time.getHours();
    var minutes=time.getMinutes();
    var seconds=time.getSeconds();
   var milisceonds= time.getMilliseconds();
   
    const [hh,sethh]=useState(hour)
    const [mm,setmm]=useState(minutes)

    const [ss,setss]=useState(seconds)

    const [mss,setmss]=useState(milisceonds)

const[disable,setDisable]=useState(false)
const[disable1,setDisable1]=useState(true)

const reset=()=>{
    sethh(0)
    setmm(0)
    setss(0)
    setmss(0)
    setDisable(true)
    setDisable1(false)

}
const start=()=>{
  setDisable1(true)
  setDisable(false)
 sethh(hour)
  setmm(minutes)
    setss(seconds)
    setmss(milisceonds)
}



  return (
    <>
    <div className='container'>Stopwatch
    <h1>{hh}:{mm}:{ss}:{mss}</h1>
    <button className="btn btn-danger btn-circle btn-sm" onClick={start} disabled={disable1}>Start</button>
    <button className="btn btn-danger btn-circle btn-sm" onClick={reset} disabled={disable}>Reset</button>

    </div>
    </>
  )
}

export default Stopwatch