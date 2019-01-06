import React from "react"
import Burger from "./../../components/burger/Burger"
import BuildControls from "./../../components/burger/BuildControls/BuildControls"

const INGREDIENTS_PRICES = {
    salad:0.4,
    bacon:0.6,
    meat:1.6,
    cheese:0.8
}

class BurgerBuilder extends React.Component{
    state = {
        ingredients : {
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        },
        totalPrice:4
    }

    addIngredientsHandler = (type) => {
        const updatedIng = this.state.ingredients[type] + 1;
        const updateObj = {...this.state.ingredients};
        updateObj[type] = updatedIng;
        const updatedPrice = this.state.totalPrice + INGREDIENTS_PRICES[type];
        this.setState({
            ingredients:updateObj, totalPrice:updatedPrice
        })
    }

    removeIngredientsHandler = (type) => {
        const updatedIng = this.state.ingredients[type] - 1;
        const updateObj = {...this.state.ingredients};
        updateObj[type] = updatedIng;
        const updatedPrice = this.state.totalPrice - INGREDIENTS_PRICES[type];
        this.setState({
            ingredients:updateObj, totalPrice:updatedPrice
        })
    }

    render() {
        return(
            <React.Fragment>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls  price={this.state.totalPrice} addIng={this.addIngredientsHandler} removeIng={this.removeIngredientsHandler}/>
            </React.Fragment>
        )
    }
}

export default BurgerBuilder;