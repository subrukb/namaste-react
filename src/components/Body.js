import RestaurantCard, {withPromptedLabel} from './RestaurantCard';
import Shimmer from './Shimmer';
import {useState,  useEffect} from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

export const Body = () => {
	const [listOfRes,setListOfRes] = useState([]);
	const [searchText, setSearchText] = useState("");
	const [searchListOfRes,setSearchListOfRes] = useState([]);
	const RestaurantCardWithLabel = withPromptedLabel(RestaurantCard)

	useEffect(()=>{
		fetchData();
	},[])

	const fetchData = async () => {
		let res = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
		res = await res.json();
		setListOfRes(res.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
		setSearchListOfRes(res.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
		console.log({searchListOfRes})
	}

	const onlineStatus = useOnlineStatus();
	if(onlineStatus === false){
		return (
			<h1>Looks like you are offline!!!, Please check your internet connection</h1>
		)
	}
	return  listOfRes.length === 0 ? (<Shimmer/>): (
	<div className="body">
		<div className="filter flex">
		    <div className="search-box p-4 m-4 flex items-center">
		    <input type="text" className="border border-solid border-black" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
		    <button className='bg-blue-400 mx-4 px-4 py-2 rounded-lg hover:bg-blue-600 text-white' onClick={()=>{
		    	console.log({listOfRes})
		    	const newRes = listOfRes.filter((res)=> {return res.info.name.toLowerCase().includes(searchText.toLowerCase())})
		    	setSearchListOfRes(newRes)
		    }}>Search</button>
		    </div>
			<div className='p-4 m-4 flex items-center'>
			<button className="filter-btn bg-sky-600 px-2 py-2 rounded-lg hover:bg-sky-900 text-white" onClick={()=>{
				let newresList = resList.filter((res)=>res.resStarRating > 4);
				console.log(newresList)
				setListOfRes([...newresList])
			}}>Top Rated Restaurant</button>
			</div>
		</div>
		<div className="res-container flex flex-wrap">
			{console.log({searchListOfRes})}
		{searchListOfRes.map((restaurant,index)=>(
			<Link to={`/restaurant/${restaurant.info.id}`} className='res-tile'>
				{restaurant.info.isOpen ? <RestaurantCardWithLabel key={`res-${index}`} resData={restaurant.info}/> :<RestaurantCard key={`res-${index}`} resData={restaurant.info}/> }
				</Link>
		))
		}
		</div>
	</div>
	
	)

}

export default Body;