//TODO: STEP 1 - Import the useState hook.
import React, { useState, useEffect } from "react";
import "./App.css";
import TopRow from "./TopRow"
import BottomRow from "./BottomRow";
import HomeButtons from "./HomeButtons"
import AwayButtons from "./AwayButtons"
import QuarterButtons from "./QuarterButtons"
import CountDownButtons from "./CountDownButtons"

function App() {
  //TODO: STEP 2 - Establish your application's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const [homeScore, setHomeScore] = useState(0)
  const [awayScore, setAwayScore] = useState(0)
  const [quarter, setQuarter] = useState(1)
  const [minutesTens, setMinutesTens] = useState(1)
  const [minutes, setMinutes] = useState(5)
  const [secondsTens, setSecondsTens] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [isActive, setIsActive] = useState(false)

  function toggle() {
    setIsActive(!isActive)
  }

  function reset() {
    setSeconds(0)
    setSecondsTens(0)
    setMinutes(5)
    setMinutesTens(1)
    setIsActive(false)
  }

  // @@@@@ Timer counts down from 15:00
  useEffect (() => {
    let interval = null
    if (isActive) {
      interval = setInterval(() => {
        if ((seconds === 0) && ((secondsTens > 0) || (minutes > 0) || (minutesTens > 0))) {
          setSeconds(9)
          setSecondsTens(secondsTens => secondsTens - 1)
          if (secondsTens === 0) {
            setSecondsTens(5)
            setMinutes(minutes => minutes - 1)
            if (minutes === 0) {
              setMinutes(9)
              setMinutesTens(minutesTens => minutesTens - 1)
            }
          }
        } else if ((seconds === 0) && (secondsTens === 0) && (minutes === 0) && minutesTens === 0) {
          toggle()
        } else setSeconds(seconds => seconds - 1)
      }, 1000)
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [isActive, seconds])

  // @@@@@ Timer counts up
  // useEffect (() => {
  //   let interval = null
  //   if (isActive) {
  //     interval = setInterval(() => {
  //       setSeconds(seconds => seconds + 1)
  //       if (seconds === 9) {
  //         setSeconds(0)
  //         setSecondsTens(secondsTens => secondsTens + 1)
  //         if (secondsTens === 5) {
  //           setSecondsTens(0)
  //           setMinutes(minutes => minutes + 1)
  //           if (minutes === 9) {
  //             setMinutes(0)
  //             setMinutesTens(minutesTens => minutesTens + 1)
  //           }
  //         }
  //       }
  //     }, 1000)
  //   } else if (!isActive && seconds !== 0) {
  //     clearInterval(interval)
  //   }
  //   return () => clearInterval(interval)
  // }, [isActive, seconds])

  return (
    <div className="container">
      <section className="scoreboard">
        <TopRow homeScore={homeScore} awayScore={awayScore} minutesTens={minutesTens} minutes={minutes} secondsTens={secondsTens} seconds={seconds} />
        <BottomRow quarter={quarter} />
      </section>
      <section className="buttons">
        <HomeButtons homeScore={homeScore} setHomeScore={setHomeScore} />
        <AwayButtons awayScore={awayScore} setAwayScore={setAwayScore} />
        <QuarterButtons quarter={quarter} setQuarter={setQuarter} />
        <CountDownButtons toggle={toggle} isActive={isActive} reset={reset}/>
      </section>
    </div>
  )
}

export default App;
