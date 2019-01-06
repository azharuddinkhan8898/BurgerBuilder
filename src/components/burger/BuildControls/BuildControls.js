import React from 'react';
import Classes from "./BuildControls.css"
import BuildControl from "./BuildControl/buildControl"

const controls = [
    {label:"Salad", type:"salad"},
    {label:"Bacon", type:"bacon"},
    {label:"Cheese", type:"cheese"},
    {label:"Meat", type:"meat"}
]

const BuildControls = (props) => (
    <div className={Classes.BuildControls}>
        <h3>Total price: {props.price}</h3>
        {controls.map(cntrl=>(
            <BuildControl key={cntrl.label} label={cntrl.label} added={()=>props.addIng(cntrl.type)} removed={()=>props.removeIng(cntrl.type)}/>
        ))}
    </div>
)

export default BuildControls;