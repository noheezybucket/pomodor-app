import './App.css'
import {useEffect, useRef, useState} from "react";

function App() {

    const [breakLength, setBreakLength] = useState(5)
    const [sessionLength, setSessionLength] = useState(25)
    const [timeleft, setTimeleft] = useState(sessionLength * 60)
    const [isPlaying, setIsPlaying] = useState(false)
    const intervalRef = useRef(null)

    const formatTime = (time) => {
        let minutes = Math.floor(time / 60).toString().padStart(2, '0')
        let seconds = (time % 60).toString().padStart(2, '0')
        console.log(`${minutes}:${seconds}`)
        return `${minutes}:${seconds}`
    }

    useEffect(() => {
        setTimeleft(formatTime(sessionLength * 60))

    }, [sessionLength]);

    const playTimer = () => {
        if(isPlaying){
           intervalRef.current = setInterval(() => {
                setTimeleft((prev) => {

                    console.log(prev)
                    return prev - 1
                })
            },1000)
            setIsPlaying(!isPlaying)

        }

    }

    const resetTimer = () => {
        setSessionLength(25)
        setBreakLength(5)
        setIsPlaying(false)
    }

  return (
    <>
      <div id="app">
          <h1>🅿ush Up</h1>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <p><b>'Never give up life is a b***, so be a dog.'</b> <br/> Some dude</p>
          <div className="setting">
              {/*break*/}
              <div>
                  <h2 id="break-label">Break length</h2>
                  <div className="setting_box">
                      <button onClick={() => {
                          if (breakLength > 1) {
                              setBreakLength(breakLength - 1)
                          }
                      }} id="break-decrement" disabled={isPlaying}>
                          <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                               xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                               viewBox="0 0 24 24">
                              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M7.119 8h9.762a1 1 0 0 1 .772 1.636l-4.881 5.927a1 1 0 0 1-1.544 0l-4.88-5.927A1 1 0 0 1 7.118 8Z"/>
                          </svg>
                      </button>
                      <span className="set_txt" id="break-length">{breakLength}</span>
                      <button onClick={() => {
                          if(breakLength < 60) {

                              setBreakLength(breakLength + 1)
                          }
                      }} id="break-increment" disabled={isPlaying}>
                          <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                               xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                               viewBox="0 0 24 24">
                              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M16.881 16H7.119a1 1 0 0 1-.772-1.636l4.881-5.927a1 1 0 0 1 1.544 0l4.88 5.927a1 1 0 0 1-.77 1.636Z"/>
                          </svg>
                      </button>
                  </div>
              </div>
              {/*session*/}
              <div>
                  <h2 id="session-label">Session length</h2>
                  <div className="setting_box">
                      <button onClick={() => {
                          if (sessionLength > 1) {
                              setSessionLength(sessionLength - 1)
                          }
                      }} id="session-decrement" disabled={isPlaying}>
                          <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                               xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                               viewBox="0 0 24 24">
                              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M7.119 8h9.762a1 1 0 0 1 .772 1.636l-4.881 5.927a1 1 0 0 1-1.544 0l-4.88-5.927A1 1 0 0 1 7.118 8Z"/>
                          </svg>
                      </button>
                      <span className="set_txt" id="session-length">{sessionLength}</span>
                      <button onClick={() => {
                          if(sessionLength < 60) {
                              setSessionLength(sessionLength + 1)
                          }
                      }} id="session-increment" disabled={isPlaying}>
                          <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                               xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                               viewBox="0 0 24 24">
                              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M16.881 16H7.119a1 1 0 0 1-.772-1.636l4.881-5.927a1 1 0 0 1 1.544 0l4.88 5.927a1 1 0 0 1-.77 1.636Z"/>
                          </svg>
                      </button>
                  </div>
              </div>
          </div>

          <div id="timer">
              <h2 id="timer-label">Session</h2>
              <div id="time-left">{formatTime(timeleft)}</div>
          </div>

          <div className="buttons_box">
              <button className="btn" id="start_stop" onClick={playTimer}>
                  {
                      isPlaying ?
                          <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                               xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                               viewBox="0 0 24 24">
                              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M9 6H8a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1Zm7 0h-1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1Z"/>
                          </svg>
                          :
                          <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                               xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                               viewBox="0 0 24 24">
                              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                    strokeWidth="2" d="M8 18V6l8 6-8 6Z"/>
                          </svg>

                  }


              </button>
              <button className="btn" id="reset" onClick={() => resetTimer()}>
                  <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                       xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M17.651 7.65a7.131 7.131 0 0 0-12.68 3.15M18.001 4v4h-4m-7.652 8.35a7.13 7.13 0 0 0 12.68-3.15M6 20v-4h4"/>
                  </svg>
              </button>
          </div>

          <div id="sessions">
              <span className="session"></span>
              <span className="session"></span>
              <span className="session"></span>
              <span className="session"></span>
              <span className="session"></span>
          </div>
      </div>
    </>
  )
}

export default App