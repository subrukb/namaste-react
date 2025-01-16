import {RES_IMG_URL} from '../utils/constants.js'

const RestaurantCard = ({resData}) => {
	const {cuisines,avgRating,name,cloudinaryImageId} = resData;
	return (
		<div className="res-card p-4 m-4 h-auto w-[200px] rounded-xl text-black bg-stone-400 hover:bg-slate-800 hover:text-white transition-colors duration-300">
		<img className = "rounded-lg res-card-img w-full h-48 object-cover" src ={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}/>
			<h3 className="font-bold py-4 text-lg resName">{name}</h3>
			<h4 className="starRating"> {avgRating} stars </h4>
			<h4 className="cuisines">
			<ul className='list-none flex flex-col'>
			 {cuisines.map((cuisine, index) => (
                <li key={index}>
                    {cuisine}
                    <br/>
                </li>
            ))}
			</ul>
			 </h4>
		</div>
	)

}
export const withPromptedLabel = (RestaurantCard) => {
	return (props) =>{
		return (
			<div>
				<label className="absolute bg-black text-white  m-2 p-2 rounded-lg">opened</label>
				<RestaurantCard {...props}/>
			</div>
		)
		}
}

export default RestaurantCard;