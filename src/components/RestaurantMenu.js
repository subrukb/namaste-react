import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategories from "./RestaurantCategories";

const RestaurantMenu = () => {
    const {resId} = useParams()
    const resInfo = useRestaurantMenu(resId)
    console.log({resInfo})
    const categories = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=> {
       return c.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    })
    console.log(categories,resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
    return  resInfo === null ? <Shimmer/> : (
        <div className="menu text-left sm:mx-32 md:mx-48 my-8">
        <h1 className="font-sans font-bold text-2xl">{resInfo.cards[2].card.card.info.name}</h1>
        {/* <h3 className="text-gray-400">{resInfo.cards[2].card.card.info.cuisines.join(",")}</h3> */}
        <h3 >{resInfo.cards[2].card.card.info.costForTwoMessage}</h3>
        {categories &&  categories.map((category, index) => (
            <RestaurantCategories categorydata={category} key={category?.card?.card.title}/>
        ))
        }
        
                {/* <div className="visible ">
                    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                        <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
                        <p className="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" className="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
                    </div>
                </div> */}
               
            </div>

    )
}
export default RestaurantMenu;