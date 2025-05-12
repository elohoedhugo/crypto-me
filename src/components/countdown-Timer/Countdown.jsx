import React, { useEffect, useState } from 'react'

const Countdown = () => {
 
  const[timeLeft, setTimeLeft] = useState(48 * 60 * 60 )

  useEffect(()=>{
    const timer = setInterval(()=>{
      setTimeLeft((prev)=>{
       if(prev<=1){
        clearInterval(timer)
        return 0
       }
       return prev - 1
    })
  }, 1000)

    return (()=> clearInterval(timer))
  }, [])



  const hours = Math.floor(timeLeft / 3600)
  const mins = Math.floor((timeLeft % 3600) / 60)
  const secs = timeLeft % 60
   
  const paddedhours = String(hours).padStart(2, "0")
  const paddedmins = String(mins).padStart(2, "0")
  const paddedsecs = String(secs).padStart(2, "0")

  return (
    <div>
      <span>{paddedhours}:{paddedmins}:{paddedsecs}</span>
    </div>
  )
}

export default Countdown