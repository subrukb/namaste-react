import React, { useState } from "react";
import ItemCategory from "./ItemCategory";

const RestaurantCategories = ({categorydata}) => {
    console.log({categorydata})
    const [showAccData,setShowAccData] = useState(false);
    const handleAccordianClick = () => {
        setShowAccData(!showAccData);
    }
    return (
        
        <div id="accordion py-4">
                <div>
                <div className="flex justify-between my-4 shadow-lg rounded-lg px-2" onClick={handleAccordianClick} >
                <span className="text-lg text-black text-bold py-2">{categorydata.card.card.title} ({categorydata.card.card.itemCards.length})</span>
                    <button disabled type="button" className="flex items-center justify-between px-0 py-4 font-medium rtl:text-right  border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 gap-3">
                        <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                        </svg>
                    </button>
                </div>
               {showAccData && <ItemCategory itemData={categorydata.card.card.itemCards}/>}
                </div>
        
        
        </div>
    )
}
export default RestaurantCategories;