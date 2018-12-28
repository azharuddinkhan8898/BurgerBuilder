import React from 'react';
import Classes from "./BuildControls.css"
import BuildControl from "./BuildControl/buildControl"

const BuildControls = (props) => (
    <div className={Classes.BuildControls}>
        <BuildControl/>
    </div>
)

export default BuildControls;