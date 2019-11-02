import React from "react"

const CountDownButtons = props => {
  return (
    <div className="countDownButtons">
      <button className="countDownButton__start" onClick={props.toggle}> {props.isActive ? 'Pause' : 'Start'} </button>
      <button className="countDownButton__reset" onClick={props.reset}>Reset</button>
    </div>
  )
}
  
export default CountDownButtons