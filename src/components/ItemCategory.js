import React from "react";

const ItemCategory = React.memo(({ itemData }) => {
    console.log(itemData)
    return (
        <div className="accordianbody rounded-md">
            {itemData.map((item) => (
                <div className="p-5 rounded-md border-b-2 border-b-gray-400 dark:bg-gray-100">
                    <div className="flex w-full justify-between flex-row-reverse">
                        <img className="w-1/6" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.card.info.imageId}`} />
                        <button className="absolute p-3 mx-6 rounded-lg shadow-sm bg-stone-300">Add + </button>

                        <p className="mb-2 text-black dark:text-black-500">{item.card.info.name} - ₹{item.card.info.defaultPrice / 100}
                            <br /><br /> <span className="text-gray-500 dark:text-gray-400 text-sm">{item.card.info.description}</span>
                        </p>

                    </div>
                </div>
            ))}

        </div>
    )
})

export default ItemCategory;