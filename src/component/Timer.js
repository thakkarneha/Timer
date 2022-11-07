import React, { useEffect, useState } from 'react'
import './style.css'




function Timer() {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
  
    const deadline = "November, 24, 2022";
  
    const getTime = () => {
      const time = Date.parse(deadline) - Date.now();
  
      setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((time / 1000 / 60) % 60));
      setSeconds(Math.floor((time / 1000) % 60));
    };
  
    useEffect(() => {
      const interval = setInterval(() => getTime(deadline), 1000);
  
      return () => clearInterval(interval);
    }, []);
  
    
    return (
        <>
        <div className='container'>
        <h1 style={{align:'center'}}>  Timer For Birth Date</h1>
       
        <div className="timer">
        <div className='col-4'><p className="box">{days} Days</p></div>
        <div className='col-4'><p className="box">{hours} Hours</p></div>

        <div className='col-4'><p className="box">{minutes} Minutes</p></div>

        <div className='col-4'><p className="box">{seconds} Sceonds</p></div>
        </div>
        </div>
           

        </>)
}

export default Timer