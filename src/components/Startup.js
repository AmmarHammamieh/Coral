import React, { useEffect, useState } from 'react'
import Logo from './animation/Logo'

function Startup() {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
          setLoading(false)
        }, 3000);
        return clearTimeout()
    }, [])
  return (
      <div id='start-up' className={`${loading ? "" : "animate-d-none"}`}>
          <div className={`left-door ${loading ? "" : "animate-flip-left"}`}></div>
          <div className={`right-door ${loading ? "" : "animate-flip-right"}`}></div>
          <div className={`${loading ? "" : "animate-opacity-0"} m-auto text-center w-fit absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2`}>
            <Logo/>
            <p className='mt-3 text-primary font-roboto-bold'>Exciting Treasures Just a Moment Away!</p>
        </div>
    </div>
  )
}

export default Startup