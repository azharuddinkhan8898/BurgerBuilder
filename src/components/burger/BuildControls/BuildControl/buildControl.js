import React from "react"
import Classes from "./BuildControl.css"

const BuildControl = (props) => (
    <div className={Classes.BuildControl}>
        <div className={Classes.Label}></div>
        <button className={Classes.Less}>Less</button>
        <button className={Classes.More}>More</button>
    </div>
)

export default BuildControl;