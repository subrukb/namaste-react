import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const {resId} = useParams()
    const resInfo = useRestaurantMenu(resId)
    
    return  resInfo === null ? <Shimmer/> : (
        <div className="menu">
        <h1>{resInfo.cards[2].card.card.info.name}</h1>
        <h3>{resInfo.cards[2].card.card.info.cuisines.join(",")}</h3>
        <h3>{resInfo.cards[2].card.card.info.costForTwoMessage}</h3>
        <h2>Menu</h2>
        
        <ul>
            {
             resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards.map((card)=> {
                return(
                <li key={card.card.info.id}>{card.card.info.name}</li>
                )
    })
            }
            
        </ul>
        </div>
    )
}
export default RestaurantMenu;