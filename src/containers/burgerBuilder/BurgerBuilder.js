import React from "react"
import Burger from "./../../components/burger/Burger"

class BurgerBuilder extends React.Component{
    state = {
        ingredients : {
            Salad:0,
            Bacon:0,
            Cheese:0,
            Meat:0
        }
    }
    render() {
        return(
            <React.Fragment>
                <Burger ingredients={this.state.ingredients}/>
                <div>Burger controls</div>
            </React.Fragment>
        )
    }
}

export default BurgerBuilder;