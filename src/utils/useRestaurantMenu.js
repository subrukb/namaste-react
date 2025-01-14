import { useState,useEffect } from "react";

const useRestaurantMenu = (resId) => {
    const [resInfo,setresInfo] = useState(null);

    useEffect(()=>{
        fetchData()
       },[])
       const fetchData = async () => {
        let res = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.96340&lng=77.58550&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`);
        res = await res.json();
        console.log(res.data);
        setresInfo(res.data)
    }
    return resInfo;
}

export default useRestaurantMenu;