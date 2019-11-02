import React from "react"

const QuarterButtons = props => {
    return (
        <div className="quarterButton">
            <button className="quarterButton" onClick={() => {
                    if (props.quarter < 4) props.setQuarter(props.quarter + 1)
                    // else props.setQuarter(props.quarter = 1)
                }}>Add Quarter</button>
        </div>
    )
}

export default QuarterButtons