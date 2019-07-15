//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import TopRow from "./TopRow"
import BottomRow from "./BottomRow";
import HomeButtons from "./HomeButtons"
import AwayButtons from "./AwayButtons"
import QuarterButtons from "./QuarterButtons"

function App() {
  //TODO: STEP 2 - Establish your application's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const [homeScore, setHomeScore] = useState(0)
  const [awayScore, setAwayScore] = useState(0)
  const [quarter, setQuarter] = useState(1)

  return (
    <div className="container">
      <section className="scoreboard">
        <TopRow homeScore={homeScore} awayScore={awayScore} />
        <BottomRow quarter={quarter} />
      </section>
      <section className="buttons">
        <HomeButtons homeScore={homeScore} setHomeScore={setHomeScore} />
        <AwayButtons awayScore={awayScore} setAwayScore={setAwayScore} />
        <QuarterButtons quarter={quarter} setQuarter={setQuarter} />
      </section>
    </div>
  )
}

export default App;
