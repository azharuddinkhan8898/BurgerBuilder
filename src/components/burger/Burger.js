import React from "react";
import BurgerIngrediants from "./burgeringrediants/burgeringrediants";
import Classes from "./Burger.css"

const Burger = (props) => {
    
    let transformedIngredients = Object.keys(props.ingredients)
        .map((ing) => {
        return [...Array(props.ingredients[ing])].map((v,i)=>{
            return <BurgerIngrediants key={ing+i} type={ing}/>
        })
    }).reduce((arr, el) => {
        return arr.concat(el)
    }, [])
    if(transformedIngredients.length === 0){
        transformedIngredients = <p>Start adding your ingredients</p>
    }
    return (
        <div className={Classes.Burger}>
            <BurgerIngrediants type="burger-top"/>
            {transformedIngredients}
            <BurgerIngrediants type="burger-bottom"/>
        </div>
        
    )
}

export default Burger;