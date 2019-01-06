import React from "react";
import Classes from "./burgeringrediants.css";
import PropTypes from "prop-types"

class BurgerIngrediants extends React.Component{
    render(){
        let ingrediants = null;
    switch (this.props.type){
        case ("burger-bottom"):
           ingrediants = <div className={Classes.BreadBottom}></div> 
           break;
        case ("burger-top"):
           ingrediants = (<div className={Classes.BreadTop}>
               <div className={Classes.Seeds1}></div>
               <div className={Classes.Seeds2}></div>
           </div> )
           break; 
        case ("meat"):
           ingrediants = <div className={Classes.Meat}></div>
           break; 
        case ("cheese"):
           ingrediants = <div className={Classes.Cheese}></div>
           break;

        case ("salad"):
           ingrediants = <div className={Classes.Salad}></div>
           break;

        case ("bacon"):
           ingrediants = <div className={Classes.Bacon}></div>
           break;
        default:
            ingrediants= null
    }
    return ingrediants;
    }
}
BurgerIngrediants.propTypes = {
    type: PropTypes.string.isRequired
};
export default BurgerIngrediants;